
/**
 * Utilities for generating documentation structure
 */
import { getAvailableDocFiles } from './file-loader';
import { loadMarkdownFile } from './file-loader';
import { extractTitle, formatSectionTitle, formatPageTitle } from './frontmatter';

/**
 * Generate navigation structure by scanning the docs directory
 */
export const generateNavStructure = async () => {
  try {
    const files = await getAvailableDocFiles();
    const sections: Record<string, any> = {};
    
    // Process each file to build the navigation structure
    for (const file of files) {
      // Handle root index file
      if (file === 'index') {
        // Try to load the markdown to get the title
        try {
          const markdownContent = await loadMarkdownFile('');
          const titleFromMarkdown = extractTitle(markdownContent);
          sections['index'] = {
            title: titleFromMarkdown || 'Introduction',
            path: '/docs',
            items: []
          };
        } catch (error) {
          sections['index'] = {
            title: 'Introduction',
            path: '/docs',
            items: []
          };
        }
        continue;
      }
      
      if (file.includes('/')) {
        // This is a section or a nested page
        const [sectionName, ...restPath] = file.split('/');
        const restPathJoined = restPath.join('/');
        
        if (!sections[sectionName]) {
          sections[sectionName] = {
            title: formatSectionTitle(sectionName),
            path: `/docs/${sectionName}`,
            items: []
          };
        }
        
        // If this is not the index file, add it as a child page
        if (restPathJoined && restPathJoined !== 'index') {
          const pageName = restPathJoined.split('/').pop() || '';
          // Try to load the markdown to get the page title
          try {
            const markdownContent = await loadMarkdownFile(`${sectionName}/${restPathJoined}`);
            const titleFromMarkdown = extractTitle(markdownContent);
            sections[sectionName].items.push({
              title: titleFromMarkdown || formatPageTitle(pageName),
              path: `/docs/${sectionName}/${restPathJoined}`
            });
          } catch (error) {
            sections[sectionName].items.push({
              title: formatPageTitle(pageName),
              path: `/docs/${sectionName}/${restPathJoined}`
            });
          }
        }
      } else {
        // This is a top-level page
        // Try to load the markdown to get the page title
        try {
          const markdownContent = await loadMarkdownFile(file);
          const titleFromMarkdown = extractTitle(markdownContent);
          sections[file] = {
            title: titleFromMarkdown || formatPageTitle(file),
            path: `/docs/${file}`,
            items: []
          };
        } catch (error) {
          sections[file] = {
            title: formatPageTitle(file),
            path: `/docs/${file}`,
            items: []
          };
        }
      }
    }
    
    return Object.values(sections);
  } catch (error) {
    console.error('Error generating nav structure:', error);
    return [];
  }
};
