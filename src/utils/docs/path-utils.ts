
/**
 * Path normalization and manipulation utilities
 */

/**
 * Get GitHub path for a document
 */
export const getGitHubPath = (path: string): string => {
  // Normalize the path
  let normalizedPath = path || '';
  if (normalizedPath.startsWith('/')) {
    normalizedPath = normalizedPath.substring(1);
  }
  
  // Remove docs prefix if present
  normalizedPath = normalizedPath.replace(/^docs\//, '');
  // For empty path, return index
  if (normalizedPath === '') {
    return 'index.md';
  }
  
  // Check if this is a nested path (contains a slash)
  if (normalizedPath.includes('/')) {
    // If it ends with a slash, it's a directory index
    if (normalizedPath.endsWith('/')) {
      return `${normalizedPath}index.md`;
    }
    return `${normalizedPath}.md`;
  }
  
  // If no slash in the path, it's a top-level section, return its index
  return `${normalizedPath}/index.md`;
};

/**
 * Normalize a document path for import
 */
export const normalizeDocPath = (path: string): string => {
  let normalizedPath = path || '';
  if (normalizedPath.startsWith('/')) {
    normalizedPath = normalizedPath.substring(1);
  }
  
  // Remove docs prefix if present
  normalizedPath = normalizedPath.replace(/^docs\//, '');
  
  // Removing any trailing slashes
  if (normalizedPath.endsWith('/')) {
    normalizedPath = normalizedPath.substring(0, normalizedPath.length - 1);
  }
  
  return normalizedPath;
};
