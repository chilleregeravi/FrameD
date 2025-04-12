const n=`
---
date: 2023-08-15
order: 3
icon: settings
description: "Get detailed reports with actionable recommendations"
title: "Configuration"
---

# Configuration

FrameD provides flexible configuration options to customize your documentation website and validation rules. This guide covers all available options and how to use them effectively.

## Configuration File

The main configuration file is \`framed.config.js\` located in the root of your project. This file defines global settings for your documentation web site.

### Basic Configuration

\`\`\`javascript
module.exports = {
  title: 'My Documentation',
  description: 'Documentation for my awesome project',
  basePath: '/docs',
  theme: {
    primaryColor: '#3f51b5',
    accentColor: '#f50057',
    darkMode: true,
  },
  checks: {
    links: true,
    dictionary: true,
    styleGuide: true,
  },
  github: {
    repo: 'username/repo',
    branch: 'main',
    editUrl: true,
  },
};
\`\`\`

## Configuration Options

### General Settings

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| \`title\` | string | 'Documentation' | The title of your documentation site |
| \`description\` | string | '' | A brief description of your documentation |
| \`basePath\` | string | '/docs' | The base URL path for your documentation |
| \`outDir\` | string | 'build' | Output directory for the built site |
| \`favicon\` | string | null | Path to your favicon |

### Theme Configuration

The \`theme\` object allows you to customize the appearance of your documentation site:

\`\`\`javascript
theme: {
  primaryColor: '#3f51b5',      // Primary brand color
  accentColor: '#f50057',       // Accent color for interactive elements
  darkMode: true,               // Enable dark mode toggle
  font: {
    main: 'Inter, sans-serif',  // Main font for text
    code: 'Fira Code, monospace', // Font for code blocks
  },
  logo: {
    light: '/logo-light.svg',   // Logo for light mode
    dark: '/logo-dark.svg',     // Logo for dark mode
  },
}
\`\`\`

### Validation Checks

Configure which validation checks to run on your documentation:

\`\`\`javascript
checks: {
  links: {
    enabled: true,
    excludePaths: ['**/node_modules/**'],
    checkExternal: true,
  },
  dictionary: {
    enabled: true,
    customDictionaries: [
      '.framed/dictionaries/technical-terms.json',
    ],
  },
  styleGuide: {
    enabled: true,
    ruleset: '.framed/style-rules.json',
  },
}
\`\`\`

### GitHub Integration

Connect your documentation to your GitHub repository:

\`\`\`javascript
github: {
  repo: 'username/repo',        // GitHub repository
  branch: 'main',               // Branch name
  editUrl: true,                // Show "Edit this page" links
  pullRequests: {
    enabled: true,              // Enable PR previews
    label: 'documentation',     // PR label for docs changes
  },
}
\`\`\`

### Versioning Configuration

FrameD supports multiple versioning strategies to handle documentation for different releases of your software:

\`\`\`javascript
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
  strategy: 'global',          // Versioning strategy (global, document, branch)
  selector: {
    position: 'both',          // Where to display version selector (header, sidebar, both)
    showPrerelease: true       // Show prerelease versions in selector
  },
  documentLevel: {              // Document-level versioning settings (when strategy is 'document')
    enabled: false,
    default: 'inherit',         // Default versioning for documents ('inherit', 'latest')
    allowOverride: true         // Allow documents to override their version
  },
  branchMapping: {              // Branch mapping for branch-based versioning
    'latest': 'main',
    'v2': 'v2.x',
    'v1': 'v1.x',
    'next': 'develop'
  }
}
\`\`\`

#### Versioning Strategies

FrameD offers three strategies for versioning your documentation:

1. **Global Versioning (\`strategy: 'global'\`)**: 
   - The entire documentation set is versioned together
   - All documents share the same version at any given time
   - Users can switch between versions via a version selector
   - URL structure: \`/docs/[version]/[path]\`

2. **Document-level Versioning (\`strategy: 'document'\`)**: 
   - Individual documents can have their own versions
   - Documents can specify which versions they are available in
   - Good for documentation that evolves at different rates
   - URL structure: \`/docs/[path]?version=[version]\`

3. **Branch-based Versioning (\`strategy: 'branch'\`)**:
   - Documentation versions are mapped to git branches
   - Each branch contains a complete set of documentation
   - CI/CD processes build documentation from each branch
   - Great for maintaining documentation alongside code
   - Uses the \`branchMapping\` configuration to map versions to branches

#### Version Selector Configuration

The version selector can be displayed in different locations:

- \`position: 'header'\` - Show in the top navigation bar
- \`position: 'sidebar'\` - Show in the navigation sidebar
- \`position: 'both'\` - Show in both locations

#### Prerelease Versions

Versions marked with \`isPrerelease: true\` are considered unreleased or in-development documentation. You can control their visibility with the \`showPrerelease\` option.

## Environment Variables

FrameD also supports configuration through environment variables. These take precedence over the config file settings.

- \`FRAMED_BASE_PATH\`: Override the base path
- \`FRAMED_GITHUB_TOKEN\`: GitHub token for API access
- \`FRAMED_DISABLE_CHECKS\`: Disable all validation checks
- \`FRAMED_VERSION\`: Override the current version
- \`FRAMED_DISABLE_VERSIONING\`: Disable versioning

## Advanced Configuration

For more advanced use cases, you can create specific configuration files in the \`.framed\` directory:

- \`.framed/links.config.js\` - Configure link validation
- \`.framed/dictionary.config.js\` - Configure dictionary validation
- \`.framed/style.config.js\` - Configure style guide rules
- \`.framed/versions.config.js\` - Configure versioning options

## Examples

### Multi-version Documentation

\`\`\`javascript
module.exports = {
  title: 'API Documentation',
  versions: {
    current: 'v2',
    list: ['v1', 'v2', 'next'],
  },
  versioning: {
    strategy: 'global',
    selector: {
      position: 'header',
      showPrerelease: false,
    },
  },
};
\`\`\`

### Document-level Versioning

\`\`\`javascript
module.exports = {
  versioning: {
    enabled: true,
    strategy: 'document',
    currentVersion: 'v2',
    versions: [
      { name: 'v1', label: 'Version 1.0', path: 'v1' },
      { name: 'v2', label: 'Version 2.0', path: 'v2', isDefault: true },
      { name: 'v3', label: 'Version 3.0 (Beta)', path: 'v3', isPrerelease: true }
    ],
    documentLevel: {
      enabled: true,
      default: 'inherit',
      allowOverride: true
    }
  }
};
\`\`\`

### Branch-based Versioning

\`\`\`javascript
module.exports = {
  versioning: {
    enabled: true,
    strategy: 'branch',
    currentVersion: 'latest',
    versions: [
      { name: 'latest', label: 'Latest', path: 'latest', isDefault: true },
      { name: 'stable', label: 'Stable', path: 'stable' },
      { name: 'beta', label: 'Beta', path: 'beta', isPrerelease: true }
    ],
    branchMapping: {
      'latest': 'main',
      'stable': 'release',
      'beta': 'develop'
    }
  }
};
\`\`\`

### Custom Navigation

\`\`\`javascript
module.exports = {
  navigation: {
    primary: [
      { title: 'Guides', path: '/guides' },
      { title: 'API', path: '/api' },
      { title: 'Examples', path: '/examples' },
    ],
    footer: {
      resources: [
        { title: 'GitHub', url: 'https://github.com/username/repo' },
        { title: 'Support', url: '/support' },
      ],
    },
  },
};
\`\`\`
`;export{n as default};
//# sourceMappingURL=configuration-CNCA8WWb.js.map
