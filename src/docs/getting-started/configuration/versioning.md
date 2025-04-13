---
date: 2023-08-15
order: 5
icon: git-branch
description: "Configure versioning for multi-version documentation"
title: "Versioning Configuration"
---

# Versioning Configuration

FrameD supports multiple versioning strategies to handle documentation for different releases of your software.

## Basic Versioning Configuration

```javascript
module.exports = {
  versioning: {
    enabled: true,                // Enable versioning
    currentVersion: 'v2',         // Current active version
    versions: [                   // Available versions
      { 
        name: 'latest',           // Version identifier 
        label: 'Latest (v2)',     // Display label
        path: 'latest',           // URL path segment
        isDefault: true           // Is this the default version?
      },
      { 
        name: 'v2', 
        label: 'v2.0', 
        path: 'v2' 
      },
      { 
        name: 'v1', 
        label: 'v1.0', 
        path: 'v1' 
      },
      { 
        name: 'next', 
        label: 'Next (Unreleased)', 
        path: 'next', 
        isPrerelease: true        // Mark as prerelease
      }
    ],
  }
};
```

## Versioning Strategies

FrameD offers three mutually exclusive strategies for versioning your documentation. You must select one approach:

```javascript
versioning: {
  enabled: true,
  strategy: 'global',          // Versioning strategy (global, document, branch)
  // ... other versioning options
}
```

### Choosing a Versioning Strategy

Each versioning strategy has specific advantages:

| Strategy | Best For | URL Format | Complexity |
|----------|----------|------------|------------|
| Global | Documentation that evolves together | `/docs/[version]/[path]` | Simple |
| Document | Documentation with varying update cycles | `/docs/[path]?version=[version]` | Medium |
| Branch | Documentation tied to code branches | `/docs/[version]/[path]` | Complex |

**Important:** You can only enable one strategy at a time. The configuration enforces mutual exclusivity.

### 1. Global Versioning (strategy: 'global')

- The entire documentation set is versioned together
- All documents share the same version at any given time
- Users can switch between versions via a version selector
- URL structure: `/docs/[version]/[path]`

```javascript
versioning: {
  enabled: true,
  strategy: 'global',
  // Other versioning settings...
  documentVersionSettings: {
    enabled: false,        // Must be disabled for global versioning
  }
}
```

### 2. Document-level Versioning (strategy: 'document')

- Individual documents can have their own versions
- Documents can specify which versions they are available in
- Good for documentation that evolves at different rates
- URL structure: `/docs/[path]?version=[version]`

```javascript
versioning: {
  enabled: true,
  strategy: 'document',
  documentVersionSettings: {   // Document-level versioning settings
    enabled: true,             // Must be enabled for document-level versioning
    default: 'inherit',        // Default versioning for documents ('inherit', 'latest')
    allowOverride: true        // Allow documents to override their version
  }
}
```

### 3. Branch-based Versioning (strategy: 'branch')

- Documentation versions are mapped to git branches
- Each branch contains a complete set of documentation
- CI/CD processes build documentation from each branch
- Great for maintaining documentation alongside code

```javascript
versioning: {
  enabled: true,
  strategy: 'branch',
  documentVersionSettings: {
    enabled: false,           // Must be disabled for branch versioning
  },
  branchMapping: {            // Branch mapping for branch-based versioning
    'latest': 'main',
    'v2': 'v2.x',
    'v1': 'v1.x',
    'next': 'develop'
  }
}
```

## Version Selector Configuration

The version selector can be displayed in different locations:

```javascript
versioning: {
  selector: {
    position: 'both',          // Where to display version selector (header, sidebar, both)
    showPrerelease: true       // Show prerelease versions in selector
  }
}
```

Available positions:
- `position: 'header'` - Show in the top navigation bar
- `position: 'sidebar'` - Show in the navigation sidebar
- `position: 'both'` - Show in both locations

## Prerelease Versions

Versions marked with `isPrerelease: true` are considered unreleased or in-development documentation. You can control their visibility with the `showPrerelease` option.

## Example: Global Versioning

```javascript
module.exports = {
  title: 'API Documentation',
  versioning: {
    enabled: true,
    strategy: 'global',               // Global versioning for entire site
    currentVersion: 'v2',
    versions: [
      { name: 'v1', label: 'Version 1.0', path: 'v1' },
      { name: 'v2', label: 'Version 2.0', path: 'v2', isDefault: true },
      { name: 'v3', label: 'Version 3.0 (Beta)', path: 'v3', isPrerelease: true }
    ],
    selector: {
      position: 'header',
      showPrerelease: true,
    },
    documentVersionSettings: {
      enabled: false,               // Disabled for global versioning
    }
  },
};
```

## Example: Document-level Versioning

```javascript
module.exports = {
  versioning: {
    enabled: true,
    strategy: 'document',            // Document-level versioning
    currentVersion: 'v2',
    versions: [
      { name: 'v1', label: 'Version 1.0', path: 'v1' },
      { name: 'v2', label: 'Version 2.0', path: 'v2', isDefault: true },
      { name: 'v3', label: 'Version 3.0 (Beta)', path: 'v3', isPrerelease: true }
    ],
    documentVersionSettings: {
      enabled: true,                // Enabled for document-level versioning
      default: 'inherit',
      allowOverride: true
    }
  }
};
```

## Example: Branch-based Versioning

```javascript
module.exports = {
  versioning: {
    enabled: true,
    strategy: 'branch',              // Branch-based versioning
    currentVersion: 'latest',
    versions: [
      { name: 'latest', label: 'Latest', path: 'latest', isDefault: true },
      { name: 'stable', label: 'Stable', path: 'stable' },
      { name: 'beta', label: 'Beta', path: 'beta', isPrerelease: true }
    ],
    documentVersionSettings: {
      enabled: false,               // Disabled for branch versioning
    },
    branchMapping: {
      'latest': 'main',
      'stable': 'release',
      'beta': 'develop'
    }
  }
};
```
