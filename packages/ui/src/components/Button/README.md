# Button Component

A flexible and comprehensive button component that supports all common button variants, sizes, states, and icon configurations.

## Features

- **Variants**: Primary, Secondary, Tertiary, Danger, Success, and outline versions
- **Sizes**: xs, sm, md (default), lg
- **States**: Normal, Disabled, Loading
- **Icons**: Left/right positioned icons, icon-only buttons
- **Responsive**: Full-width support and responsive design
- **Accessible**: Proper ARIA attributes and keyboard support

## Basic Usage

```tsx
import { Button } from '@your-org/ui';

// Basic button
<Button>Click me</Button>

// With variant
<Button variant="primary">Primary Button</Button>

// With size
<Button size="lg">Large Button</Button>
```

## Variants

### Primary

```tsx
<Button variant="primary">Primary Button</Button>
```

- Blue background with white text
- Hover effect with darker blue

### Secondary

```tsx
<Button variant="secondary">Secondary Button</Button>
```

- Transparent background with indigo text
- Border with hover effects

### Tertiary

```tsx
<Button variant="tertiary">Tertiary Button</Button>
```

- Transparent background with slate text
- Subtle hover effects

### Danger

```tsx
<Button variant="danger">Danger Button</Button>
```

- Red background with white text
- Hover effect with darker red

### Success

```tsx
<Button variant="success">Success Button</Button>
```

- Green background with white text
- Hover effect with darker green

### Outline Variants

```tsx
<Button variant="dangerOutline">Danger Outline</Button>
<Button variant="successOutline">Success Outline</Button>
```

- Transparent background with colored text
- Border with hover effects

## Sizes

```tsx
<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium (default)</Button>
<Button size="lg">Large</Button>
```

## States

### Disabled

```tsx
<Button disabled>Disabled Button</Button>
```

### Loading

```tsx
<Button loading>Loading Button</Button>
```

## Icons

### Left Icon

```tsx
<Button icon={<PlusIcon />}>Add Item</Button>
```

### Right Icon

```tsx
<Button icon={<ArrowIcon />} iconPosition="right">
  Continue
</Button>
```

### Icon Only

```tsx
<Button icon={<EditIcon />} iconOnly />
```

## Full Width

```tsx
<Button fullWidth>Full Width Button</Button>
```

## Custom Styling

```tsx
<Button className="custom-class">Custom Button</Button>
```

## Props

| Prop           | Type                                                                                                     | Default     | Description                        |
| -------------- | -------------------------------------------------------------------------------------------------------- | ----------- | ---------------------------------- |
| `children`     | `React.ReactNode`                                                                                        | -           | Button content                     |
| `variant`      | `'primary' \| 'secondary' \| 'tertiary' \| 'danger' \| 'success' \| 'dangerOutline' \| 'successOutline'` | `'primary'` | Button appearance variant          |
| `size`         | `'xs' \| 'sm' \| 'md' \| 'lg'`                                                                           | `'md'`      | Button size                        |
| `disabled`     | `boolean`                                                                                                | `false`     | Whether button is disabled         |
| `loading`      | `boolean`                                                                                                | `false`     | Whether button shows loading state |
| `onClick`      | `() => void`                                                                                             | -           | Click handler                      |
| `type`         | `'button' \| 'submit' \| 'reset'`                                                                        | `'button'`  | Button type                        |
| `className`    | `string`                                                                                                 | `''`        | Additional CSS classes             |
| `fullWidth`    | `boolean`                                                                                                | `false`     | Whether button takes full width    |
| `icon`         | `React.ReactNode`                                                                                        | -           | Icon to display                    |
| `iconPosition` | `'left' \| 'right'`                                                                                      | `'left'`    | Icon position                      |
| `iconOnly`     | `boolean`                                                                                                | `false`     | Whether button shows only icon     |

## Examples

See `ButtonExamples.tsx` for comprehensive usage examples of all variants and configurations.
