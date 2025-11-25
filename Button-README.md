# Button Component for Plasmic Studio

A basic, reusable button component that can be used as a code component in Plasmic Studio.

## Features

- **Three variants**: Primary, Secondary, Outline
- **Three sizes**: Small, Medium, Large
- **Disabled state**: Automatically styled when disabled
- **Hover effects**: Smooth transitions and elevation
- **Accessible**: Includes focus states and proper semantics

## Usage

### In Plasmic Studio

1. Register this component as a code component in Plasmic
2. Import the component in your Plasmic project
3. Use it like any other component

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | ReactNode | `'Button'` | Button text or content |
| `variant` | string | `'primary'` | Style variant: `'primary'`, `'secondary'`, or `'outline'` |
| `size` | string | `'medium'` | Size: `'small'`, `'medium'`, or `'large'` |
| `disabled` | boolean | `false` | Whether the button is disabled |
| `onClick` | function | - | Click event handler |
| `className` | string | `''` | Additional CSS classes |

### Example Usage

```jsx
import Button from './Button';

// Primary button (default)
<Button onClick={() => console.log('Clicked!')}>
  Click Me
</Button>

// Secondary button, large size
<Button variant="secondary" size="large">
  Large Button
</Button>

// Outline button, small size
<Button variant="outline" size="small">
  Small Outline
</Button>

// Disabled button
<Button disabled>
  Disabled
</Button>
```

## Customization

You can customize the button styles by editing `Button.module.css`. The component uses CSS Modules with classes that follow the BEM-like naming convention:

- `.btn` - Base button styles
- `.btn-{variant}` - Variant styles (primary, secondary, outline)
- `.btn-{size}` - Size styles (small, medium, large)

## Files

- `Button.jsx` - React component
- `Button.module.css` - Component styles (CSS Modules)
- `Button-README.md` - This documentation file
