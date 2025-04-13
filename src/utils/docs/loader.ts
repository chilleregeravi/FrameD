
import { loadMarkdownFile as originalLoadMarkdownFile } from './file-loader';
import { 
  getCurrentVersion, 
  getVersionConfig, 
  extractVersionFromPath, 
  getBranchForVersion,
  isDocumentLevelVersioning,
  isGlobalVersioning,
  isBranchVersioning
} from './versions';

/**
 * Load a markdown file with version support
 */
export const loadMarkdownFile = async (path: string): Promise<string> => {
  const config = getVersionConfig();
  
  if (!config.enabled) {
    // If versioning is disabled, use the original loader
    return originalLoadMarkdownFile(path);
  }
  
  // Extract version from path if present
  const { version: pathVersion, basePath } = extractVersionFromPath(`/docs/${path}`);
  const version = pathVersion || getCurrentVersion().name;
  
  try {
    // Handle different versioning strategies
    if (isGlobalVersioning()) {
      // Global versioning: entire documentation set shares the same version
      console.log(`Loading with global versioning: ${version}`);
      
      // For this demo, we'll use the original loader but add a version indicator
      const content = await originalLoadMarkdownFile(path);
      
      // Don't modify for the default version
      const currentVersion = getCurrentVersion();
      if (version === currentVersion.name || version === 'latest') {
        return content;
      }
      
      // Add version indicator for non-default versions
      return `
> **Note:** You are viewing the documentation for version **${version}**.

${content}
`;
    } 
    else if (isDocumentLevelVersioning()) {
      // Document-level versioning: each document may have specific versions
      console.log(`Loading with document-level versioning for path: ${path}`);
      
      // This would typically check document metadata to see if this version exists
      // For this demo, we'll use the original loader but add a version indicator
      const content = await originalLoadMarkdownFile(path);
      
      // Add document-specific version indicator
      return `
> **Note:** You are viewing the document-specific version **${version}** of this page.

${content}
`;
    }
    else if (isBranchVersioning()) {
      // Branch-based versioning: different versions are in different branches
      const branch = getBranchForVersion(version);
      console.log(`Loading from branch: ${branch} for version ${version}`);
      
      // This would typically load from a different source based on branch
      // For this demo, we'll use the original loader but add a branch indicator
      const content = await originalLoadMarkdownFile(path);
      
      // Add branch indicator
      return `
> **Note:** You are viewing the documentation from branch **${branch}** (version **${version}**).

${content}
`;
    }
    
    // Default fallback - just load the file without version info
    return originalLoadMarkdownFile(path);
  } catch (error) {
    console.error(`Error loading versioned markdown file: ${path} (version: ${version})`, error);
    throw error;
  }
};
