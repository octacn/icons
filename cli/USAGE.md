# Octacn Icons - Usage Guide

## 🚀 Quick Start

### Running the CLI

```bash
# From the cli directory
pnpm dev

# Or if installed globally/linked
create-starter-pack
```

## 📦 Installation

### As a Package (Coming Soon)

```bash
npm install @octacn/icons
# or
yarn add @octacn/icons
# or
pnpm add @octacn/icons
```

### Development

```bash
cd cli
pnpm install
pnpm dev
```

## 🎨 Icon Usage

### Basic Import

```tsx
// Import from filled variant
import { SettingsIcon } from "@octacn/icons/filled";

// Import from outline variant
import { HomeIcon } from "@octacn/icons/outline";
```

### Basic Usage

```tsx
function MyComponent() {
  return (
    <div>
      <HomeIcon />
      <SettingsIcon />
    </div>
  );
}
```

### Custom Size

```tsx
<HomeIcon size={32} />
<SettingsIcon size={48} />
```

### Custom Stroke Width

```tsx
<HomeIcon strokeWidth={1.5} />
<SettingsIcon strokeWidth={3} />
```

### Custom Color

#### With Tailwind CSS
```tsx
<HomeIcon className="text-blue-500" />
<SettingsIcon className="text-red-600" />
```

#### With Inline Styles
```tsx
<HomeIcon style={{ color: 'blue' }} />
<SettingsIcon style={{ color: '#ff6b6b' }} />
```

### All Props Combined

```tsx
<HomeIcon 
  size={40}
  strokeWidth={2.5}
  className="text-purple-600 hover:text-purple-800"
  style={{ marginRight: '10px' }}
/>
```

## 🎯 Available Props

All icons accept the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `24` | Width and height in pixels |
| `strokeWidth` | `number` | `2` | Thickness of the icon strokes |
| `className` | `string` | - | CSS class names |
| `style` | `React.CSSProperties` | - | Inline styles |
| `...props` | `SVGProps<SVGSVGElement>` | - | Any valid SVG attributes |

## 📚 Available Icons

### Filled Variant
- `SettingsIcon` - Settings/gear icon

### Outline Variant
- `HomeIcon` - Home icon

## 🛠️ CLI Commands

The interactive CLI provides these options:

### 1. 📋 List all icons
Shows all available icons grouped by variant (filled/outline)

### 2. 🔍 View icon details
View detailed information about a specific icon including:
- Variant type
- Icon name
- Default size
- Default stroke width

### 3. 📝 Get usage example
Get complete code examples for any icon including:
- Import statement
- Basic usage
- Custom size example
- Custom stroke width example
- Custom color with Tailwind
- Custom inline styles

### 4. 🚪 Exit
Close the CLI

## 💡 Tips & Best Practices

### 1. Use currentColor
Icons use `stroke="currentColor"` by default, so they inherit the text color:

```tsx
<div className="text-blue-500">
  <HomeIcon /> {/* Will be blue */}
</div>
```

### 2. Accessibility
Add aria labels for better accessibility:

```tsx
<HomeIcon aria-label="Home" role="img" />
```

### 3. Consistent Sizing
Create a wrapper for consistent icon sizing across your app:

```tsx
// IconWrapper.tsx
export const Icon = ({ children, ...props }) => (
  <span className="inline-flex items-center justify-center" {...props}>
    {children}
  </span>
);

// Usage
<Icon>
  <HomeIcon size={20} />
</Icon>
```

### 4. Button Icons
Perfect for buttons:

```tsx
<button className="flex items-center gap-2">
  <HomeIcon size={20} />
  <span>Go Home</span>
</button>
```

## 🎨 Styling Examples

### With Tailwind CSS

```tsx
// Hover effect
<HomeIcon className="text-gray-600 hover:text-blue-500 transition-colors" />

// Dark mode
<HomeIcon className="text-gray-900 dark:text-gray-100" />

// With animation
<HomeIcon className="animate-pulse" />

// With transitions
<HomeIcon className="transition-all duration-300 hover:scale-110" />
```

### With CSS Modules

```tsx
// styles.module.css
.icon {
  color: #3b82f6;
  transition: color 0.3s ease;
}

.icon:hover {
  color: #1d4ed8;
}

// Component
<HomeIcon className={styles.icon} />
```

## 🔧 TypeScript Support

Full TypeScript support with proper types:

```tsx
import { IconProps } from "@octacn/icons/types";

const CustomIcon: React.FC<IconProps> = (props) => {
  return <HomeIcon {...props} />;
};
```

## 📝 Adding New Icons

1. Create your icon component in `cli/src/filled/` or `cli/src/outline/`
2. Export it from the respective `index.ts`
3. The CLI will automatically detect and display it!

```tsx
// cli/src/outline/NewIcon.tsx
import * as React from "react";
import { IconProps } from "../types";

export const NewIcon = ({
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
    {/* Your SVG paths here */}
  </svg>
);
```

```tsx
// cli/src/outline/index.ts
export { HomeIcon } from "./HomeIcon";
export { NewIcon } from "./NewIcon";
```

## 🤝 Contributing

Contributions are welcome! Feel free to add new icons following the established pattern.

## 📄 License

ISC License - See package.json for details

---

Made with ❤️ by Sahil Kumar Dev
