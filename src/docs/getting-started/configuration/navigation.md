
---
date: 2023-08-15
order: 6
icon: menu
description: "Configure custom navigation for your documentation"
title: "Navigation Configuration"
---

# Navigation Configuration

FrameD allows you to customize the navigation structure of your documentation site.

## Basic Navigation Configuration

```javascript
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
```

## Primary Navigation

The primary navigation appears in the header and can be customized with these options:

```javascript
navigation: {
  primary: [
    { 
      title: 'Guides',            // Display text
      path: '/guides',            // URL path
      external: false,            // Is this an external link?
      icon: 'book-open',          // Optional icon
      children: [                 // Optional dropdown items
        { title: 'Getting Started', path: '/guides/getting-started' },
        { title: 'Advanced', path: '/guides/advanced' },
      ]
    },
    // More navigation items...
  ]
}
```

## Sidebar Navigation

You can configure the sidebar navigation structure:

```javascript
navigation: {
  sidebar: {
    autoGenerate: true,          // Auto-generate from file structure
    expandAll: false,            // Expand all sections by default
    sections: [                  // Manual section configuration
      {
        title: 'Getting Started',
        path: '/getting-started',
        items: [
          { title: 'Installation', path: '/getting-started/installation' },
          { title: 'Configuration', path: '/getting-started/configuration' },
        ]
      },
      // More sections...
    ]
  }
}
```

## Footer Navigation

The footer navigation is organized in columns:

```javascript
navigation: {
  footer: {
    resources: [
      { title: 'GitHub', url: 'https://github.com/username/repo' },
      { title: 'Support', url: '/support' },
    ],
    documentation: [
      { title: 'Getting Started', path: '/getting-started' },
      { title: 'API Reference', path: '/api' },
    ],
    community: [
      { title: 'Twitter', url: 'https://twitter.com/framed' },
      { title: 'Discord', url: 'https://discord.gg/framed' },
    ],
  }
}
```

## Order and Visibility

You can control the order and visibility of automatically generated navigation items:

```javascript
navigation: {
  order: {
    'getting-started': 1,
    'guides': 2,
    'api': 3,
  },
  exclude: [
    'internal',
    'drafts/**'
  ]
}
```

## Custom Navigation Components

For more advanced navigation needs, you can provide custom components:

```javascript
navigation: {
  customComponents: {
    header: '.framed/components/CustomHeader.jsx',
    sidebar: '.framed/components/CustomSidebar.jsx',
    footer: '.framed/components/CustomFooter.jsx',
  }
}
```

## Example: Full Navigation Configuration

```javascript
module.exports = {
  navigation: {
    primary: [
      { title: 'Home', path: '/' },
      { title: 'Docs', path: '/docs' },
      { title: 'API', path: '/api' },
      { title: 'Blog', path: '/blog' },
      { 
        title: 'Community', 
        children: [
          { title: 'GitHub', url: 'https://github.com/framed/framed', external: true },
          { title: 'Discord', url: 'https://discord.gg/framed', external: true },
        ]
      },
    ],
    sidebar: {
      autoGenerate: true,
      expandAll: false,
    },
    footer: {
      resources: [
        { title: 'GitHub', url: 'https://github.com/framed/framed' },
        { title: 'npm', url: 'https://www.npmjs.com/package/framed' },
      ],
      documentation: [
        { title: 'Getting Started', path: '/docs/getting-started' },
        { title: 'Guides', path: '/docs/guides' },
        { title: 'API Reference', path: '/docs/api' },
      ],
      community: [
        { title: 'Twitter', url: 'https://twitter.com/framedocs' },
        { title: 'Discord', url: 'https://discord.gg/framed' },
      ],
    },
  },
};
```
