
import { loadMarkdownFile as originalLoadMarkdownFile } from './file-loader';
import { 
  getCurrentVersion, 
  getVersionConfig, 
  extractVersionFromPath, 
  getBranchForVersion
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
    // For branch-based versioning, we would use different source directories
    // For this demo, we'll use the original loader but in a real system,
    // this would load from different sources based on version/branch
    if (config.versioning === 'branch') {
      const branch = getBranchForVersion(version);
      console.log(`Loading from branch: ${branch} for version ${version}`);
      // This would use a different source based on branch
    }
    
    // For demonstration, we'll add a version indicator to the content
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
  } catch (error) {
    console.error(`Error loading versioned markdown file: ${path} (version: ${version})`, error);
    throw error;
  }
};
