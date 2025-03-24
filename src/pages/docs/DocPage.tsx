import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { 
  getNavigationLinks, 
  extractPublishDate, 
  getGitHubPath, 
  normalizeDocPath,
  extractTitle,
  extractDescription,
  extractFrontmatter,
  generateSidebarStructure
} from '@/utils/docs';
import DocMetadata from '@/components/DocMetadata';
import MarkdownRenderer from '@/components/docs/MarkdownRenderer';
import DocNavigation from '@/components/docs/DocNavigation';
import DocBreadcrumb from '@/components/docs/DocBreadcrumb';
import DocsAlert from '@/components/docs/DocsAlert';

const DocPage: React.FC = () => {
  const { '*': path } = useParams();
  const location = useLocation();
  const [content, setContent] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [publishDate, setPublishDate] = useState<string>('January 1, 2023');
  const [description, setDescription] = useState<string>('');
  const [frontmatter, setFrontmatter] = useState<Record<string, any>>({});
  
  const normalizedPath = path || 'introduction';
  const githubPath = getGitHubPath(normalizedPath);
  
  const sidebar = generateSidebarStructure();
  const { prev, next } = getNavigationLinks(location.pathname, sidebar);
  
  useEffect(() => {
    const loadContent = async () => {
      setLoading(true);
      try {
        // Handle both regular pages and overview pages (like style-guide, link-validation)
        // First try to load as is, and if that fails, try to load as an index file
        let markdownContent;
        try {
          const moduleImport = await import(`@/docs/${normalizeDocPath(normalizedPath)}.md?raw`);
          markdownContent = moduleImport.default;
        } catch (e) {
          // If loading the direct file fails, it might be a section landing page
          // Don't show error yet, try to load potential section overview page
          try {
            const moduleImport = await import(`@/docs/${normalizeDocPath(normalizedPath)}/index.md?raw`);
            markdownContent = moduleImport.default;
          } catch (innerError) {
            // If both attempts fail, throw to trigger the error handling
            throw innerError;
          }
        }
        
        const extractedFrontmatter = extractFrontmatter(markdownContent);
        const extractedTitle = extractTitle(markdownContent);
        const extractedDescription = extractDescription(markdownContent);
        
        setFrontmatter(extractedFrontmatter);
        setTitle(extractedTitle);
        setDescription(extractedDescription);
        
        setPublishDate(extractPublishDate(markdownContent));
        
        setContent(markdownContent);
        setError(false);
        
        document.title = `${extractedTitle} | DocuSanity`;
      } catch (e) {
        console.error("Failed to load markdown:", e);
        setError(true);
        setTitle('Not Found');
        setContent('# Page Not Found\n\nThe requested documentation page could not be found.');
        document.title = "Page Not Found | DocuSanity";
      } finally {
        setLoading(false);
      }
    };
    
    loadContent();
  }, [normalizedPath]);

  // Show certain alerts based on path or frontmatter flags
  const showConfigInfo = normalizedPath.includes('configuration') || frontmatter.showConfigInfo;
  const showStyleGuideInfo = normalizedPath.includes('style-guide') || frontmatter.showStyleGuideInfo;

  if (loading) {
    return <div className="animate-pulse p-4">Loading documentation...</div>;
  }

  return (
    <div className="animate-fadeIn square-docs-container">
      <DocBreadcrumb title={title} />

      {showConfigInfo && (
        <DocsAlert variant="info" title="Configuration Best Practices">
          It's recommended to keep your configuration file in the root of your project and version it with your code. 
          This ensures that everyone on your team uses the same configuration.
        </DocsAlert>
      )}
      
      {showStyleGuideInfo && (
        <DocsAlert variant="warning" title="Style Guide Recommendation">
          Following a consistent style guide improves documentation readability and maintains a professional appearance across your project.
        </DocsAlert>
      )}

      <MarkdownRenderer content={content} />

      <div className="mt-12">
        <DocMetadata publishDate={publishDate} githubPath={githubPath} />
      </div>

      <DocNavigation prev={prev} next={next} />
    </div>
  );
};

export default DocPage;
