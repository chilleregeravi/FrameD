const n=`
---
date: 2023-08-15
order: 4
icon: github
description: "Configure GitHub integration for your documentation"
title: "GitHub Integration"
---

# GitHub Integration

FrameD seamlessly integrates with GitHub to enhance your documentation workflow. This page covers all GitHub integration options.

## Basic GitHub Configuration

Connect your documentation to your GitHub repository:

\`\`\`javascript
module.exports = {
  github: {
    repo: 'username/repo',        // GitHub repository
    branch: 'main',               // Branch name
    editUrl: true,                // Show "Edit this page" links
  },
};
\`\`\`

## Detailed GitHub Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| \`repo\` | string | null | GitHub repository name (username/repo) |
| \`branch\` | string | 'main' | Default branch name |
| \`editUrl\` | boolean | true | Show "Edit this page" links |
| \`path\` | string | 'docs' | Path to documentation within repo |
| \`apiToken\` | string | null | GitHub API token (can also be set via env var) |

## Pull Request Previews

FrameD can generate documentation previews for pull requests:

\`\`\`javascript
github: {
  repo: 'username/repo',
  branch: 'main',
  pullRequests: {
    enabled: true,              // Enable PR previews
    label: 'documentation',     // PR label for docs changes
    commentTemplate: '.github/pr-comment-template.md', // Custom PR comment template
    artifacts: {
      upload: true,             // Upload artifacts
      retention: 30             // Days to retain artifacts
    }
  },
}
\`\`\`

## GitHub Actions Workflow

To set up a GitHub Actions workflow for FrameD validation:

1. Create a \`.github/workflows/framed-validation.yml\` file:

\`\`\`yaml
name: FrameD Documentation Validation

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16'
      - name: Install dependencies
        run: npm install
      - name: Run FrameD validation
        run: npx framed validate
        env:
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}
\`\`\`

## Issue Templates

You can also configure custom issue templates for documentation issues:

\`\`\`javascript
github: {
  issueTemplates: {
    docFeedback: '.github/ISSUE_TEMPLATE/documentation-feedback.md',
    docRequest: '.github/ISSUE_TEMPLATE/documentation-request.md',
  }
}
\`\`\`

## GitHub Pages Deployment

FrameD can automatically deploy your documentation to GitHub Pages:

\`\`\`javascript
github: {
  pages: {
    enabled: true,
    branch: 'gh-pages',
    cname: 'docs.example.com', // Optional CNAME file content
    workflow: {
      auto: true,               // Auto-generate workflow file
      path: '.github/workflows/deploy-docs.yml' // Custom path
    }
  }
}
\`\`\`
`;export{n as default};
//# sourceMappingURL=github-CDBmKhfI.js.map
