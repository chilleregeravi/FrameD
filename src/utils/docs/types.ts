
/**
 * Type definitions for the documentation system
 */

export interface SidebarItem {
  title: string;
  path: string;
  icon?: 'file' | 'folder';
  description?: string;
  order?: number;
  versions?: string[]; // Versions this item is available in
}

export interface SectionItem extends SidebarItem {
  items?: SidebarItem[];
  isExpanded?: boolean;
}

export interface SidebarStructure {
  sections: SectionItem[];
}

export interface DocumentVersion {
  id: string;
  name: string;
  publishedAt: string;
  isLatest: boolean;
}

export interface DocumentVersionSettings {
  enabled: boolean; // Whether this document has its own versioning
  versions: DocumentVersion[]; // Available versions for this document
  currentVersion: string; // Current version of the document
}
