
/**
 * Utilities for document navigation
 */
import { SidebarItem } from './types';

/**
 * Find the next and previous pages for navigation
 */
export const getNavigationLinks = (currentPath: string, sidebarStructure: any): { 
  prev: SidebarItem | null, 
  next: SidebarItem | null 
} => {
  let allPages: SidebarItem[] = [];
  
  // Flatten the sidebar structure to get an ordered list of all pages
  sidebarStructure.sections.forEach((section: any) => {
    allPages.push(section); // Add section overview page
    
    if (section.items) {
      section.items.forEach((item: SidebarItem) => {
        allPages.push(item);
      });
    }
  });
  
  // Find the current page index
  const currentIndex = allPages.findIndex(page => page.path === currentPath);
  
  // If not found or at boundaries, return null
  const prev = currentIndex > 0 ? allPages[currentIndex - 1] : null;
  const next = currentIndex < allPages.length - 1 ? allPages[currentIndex + 1] : null;
  
  return { prev, next };
};
