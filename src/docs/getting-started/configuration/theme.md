
---
date: 2023-08-15
order: 2
icon: palette
description: "Customize the appearance of your documentation"
title: "Theme Configuration"
---

# Theme Configuration

The `theme` object in your configuration allows you to customize the appearance of your documentation site.

## Basic Theme Settings

```javascript
module.exports = {
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
};
```

## Color Configuration

You can customize the following color properties:

| Property | Description |
|----------|-------------|
| `primaryColor` | Main brand color used for navigation and links |
| `accentColor` | Secondary color used for buttons and interactive elements |
| `backgroundColor` | Base background color of the site |
| `textColor` | Default text color |

## Font Configuration

Customize typography with these settings:

```javascript
theme: {
  font: {
    main: 'Roboto, sans-serif',
    heading: 'Montserrat, sans-serif',
    code: 'Fira Code, monospace',
    sizes: {
      base: '16px',
      small: '14px',
      large: '18px',
    }
  }
}
```

## Dark Mode Options

You can configure dark mode behavior:

```javascript
theme: {
  darkMode: {
    enabled: true,
    default: 'system', // 'light', 'dark', or 'system'
    toggle: true,
    colorScheme: {
      dark: {
        primaryColor: '#bb86fc',
        backgroundColor: '#121212',
        textColor: '#ffffff'
      }
    }
  }
}
```

## Responsive Design

FrameD themes are fully responsive by default, but you can customize breakpoints:

```javascript
theme: {
  responsive: {
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    }
  }
}
```

## Custom CSS

For more advanced styling, you can include custom CSS files:

```javascript
theme: {
  customCSS: [
    '/styles/custom.css',
    '/styles/syntax-highlighting.css'
  ]
}
```
