
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getNavigationLinks } from '@/utils/docs';
import { useSidebarStructure } from '@/utils/docs/sidebar';
import MarkdownRenderer from '@/components/docs/MarkdownRenderer';
import DocNavigation from '@/components/docs/DocNavigation';
import DocMetadata from '@/components/DocMetadata';
import DocBreadcrumb from '@/components/docs/DocBreadcrumb';
import DocHeader from '@/components/docs/DocHeader';
import { useLanguage } from '@/contexts/LanguageContext';
import { loadMarkdownFile } from '@/utils/docs/loader';
import { 
  extractVersionFromPath, 
  getVersionConfig, 
  getCurrentVersion 
} from '@/utils/docs/versions';

const DocPage = () => {
  const location = useLocation();
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { sidebar } = useSidebarStructure();
  const { getLocalizedPath } = useLanguage();
  const versionConfig = getVersionConfig();

  const path = location.pathname.replace(/^\/docs\//, '');
  const { version } = extractVersionFromPath(location.pathname);
  const currentVersion = version || getCurrentVersion().name;
  
  const { prev, next } = getNavigationLinks(location.pathname, sidebar);
  
  useEffect(() => {
    const fetchContent = async () => {
      try {
        setIsLoading(true);
        const localizedPath = getLocalizedPath(path);
        try {
          // Use the versioned loader
          const markdownContent = await loadMarkdownFile(localizedPath);
          setContent(markdownContent);
          setError(null);
        } catch (localizedErr) {
          const markdownContent = await loadMarkdownFile(path);
          setContent(markdownContent);
          setError(null);
        }
      } catch (err: any) {
        console.error("Failed to load doc content:", err);
        setError(err);
        setContent('');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchContent();
  }, [path, getLocalizedPath, currentVersion]);
  
  return (
    <div className="pb-16">
      <DocBreadcrumb path={location.pathname} />
      
      {/* Add version selector in header when enabled */}
      {versionConfig.enabled && (
        <DocHeader />
      )}
      
      <div className="mt-6">
        {isLoading ? (
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-3/4"></div>
            <div className="h-4 bg-muted rounded w-1/2"></div>
            <div className="h-4 bg-muted rounded"></div>
            <div className="h-4 bg-muted rounded"></div>
          </div>
        ) : error ? (
          <div className="p-4 border border-red-200 bg-red-50 text-red-700 rounded-md">
            <h2 className="text-xl font-bold">Error Loading Document</h2>
            <p className="mt-2">{error.message}</p>
          </div>
        ) : (
          <>
            <MarkdownRenderer content={content} />
            <div className="mt-8">
              <DocMetadata markdown={content} githubPath={path} />
            </div>
          </>
        )}
      </div>
      
      <DocNavigation prev={prev} next={next} />
    </div>
  );
};

export default DocPage;
