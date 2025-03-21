
import { useState } from 'react';
import { ChevronDown, ChevronUp, File, Folder } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import SidebarItem from './SidebarItem';
import { Link } from 'react-router-dom';

type SidebarSectionItemType = {
  title: string;
  path: string;
  icon?: 'file' | 'folder';
};

type SidebarSectionProps = {
  section: {
    title: string;
    path: string;
    icon?: 'file' | 'folder';
    items?: SidebarSectionItemType[];
    isExpanded?: boolean;
  };
  isActive: (path: string) => boolean;
  index: number;
  toggleExpand: (index: number) => void;
};

const SidebarSection = ({ section, isActive, index, toggleExpand }: SidebarSectionProps) => {
  if (!section.items) {
    // Render a standalone section without children
    return (
      <Link
        to={section.path}
        className={cn(
          "flex items-center py-2 px-2 text-sm font-medium transition-colors rounded-md",
          isActive(section.path)
            ? "text-primary bg-accent"
            : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
        )}
      >
        {section.icon === 'folder' ? (
          <Folder className="h-4 w-4 mr-2 text-muted-foreground" />
        ) : (
          <File className="h-4 w-4 mr-2 text-muted-foreground" />
        )}
        {section.title}
      </Link>
    );
  }

  // Render a section with expandable children
  return (
    <div className="space-y-1">
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start p-2 text-sm font-medium",
          isActive(section.path) ? "bg-accent text-accent-foreground" : "hover:bg-accent hover:text-accent-foreground"
        )}
        onClick={() => toggleExpand(index)}
      >
        <div className="flex items-center w-full">
          {section.icon === 'folder' ? (
            <Folder className="h-4 w-4 mr-2 text-muted-foreground" />
          ) : (
            <File className="h-4 w-4 mr-2 text-muted-foreground" />
          )}
          <span className="flex-1 text-left">{section.title}</span>
          {section.isExpanded ? (
            <ChevronUp className="h-4 w-4 ml-auto" />
          ) : (
            <ChevronDown className="h-4 w-4 ml-auto" />
          )}
        </div>
      </Button>
      {section.isExpanded && section.items && (
        <div className="ml-5 border-l pl-3 space-y-1">
          {section.items.map((child) => (
            <SidebarItem
              key={child.path}
              title={child.title}
              path={child.path}
              isActive={isActive(child.path)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarSection;
