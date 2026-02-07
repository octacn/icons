# Create Starter Pack CLI 🚀

A modern, interactive CLI tool that helps developers quickly scaffold starter projects with their favorite tech stack. Perfect for beginners who want to get from zero to coding in seconds.

[![NPM Version](https://img.shields.io/npm/v/create-starter-pack)](https://www.npmjs.com/package/create-starter-pack)
[![NPM Downloads](https://img.shields.io/npm/dm/create-starter-pack)](https://www.npmjs.com/package/create-starter-pack)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 📦 What it creates

The CLI generates a complete starter project with:
- **`index.html`** - Clean HTML5 boilerplate with proper meta tags
- **`styles.css`** - CSS or Tailwind CSS setup with base styling
- **`script.js/ts`** - JavaScript or TypeScript starter file with sample code
- **`README.md`** - Project documentation with tech stack info

## 🚀 Quick Start

```bash
# Run with npx (recommended)
npx create-starter-pack@latest

# Or install globally
npm install -g create-starter-pack
create-starter-pack
```

## 🎯 Interactive Setup

The CLI guides you through project configuration with intuitive prompts:

```
🚀 Welcome to create-starter-pack!

? What is your project name? my-awesome-project
? Which language would you like to use? TypeScript
? Which styling solution would you like to use? Tailwind CSS  
? Which version of Tailwind CSS would you like to use? v4

✨ Creating your project...
✅ Project created successfully!
```

## 📋 Configuration Options

### Project Name
- **Validation:** Lowercase letters, numbers, hyphens, underscores only
- **Default:** `my-app`
- **Example:** `my-portfolio`, `todo-app`, `landing_page`

### Language Options
| Option | Description | File Extension |
|--------|-------------|----------------|
| **JavaScript** | ES6+ with modern syntax | `.js` |
| **TypeScript** | Type-safe development | `.ts` |

### Styling Options
| Option | Description | Features |
|--------|-------------|----------|
| **CSS** | Standard CSS with reset | Modern CSS with flexbox layout |
| **Tailwind CSS** | Utility-first framework | CDN integration, responsive design |

### Tailwind CSS Versions
| Version | CDN | Features |
|---------|-----|----------|
| **v3** | `cdn.tailwindcss.com` | Stable, widely supported |
| **v4** | `@tailwindcss/browser@4` | Latest features, CSS-first |

## 🏗️ Generated Project Structure

```
my-project/
├── index.html          # Main HTML file with proper structure
├── styles.css          # CSS/Tailwind configuration
├── script.js/ts        # JavaScript/TypeScript with sample code
└── README.md           # Project documentation
```

### Sample Generated Files

#### HTML Template
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>my-project</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>Welcome to my-project!</h1>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

#### CSS Template
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
}
```

#### TypeScript Template
```typescript
export const sum = (a: number, b: number): number => {
  return a + b;
};
```

## 🛠️ Development

### Project Structure
```
cli/
├── src/                    # Source code
│   ├── index.ts           # CLI entry point with inquirer prompts
│   ├── generator.ts       # Project generation logic
│   ├── get-templates.ts   # Template selection logic
│   ├── types.ts           # TypeScript interfaces
│   └── templates/         # File template generators
│       ├── index-file.ts  # HTML template generator
│       ├── readme-file.ts # README template generator
│       ├── script-file.ts # JS/TS template generator
│       └── style-file.ts  # CSS/Tailwind template generator
├── dist/                  # Compiled JavaScript output
├── package.json          # Package configuration
├── tsconfig.json         # TypeScript configuration
└── README.md             # This file
```

### Prerequisites
- **Node.js** 16+ 
- **TypeScript** 5+ (for development)
- **npm** or **pnpm**

### Setup Development Environment

```bash
# Clone the repository
git clone https://github.com/sahilkumardev/create-starter-pack.git
cd create-starter-pack/cli

# Install dependencies
npm install
# or
pnpm install

# Build the project
npm run build
# or
pnpm build
```

### Development Scripts

```bash
npm run build        # Compile TypeScript and run CLI
npm run prepublishOnly  # Build before publishing
```

### Local Testing

```bash
# After building, test locally
./dist/index.js

# Or test with a specific path
node dist/index.js
```

## 🧩 Architecture

### Core Components

#### 1. CLI Interface (`index.ts`)
- Interactive prompts using Inquirer.js
- Input validation and sanitization
- Progress indication with Ora spinner
- Colorful output with Chalk

#### 2. Project Generator (`generator.ts`)
- File system operations with fs-extra
- Directory creation and validation  
- Template processing and file writing
- Error handling and cleanup

#### 3. Template System (`templates/`)
- Modular template generators
- Dynamic content based on configuration
- Support for multiple file types
- Extensible architecture for new templates

#### 4. Type Safety (`types.ts`)
```typescript
export interface ProjectConfig {
  projectName: string;
  language: "typescript" | "javascript";
  styling: "css" | "tailwind";
  tailwindVersion?: "v3" | "v4";
}

export interface FileTemplate {
  path: string;
  content: string;
}
```

## 📊 Dependencies

### Runtime Dependencies
- **[inquirer](https://www.npmjs.com/package/inquirer)** `^13.1.0` - Interactive CLI prompts
- **[chalk](https://www.npmjs.com/package/chalk)** `^5.6.2` - Terminal colors and styling  
- **[ora](https://www.npmjs.com/package/ora)** `^9.0.0` - Progress spinners
- **[fs-extra](https://www.npmjs.com/package/fs-extra)** `^11.3.3` - Enhanced file system operations
- **[execa](https://www.npmjs.com/package/execa)** `^9.6.1` - Process execution

### Development Dependencies
- **[typescript](https://www.npmjs.com/package/typescript)** `^5.9.3` - TypeScript compiler
- **[@types/fs-extra](https://www.npmjs.com/package/@types/fs-extra)** `^11.0.4` - Type definitions
- **[@types/node](https://www.npmjs.com/package/@types/node)** `^25.0.3` - Node.js type definitions

## 🚀 Publishing

### Build for Distribution
```bash
npm run build
```

### Publish to NPM
```bash
npm publish
```

The package includes:
- `dist/` - Compiled JavaScript
- `package.json` - Package metadata
- `README.md` - Documentation

## 🔧 Configuration

### TypeScript Configuration
```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "ES2022",
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "declaration": true,
    "sourceMap": true
  }
}
```

### Binary Configuration
```json
{
  "bin": {
    "create-starter-pack": "./dist/index.js"
  }
}
```

## 🎨 Template Customization

### Adding New Templates
1. Create template generator in `src/templates/`
2. Export template function
3. Update `get-templates.ts` to include new template
4. Add configuration options in `types.ts`

### Example: Adding CSS Framework Support
```typescript
// In types.ts
export interface ProjectConfig {
  // ... existing properties
  cssFramework?: "bootstrap" | "bulma" | "none";
}

// In templates/style-file.ts
export function getBootstrapConfig(): string {
  return `@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css');`;
}
```

## 🤝 Contributing

1. **Fork** the repository
2. **Create** your feature branch (`git checkout -b feature/amazing-feature`)
3. **Add** tests for new functionality
4. **Commit** your changes (`git commit -m 'Add amazing feature'`)
5. **Push** to the branch (`git push origin feature/amazing-feature`)
6. **Open** a Pull Request

### Contribution Guidelines
- Follow existing code style and patterns
- Add TypeScript types for new features
- Update documentation for new options
- Test CLI locally before submitting

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](../LICENSE) file for details.

## 👨‍💻 Author

**Sahil Kumar Dev**
- GitHub: [@sahilkumardev](https://github.com/sahilkumardev)
- NPM: [create-starter-pack](https://www.npmjs.com/package/create-starter-pack)

## 🔗 Related

- **Website:** [pack.sahilkumardev.com](https://pack.sahilkumardev.com) - Interactive demo
- **Main Repository:** [create-starter-pack](https://github.com/sahilkumardev/create-starter-pack)
- **NPM Package:** [create-starter-pack](https://www.npmjs.com/package/create-starter-pack)

---

Made with ❤️ for developers who want to start coding quickly without the setup hassle.