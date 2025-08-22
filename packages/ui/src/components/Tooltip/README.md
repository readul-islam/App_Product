# Tooltip Component

A flexible and accessible tooltip component that displays additional information on hover or focus.

## Features

- **Multiple positions**: Top, bottom, left, and right positioning
- **Size variants**: Small, medium, and large sizes
- **Theme options**: Light and dark background themes
- **Accessible**: Proper ARIA attributes and keyboard support
- **Smooth animations**: CSS transitions for show/hide effects
- **Responsive**: Automatically positions based on available space

## Basic Usage

```tsx
import { Tooltip } from '@your-org/ui';

// Basic tooltip
<Tooltip>
  <div>Simple tooltip content</div>
</Tooltip>;
```

## Props

| Prop        | Type                                     | Default  | Description                                      |
| ----------- | ---------------------------------------- | -------- | ------------------------------------------------ |
| `children`  | `React.ReactNode`                        | -        | Content to display in the tooltip                |
| `className` | `string`                                 | `''`     | Additional CSS classes for the tooltip container |
| `bg`        | `'light' \| 'dark'`                      | `'dark'` | Background theme color                           |
| `size`      | `'sm' \| 'md' \| 'lg'`                   | `'md'`   | Size of the tooltip                              |
| `position`  | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'`  | Position relative to the trigger icon            |

## Sizes

### Small

```tsx
<Tooltip size="sm">
  <div>Small tooltip content</div>
</Tooltip>
```

- Minimum width: 176px (min-w-44)
- Padding: 8px (p-2)

### Medium (Default)

```tsx
<Tooltip size="md">
  <div>Medium tooltip content</div>
</Tooltip>
```

- Minimum width: 224px (min-w-56)
- Padding: 12px (p-3)

### Large

```tsx
<Tooltip size="lg">
  <div>Large tooltip content</div>
</Tooltip>
```

- Minimum width: 288px (min-w-72)
- Padding: 12px (p-3)

## Background Themes

### Dark Theme (Default)

```tsx
<Tooltip bg="dark">
  <div>Dark background tooltip</div>
</Tooltip>
```

- Background: `bg-slate-700`
- Text: `text-slate-100`
- Border: `border-slate-600`

### Light Theme

```tsx
<Tooltip bg="light">
  <div>Light background tooltip</div>
</Tooltip>
```

- Background: `bg-white`
- Text: `text-slate-600`
- Border: `border-slate-200`

## Positions

### Top (Default)

```tsx
<Tooltip position="top">
  <div>Tooltip above the icon</div>
</Tooltip>
```

- Appears above the trigger icon
- Centered horizontally

### Bottom

```tsx
<Tooltip position="bottom">
  <div>Tooltip below the icon</div>
</Tooltip>
```

- Appears below the trigger icon
- Centered horizontally

### Left

```tsx
<Tooltip position="left">
  <div>Tooltip to the left of the icon</div>
</Tooltip>
```

- Appears to the left of the trigger icon
- Centered vertically

### Right

```tsx
<Tooltip position="right">
  <div>Tooltip to the right of the icon</div>
</Tooltip>
```

- Appears to the right of the trigger icon
- Centered vertically

## Advanced Usage

### With Custom Content

```tsx
<Tooltip size="lg" bg="dark">
  <div className="space-y-2">
    <h4 className="font-semibold">Help Information</h4>
    <p className="text-sm">Detailed explanation with multiple lines</p>
    <div className="text-xs opacity-75">Additional notes</div>
  </div>
</Tooltip>
```

### With Custom Styling

```tsx
<Tooltip className="custom-tooltip-class" bg="light">
  <div>Custom styled tooltip</div>
</Tooltip>
```

### Combined Props

```tsx
<Tooltip size="lg" bg="dark" position="bottom" className="my-custom-class">
  <div>Large dark tooltip positioned below</div>
</Tooltip>
```

## Accessibility

The component includes proper accessibility features:

- **ARIA attributes**: `aria-haspopup="true"` and `aria-expanded`
- **Keyboard support**: Shows on focus, hides on blur
- **Screen reader friendly**: Proper semantic structure
- **Focus management**: Tooltip appears on focus for keyboard users

## Trigger Behavior

The tooltip is triggered by:

- **Mouse enter**: Shows tooltip
- **Mouse leave**: Hides tooltip
- **Focus**: Shows tooltip (for keyboard navigation)
- **Blur**: Hides tooltip

## CSS Classes Used

The component uses the following Tailwind CSS classes:

- **Positioning**: `relative`, `absolute`, `z-10`
- **Spacing**: `p-2`, `p-3`, `min-w-44`, `min-w-56`, `min-w-72`
- **Colors**: `bg-slate-700`, `text-slate-100`, `border-slate-600`
- **Transitions**: `transition-all`, `duration-200`
- **Transforms**: `translate-y-0`, `-translate-y-2`
- **Opacity**: `opacity-100`, `opacity-0`

## Examples

See `TooltipExamples.tsx` for comprehensive usage examples of all variants and configurations.

## Best Practices

1. **Keep content concise**: Tooltips work best with short, helpful text
2. **Use appropriate sizes**: Choose size based on content length
3. **Consider positioning**: Ensure tooltip doesn't get cut off by viewport edges
4. **Accessibility first**: Always provide alternative ways to access information
5. **Consistent theming**: Use consistent background themes across your application
