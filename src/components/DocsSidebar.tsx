
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useSidebarStructure } from '@/utils/docs';
import { SectionItem } from '@/utils/docs/types';
import SidebarSection from './sidebar/SidebarSection';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Folder, File } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const DocsSidebar = () => {
  const sidebar = useSidebarStructure();
  const [docs, setDocs] = useState<SectionItem[]>([]);
  const location = useLocation();

  // Update docs when sidebar structure changes
  useEffect(() => {
    if (sidebar.sections && sidebar.sections.length > 0) {
      // Add custom child items for sections
      const enhancedSections = sidebar.sections.map(section => {
        const enhancedSection = { ...section };
        
        // Add child items for Style Guide section
        if (section.title === "Style Guide") {
          enhancedSection.items = [
            { 
              title: "Writing Rules", 
              path: "/docs/style-guide/writing-rules",
              description: "Guidelines for language, tone, and structure"
            },
            { 
              title: "Formatting", 
              path: "/docs/style-guide/formatting",
              description: "Standards for markdown formatting, code blocks, and images"
            }
          ];
        }
        
        return enhancedSection;
      });
      
      setDocs(enhancedSections);
    }
  }, [sidebar]);

  useEffect(() => {
    // Expand the section that contains the current path
    const expandCurrentSection = () => {
      if (!docs || docs.length === 0) return;
      
      const newDocs = [...docs];
      
      for (const doc of newDocs) {
        // Check if current path matches the section itself
        if (doc.path === location.pathname) {
          doc.isExpanded = true;
          continue;
        }
        
        // Check if current path matches any child items or starts with the section path (for nested routes)
        if (doc.items) {
          for (const item of doc.items) {
            if (item.path === location.pathname) {
              doc.isExpanded = true;
              break;
            }
          }
        }
        
        // Also expand if the current path starts with the section path (for nested routes)
        if (location.pathname.startsWith(doc.path) && doc.path !== "/docs") {
          doc.isExpanded = true;
        }
      }
      
      setDocs(newDocs);
    };
    
    expandCurrentSection();
  }, [location.pathname, docs]);

  const toggleExpand = (index: number) => {
    const newDocs = [...docs];
    newDocs[index].isExpanded = !newDocs[index].isExpanded;
    setDocs(newDocs);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <aside className="w-full md:w-64 lg:w-72 shrink-0 border-r bg-background">
      <ScrollArea className="h-full py-6 pl-8 pr-6">
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium mb-2 text-muted-foreground">
              Documentation
            </h3>
            <nav className="space-y-1">
              {docs && docs.length > 0 ? (
                docs.map((section, i) => (
                  <SidebarSection
                    key={section.title + i}
                    section={section}
                    isActive={isActive}
                    index={i}
                    toggleExpand={toggleExpand}
                  />
                ))
              ) : (
                <div className="text-muted-foreground py-2">Loading documentation...</div>
              )}
            </nav>
          </div>
        </div>
      </ScrollArea>
    </aside>
  );
};

export default DocsSidebar;
