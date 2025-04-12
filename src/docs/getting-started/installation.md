
---
date: 2023-07-15
icon: terminal-square
description: "Run validation checks locally during development"
title: "Installation"
order: 2
---

# Installation

Setting up FrameD is simple and only takes a few minutes. Follow the steps below to get started.

> **Tip:** When installing FrameD, make sure you have the latest Node.js version for optimal performance and compatibility.

## Prerequisites

Before installing FrameD, make sure you have the following:

- Node.js 14.0 or higher
- npm 6.0 or higher (or yarn)
- Git (optional, but recommended)

## Quick Start

The fastest way to get started with FrameD is to use the CLI tool:

```bash
npm install -g @framed/cli
framed create my-docs
cd my-docs
npm start
```

This will create a new FrameD project in the `my-docs` directory and start the development server.

## Manual Installation

If you prefer to set up FrameD manually, follow these steps:

1. Create a new directory for your project:

```bash
mkdir my-docs
cd my-docs
```

2. Initialize a new npm project:

```bash
npm init -y
```

3. Install FrameD:

```bash
npm install @framed/core @framed/validator
```

4. Create a configuration file:

```bash
touch framed.config.js
```

5. Add the following to your configuration file:

```javascript
module.exports = {
  title: 'My Documentation',
  description: 'Documentation for my awesome project',
};
```

6. Create a docs directory:

```bash
mkdir docs
```

7. Create your first documentation file:

```bash
echo "# Welcome to My Documentation" > docs/index.md
```

8. Start the development server:

```bash
npx framed start
```

## Project Structure

After installation, your project structure should look like this:

```
my-docs/
├── docs/
│   └── index.md
├── framed.config.js
├── package.json
└── node_modules/
```

You can add more documentation files to the `docs` directory as needed.

## Next Steps

Now that you have FrameD installed, you can:

- [Configure your project](/docs/getting-started/configuration)
- Learn about [link validation](/docs/github-actions/link-validation)
- Set up [GitHub Actions](/docs/github-actions) for continuous validation
- Explore [versioning options](/docs/getting-started/configuration#versioning-configuration) for multi-version documentation
