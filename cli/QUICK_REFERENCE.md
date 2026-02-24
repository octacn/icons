# Quick Reference - Octacn Icons CLI

## 🎯 Run Commands

### From the root directory:
```bash
pnpm cli
```

### From the cli directory:
```bash
pnpm dev
```

---

## 📋 CLI Menu Options

### 1️⃣ List all icons 📋
**What it does:** Shows all available icons grouped by variant

**Output:**
- Lists all Filled icons
- Lists all Outline icons
- Shows icon names in an organized format

**Example:**
```
📦 Available Icons:

Filled:
  • SettingsIcon

Outline:
  • HomeIcon
```

---

### 2️⃣ View icon details 🔍
**What it does:** Displays detailed information about a selected icon

**Shows:**
- Variant (filled or outline)
- Icon name
- Default size (24px)
- Default stroke width (2)

**Example:**
```
📊 Icon Details: HomeIcon

Variant: outline
Name: HomeIcon
Default size: 24px
Default strokeWidth: 2
```

---

### 3️⃣ Get usage example 📝
**What it does:** Shows complete code examples for using an icon

**Provides:**
- Import statement
- Basic usage
- Custom size example
- Custom stroke width example  
- Tailwind CSS color example
- Inline style example

**Example:**
```
📝 Usage Example: HomeIcon

// Import
import { HomeIcon } from "@octacn/icons/outline";

// Basic usage
<HomeIcon />

// With custom size
<HomeIcon size={32} />

// With custom stroke width
<HomeIcon strokeWidth={3} />

// With custom color
<HomeIcon className="text-blue-500" />

// With custom styles
<HomeIcon style={{ color: 'red' }} />
```

---

### 4️⃣ View documentation 📖
**What it does:** Points you to the full documentation

**Reference:** [USAGE.md](./USAGE.md) - Complete usage guide with:
- Installation instructions
- All available props
- Styling examples
- TypeScript support
- Best practices
- How to add new icons

---

### 5️⃣ Exit 🚪
**What it does:** Closes the CLI

---

## 📁 Project Structure

```
cli/
├── src/
│   ├── index.ts              # Main CLI entry point
│   ├── types.ts              # TypeScript types
│   ├── commands/             # Command functions
│   │   ├── listIcons.ts      # List all icons
│   │   ├── viewIcon.ts       # View icon details
│   │   └── showUsage.ts      # Show usage examples
│   ├── utils/                # Utility functions
│   │   └── collectIcons.ts   # Icon collection logic
│   ├── filled/               # Filled variant icons
│   │   ├── index.ts
│   │   └── SettingsIcon.tsx
│   └── outline/              # Outline variant icons
│       ├── index.ts
│       └── HomeIcon.tsx
├── USAGE.md                  # Complete usage guide
├── QUICK_REFERENCE.md        # This file
├── package.json
└── tsconfig.json
```

---

## ➕ Adding New Icons

1. Create your icon component:
   ```tsx
   // cli/src/outline/MyNewIcon.tsx
   import * as React from "react";
   import { IconProps } from "../types";

   export const MyNewIcon = ({
     size = 24,
     strokeWidth = 2,
     ...props
   }: IconProps) => (
     <svg
       viewBox="0 0 24 24"
       width={size}
       height={size}
       fill="none"
       stroke="currentColor"
       strokeWidth={strokeWidth}
       strokeLinecap="round"
       strokeLinejoin="round"
       {...props}
     >
       {/* Your SVG paths */}
     </svg>
   );
   ```

2. Export from index:
   ```tsx
   // cli/src/outline/index.ts
   export { HomeIcon } from "./HomeIcon";
   export { MyNewIcon } from "./MyNewIcon";
   ```

3. Run `pnpm cli` - Your icon will appear automatically! ✨

---

## 🎨 Icon Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `24` | Icon size (width & height) |
| `strokeWidth` | `number` | `2` | Stroke thickness |
| `className` | `string` | - | CSS classes |
| `style` | `CSSProperties` | - | Inline styles |
| `...props` | `SVGProps` | - | Any SVG attributes |

---

## 💡 Quick Tips

✅ Icons inherit text color by default (`currentColor`)  
✅ Use Tailwind classes for easy styling  
✅ All icons are fully responsive  
✅ TypeScript types included  
✅ Tree-shakeable imports  

---

## 📚 Need More Help?

- **Full Guide:** [USAGE.md](./USAGE.md)
- **Main README:** [../README.md](../README.md)
- **Run CLI:** `pnpm cli`

---

Made with ❤️ by Sahil Kumar Dev
