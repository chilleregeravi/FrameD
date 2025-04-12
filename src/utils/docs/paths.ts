
/**
 * Utilities for handling documentation paths and navigation
 * This file re-exports functions from more focused modules
 */

// Re-export path utilities
export { 
  getGitHubPath,
  normalizeDocPath
} from './path-utils';

// Re-export navigation utilities
export { 
  getNavigationLinks 
} from './navigation';

// Re-export file loading utilities
export { 
  loadMarkdownFile,
  getAvailableDocFiles
} from './file-loader';

// Re-export structure generation utilities
export { 
  generateNavStructure 
} from './structure-generator';
