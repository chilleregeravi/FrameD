
/**
 * Utilities for loading markdown files
 */
import { normalizeDocPath } from './path-utils';

/**
 * Dynamic markdown import handler
 * This loads markdown files from the docs directory
 */
export const loadMarkdownFile = async (path: string): Promise<string> => {
  try {
    const normalizedPath = normalizeDocPath(path);
    
    // Use dynamic import with glob pattern to find any markdown file
    const modules = import.meta.glob('/src/docs/**/*.md', { as: 'raw' });
    
    // Find matching files based on the normalized path
    let matchingPaths: string[] = [];
    
    for (const modulePath in modules) {
      // Normalize the module path to match our format
      let normalizedModulePath = modulePath
        .replace('/src/docs/', '')
        .replace('.md', '');
      
      // Special case for root index
      if (normalizedModulePath === 'index' && normalizedPath === '') {
        matchingPaths.push(modulePath);
        break;
      } 
      // Exact match for file
      else if (normalizedModulePath === normalizedPath) {
        matchingPaths.push(modulePath);
        break;
      } 
      // Section index file (e.g., github-actions/index)
      else if (normalizedPath && (
        normalizedModulePath === `${normalizedPath}/index` || 
        normalizedModulePath === normalizedPath
      )) {
        matchingPaths.push(modulePath);
        break;
      }
    }
    
    // If no direct match was found, try to find index.md in the requested directory
    if (matchingPaths.length === 0) {
      for (const modulePath in modules) {
        const normalizedModulePath = modulePath
          .replace('/src/docs/', '')
          .replace('.md', '');
        
        // Look for a section's index file as fallback
        if (normalizedPath && normalizedModulePath === `${normalizedPath}/index`) {
          matchingPaths.push(modulePath);
          break;
        }
      }
    }
    
    if (matchingPaths.length === 0) {
      throw new Error(`No markdown file found for path: ${normalizedPath}`);
    }
    
    // Use the first matching file
    const loader = modules[matchingPaths[0]];
    if (!loader) {
      throw new Error(`Could not load module for path: ${matchingPaths[0]}`);
    }
    
    const content = await loader();
    return content;
  } catch (error) {
    console.error('Error loading markdown file:', error);
    throw error;
  }
};

/**
 * Get all available markdown files in the docs directory
 */
export const getAvailableDocFiles = async (): Promise<string[]> => {
  try {
    // Use dynamic import with glob pattern to find any markdown file
    const modules = import.meta.glob('/src/docs/**/*.md', { as: 'raw' });
    
    // Extract paths and normalize them
    return Object.keys(modules).map(path => {
      return path
        .replace('/src/docs/', '')
        .replace('.md', '');
    });
  } catch (error) {
    console.error('Error getting available doc files:', error);
    return [];
  }
};
