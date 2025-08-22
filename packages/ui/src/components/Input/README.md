# Input Component

A flexible and comprehensive input component that supports all common input variants, sizes, states, and configurations.

## Features

- **Types**: Text, search, email, password, and all HTML input types
- **Sizes**: Small, medium (default), and large
- **States**: Normal, disabled, error, and success
- **Decorations**: Prefix, suffix, icons, and supporting text
- **Responsive**: Full-width support and responsive design
- **Accessible**: Proper ARIA attributes and keyboard support
- **Forwarded Ref**: Supports ref forwarding for form libraries

## Basic Usage

```tsx
import { Input } from '@your-org/ui';

// Basic input
<Input label="Name" />

// With type
<Input label="Email" type="email" />

// With placeholder
<Input label="Username" placeholder="Enter username" />
```

## Input Types

### Default Text Input

```tsx
<Input label="Default" type="text" />
```

### With Label and Required

```tsx
<Input label="Email" type="email" required />
```

### With Placeholder

```tsx
<Input label="Username" placeholder="Enter your username" />
```

### With Supporting Text

```tsx
<Input label="Password" type="password" supportingText="Must be at least 8 characters" />
```

## Prefix and Suffix

### With Prefix

```tsx
<Input label="Price" prefixText="USD" />
```

### With Suffix

```tsx
<Input label="Percentage" suffixText="%" />
```

### With Both

```tsx
<Input label="Amount" prefixText="$" suffixText=".00" />
```

## Icons

### Left Icon

```tsx
<Input label="Search" icon={<SearchIcon />} placeholder="Search..." />
```

### Right Icon

```tsx
<Input label="Email" icon={<EmailIcon />} iconPosition="right" />
```

## Sizes

```tsx
<Input label="Small" inputSize="sm" />
<Input label="Default" inputSize="md" />
<Input label="Large" inputSize="lg" />
```

## States

### Normal State

```tsx
<Input label="Normal Input" />
```

### Disabled State

```tsx
<Input label="Disabled Input" disabled />
```

### Error State

```tsx
<Input label="Error Input" error="This field is required!" />
```

### Success State

```tsx
<Input label="Success Input" success="Looks good!" />
```

## Full Width

```tsx
<Input label="Full Width Input" fullWidth />
```

## Custom Styling

```tsx
<Input label="Custom Input" className="custom-input-class" containerClassName="custom-container-class" labelClassName="custom-label-class" inputClassName="custom-input-field-class" />
```

## Props

| Prop                      | Type                   | Default  | Description                                |
| ------------------------- | ---------------------- | -------- | ------------------------------------------ |
| `label`                   | `string`               | -        | Input label text                           |
| `required`                | `boolean`              | `false`  | Whether the field is required              |
| `error`                   | `string`               | -        | Error message to display                   |
| `success`                 | `string`               | -        | Success message to display                 |
| `supportingText`          | `string`               | -        | Supporting text below input                |
| `prefixText`              | `React.ReactNode`      | -        | Text or content to show before input       |
| `suffixText`              | `React.ReactNode`      | -        | Text or content to show after input        |
| `icon`                    | `React.ReactNode`      | -        | Icon to display                            |
| `iconPosition`            | `'left' \| 'right'`    | `'left'` | Icon position                              |
| `inputSize`               | `'sm' \| 'md' \| 'lg'` | `'md'`   | Input size                                 |
| `fullWidth`               | `boolean`              | `false`  | Whether input takes full width             |
| `disabled`                | `boolean`              | `false`  | Whether input is disabled                  |
| `className`               | `string`               | `''`     | Additional CSS classes for input           |
| `containerClassName`      | `string`               | `''`     | Additional CSS classes for container       |
| `labelClassName`          | `string`               | `''`     | Additional CSS classes for label           |
| `inputClassName`          | `string`               | `''`     | Additional CSS classes for input field     |
| `errorClassName`          | `string`               | `''`     | Additional CSS classes for error message   |
| `successClassName`        | `string`               | `''`     | Additional CSS classes for success message |
| `supportingTextClassName` | `string`               | `''`     | Additional CSS classes for supporting text |

## HTML Input Attributes

The component extends all standard HTML input attributes, so you can use:

```tsx
<Input label="Email" type="email" placeholder="Enter email" maxLength={50} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" autoComplete="email" />
```

## Examples

See `InputExamples.tsx` for comprehensive usage examples of all variants and configurations.

## CSS Classes Used

The component uses the following CSS classes that should be available in your project:

- `form-input` - Base input styling
- `form-select` - Select dropdown styling
- `form-checkbox` - Checkbox styling
- `form-radio` - Radio button styling
- `form-switch` - Toggle switch styling

Make sure these classes are defined in your CSS or Tailwind configuration.
