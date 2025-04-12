
---
date: 2023-08-15
order: 3
icon: check-circle
description: "Configure validation rules for your documentation"
title: "Validation Checks"
---

# Validation Checks

FrameD can run various validation checks on your documentation to ensure quality and consistency. Configure which validation checks to run on your documentation:

## Basic Configuration

```javascript
module.exports = {
  checks: {
    links: true,
    dictionary: true,
    styleGuide: true,
  }
};
```

## Detailed Configuration

For more granular control, you can configure each validation check in detail:

```javascript
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
```

## Link Validation

The link validator checks for broken links in your documentation:

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `enabled` | boolean | true | Enable/disable link validation |
| `excludePaths` | string[] | [] | Glob patterns for paths to exclude |
| `checkExternal` | boolean | false | Check external links as well as internal |
| `timeout` | number | 5000 | Timeout in ms for external link checking |
| `retries` | number | 2 | Number of retries for failed link checks |

## Dictionary Validation

Ensure consistent terminology throughout your documentation:

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `enabled` | boolean | true | Enable/disable dictionary validation |
| `customDictionaries` | string[] | [] | Paths to custom dictionary files |
| `ignorePaths` | string[] | [] | Paths to exclude from dictionary validation |
| `caseSensitive` | boolean | false | Whether to check case sensitivity |

## Style Guide Validation

Enforce your documentation style guide:

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `enabled` | boolean | true | Enable/disable style guide validation |
| `ruleset` | string | null | Path to custom style ruleset |
| `severity` | string | 'error' | Default severity level ('error', 'warning', 'info') |
| `ignorePaths` | string[] | [] | Paths to exclude from style validation |

## Custom Validation

You can also create and configure custom validators:

```javascript
checks: {
  custom: {
    myValidator: {
      enabled: true,
      script: '.framed/validators/custom-validator.js',
      options: {
        // Validator-specific options
      }
    }
  }
}
```

## Running Validation Checks

You can run validation checks from the command line:

```bash
npx framed validate
```

Or configure them to run automatically in your CI/CD pipeline or as a pre-commit hook.
