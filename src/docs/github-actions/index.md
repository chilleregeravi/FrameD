
---
date: 2023-09-05
icon: github
description: "Seamlessly integrate validation into your CI/CD workflow"
title: "Overview"
order: 1
---

# GitHub Actions Overview

Automate documentation validation with GitHub Actions.

## Overview

FrameD integrates with GitHub Actions to automatically validate your documentation on every pull request and push. 
This ensures your documentation always meets quality standards before it gets published.

## Benefits of GitHub Actions Integration

- Automated validation on every pull request
- Catch documentation issues before they reach production
- Enforce style guide and terminology consistency
- Detailed reports for any issues found

## Setting Up GitHub Actions

To set up GitHub Actions for your FrameD project, you need to create a workflow file in the `.github/workflows` directory of your repository.

### 1. Create the workflow file

Create a file named `framed.yml` in the `.github/workflows` directory:

```yaml
name: FrameD Validation

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run FrameD validation
        run: npx @framed/cli validate
        
      - name: Check for broken links
        run: npx @framed/cli check-links
        
      - name: Validate against dictionary
        run: npx @framed/cli check-dictionary
        
      - name: Enforce style guide
        run: npx @framed/cli check-style
```

### 2. Configure validation rules

You can customize the validation rules by creating a `.framed` directory in the root of your project with the following configuration files:

#### Link Validation Configuration

```javascript
// .framed/links.config.js
module.exports = {
  excludePaths: [
    '**/node_modules/**',
    '**/build/**',
  ],
  checkExternal: true,
  ignorePatterns: [
    'mailto:*',
    'tel:*',
  ],
  maxConcurrency: 5,
};
```

#### Dictionary Validation Configuration

```javascript
// .framed/dictionary.config.js
module.exports = {
  customDictionaries: [
    '.framed/dictionaries/technical-terms.json',
    '.framed/dictionaries/product-names.json',
  ],
  caseSensitive: true,
  ignorePatterns: [
    '\`\`\`[\\s\\S]*?\`\`\`', // Ignore code blocks
  ],
};
```

#### Style Guide Configuration

```javascript
// .framed/style.config.js
module.exports = {
  rules: [
    {
      name: 'avoid-passive-voice',
      severity: 'warning',
    },
    {
      name: 'sentence-length',
      severity: 'error',
      options: {
        max: 100,
      },
    },
    {
      name: 'no-jargon',
      severity: 'warning',
      options: {
        terms: ['leverage', 'utilize', 'paradigm'],
      },
    },
  ],
  ignorePatterns: [
    '\`\`\`[\\s\\S]*?\`\`\`', // Ignore code blocks
  ],
};
```

## Viewing Validation Results

After the GitHub Actions workflow runs, you can view the validation results in several ways:

- **GitHub Actions Tab:** Navigate to the Actions tab in your repository to see the detailed logs for each validation step.
- **Pull Request Checks:** The workflow status will be displayed in your pull requests, including any validation failures.
- **Detailed Reports:** For more detailed reports, you can configure the workflow to generate and upload artifacts containing full validation reports.

### Generating and Uploading Reports

To generate and upload detailed reports, add the following steps to your workflow:

```yaml
# Add these steps to your workflow
- name: Generate validation report
  run: npx @framed/cli validate --report-file=validation-report.json
  
- name: Upload validation report
  uses: actions/upload-artifact@v4
  with:
    name: validation-reports
    path: validation-report.json
```
