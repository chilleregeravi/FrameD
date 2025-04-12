const n=`
---
date: 2023-08-15
order: 1
icon: settings
description: "Configuration overview for FrameD documentation"
title: "Configuration Overview"
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

## Advanced Configuration

For more specific configuration needs, explore these topics:

- [Theme Configuration](/docs/getting-started/configuration/theme) - Customize the appearance
- [Validation Checks](/docs/getting-started/configuration/validation) - Configure validation rules
- [GitHub Integration](/docs/getting-started/configuration/github) - Connect to GitHub
- [Versioning](/docs/getting-started/configuration/versioning) - Multi-version documentation
- [Navigation](/docs/getting-started/configuration/navigation) - Custom navigation structure 

## Environment Variables

FrameD also supports configuration through environment variables. These take precedence over the config file settings.

- \`FRAMED_BASE_PATH\`: Override the base path
- \`FRAMED_GITHUB_TOKEN\`: GitHub token for API access
- \`FRAMED_DISABLE_CHECKS\`: Disable all validation checks
- \`FRAMED_VERSION\`: Override the current version
- \`FRAMED_DISABLE_VERSIONING\`: Disable versioning

For advanced use cases, you can create specific configuration files in the \`.framed\` directory:

- \`.framed/links.config.js\` - Configure link validation
- \`.framed/dictionary.config.js\` - Configure dictionary validation
- \`.framed/style.config.js\` - Configure style guide rules
- \`.framed/versions.config.js\` - Configure versioning options
`;export{n as default};
//# sourceMappingURL=index-iiQP_fZB.js.map
