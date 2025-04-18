const n=`
---
date: 2023-08-15
order: 4
icon: file-text
description: "Configure versioning strategies for your documentation"
title: "Versioning Configuration"
---

# Documentation Versioning

FrameD supports multiple versioning strategies to help you manage documentation for different versions of your software. You can choose between global documentation versioning or document-level versioning, but not both simultaneously.

## Versioning Strategies

### Global Versioning

Global versioning applies the same version to your entire documentation set. This is useful when:

- Your documentation changes as a whole with each software release
- You want to maintain separate documentation sets for major versions
- You prefer a simpler versioning approach

Example configuration for global versioning:

\`\`\`json
{
  "enabled": true,
  "versioning": "global",
  "currentVersion": "v2",
  "versions": [
    { "name": "latest", "label": "Latest (v2)", "path": "latest", "isDefault": true },
    { "name": "v2", "label": "v2.0", "path": "v2" },
    { "name": "v1", "label": "v1.0", "path": "v1" }
  ]
}
\`\`\`

### Document-Level Versioning

Document-level versioning allows individual documents to have their own versions. This is useful when:

- Different parts of your documentation evolve independently
- You need to maintain version-specific content for individual features
- Your documentation structure is complex with varying update cycles

Example configuration for document-level versioning:

\`\`\`json
{
  "enabled": true,
  "versioning": "document",
  "currentVersion": "v2",
  "documentVersionSettings": {
    "enabled": true,
    "default": "inherit",
    "allowOverride": true
  }
}
\`\`\`

> **Note:** You must choose either global or document-level versioning. These strategies cannot be used together.

## Version Configuration

The version configuration is managed through the \`version-config.json\` file:

| Option | Type | Description |
|--------|------|-------------|
| \`enabled\` | boolean | Enable/disable versioning |
| \`versioning\` | "global" \\| "document" | The versioning strategy to use |
| \`currentVersion\` | string | The default version to display |
| \`versions\` | array | List of available versions |
| \`selector.position\` | "header" \\| "sidebar" \\| "both" | Where to display the version selector |
| \`selector.showPrerelease\` | boolean | Whether to show pre-release versions |

### Version Object Structure

Each version in the \`versions\` array has the following properties:

\`\`\`json
{
  "name": "v2",
  "label": "Version 2.0",
  "path": "v2",
  "isDefault": false,
  "isPrerelease": false
}
\`\`\`

## Environment Variables

You can override version settings using environment variables:

- \`FRAMED_VERSION\`: Override the current version
- \`FRAMED_DISABLE_VERSIONING\`: Disable versioning entirely

## Usage Examples

### Switching Between Strategies

To switch from global to document-level versioning:

1. Update your version configuration:
\`\`\`json
{
  "versioning": "document",
  "documentVersionSettings": {
    "enabled": true
  }
}
\`\`\`

2. Restart your documentation server for changes to take effect.

### Adding a New Version

To add a new version to global versioning:

\`\`\`json
{
  "versions": [
    { "name": "latest", "label": "Latest (v3)", "path": "latest", "isDefault": true },
    { "name": "v3", "label": "v3.0", "path": "v3" },
    { "name": "v2", "label": "v2.0", "path": "v2" }
  ]
}
\`\`\`

## Best Practices

1. Choose the appropriate strategy based on your documentation structure
2. Use clear version labels that match your software versions
3. Keep the version selector position consistent
4. Document version-specific features clearly
5. Consider using pre-release versions for beta documentation

`;export{n as default};
//# sourceMappingURL=versioning-DvL8bhxD.js.map
