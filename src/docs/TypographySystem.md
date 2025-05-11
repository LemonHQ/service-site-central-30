
# Typography System Documentation

This document outlines the standardized typography system for our application. Following these guidelines ensures consistent heading styles, font weights, and sizes across all pages.

## Typography Components

We have created reusable components for all typography elements. Import and use these components instead of using HTML tags directly:

```tsx
import { H1, H2, H3, H4, H5, H6, Paragraph, Lead, Subtitle } from '@/components/ui/Typography';

// Example usage
<H1>Page Title</H1>
<H2>Section Title</H2>
<Lead>An introduction paragraph with slightly larger text</Lead>
<Paragraph>Regular body text</Paragraph>
```

## Heading Hierarchy

Use headings in the correct order to maintain semantic structure:

1. `H1` - Main page title (only one per page)
2. `H2` - Major section headings
3. `H3` - Subsection headings
4. `H4` - Minor headings
5. `H5`, `H6` - Rarely used, for deep nesting

## Typography Specifications

### Font Families
- **Headings**: Montserrat (font-display)
- **Body**: Inter (font-sans)

### Heading Sizes and Weights
- **H1**: 3xl/4xl/5xl (responsive), semibold, brand-700
- **H2**: 2xl/3xl/4xl (responsive), medium, brand-600
- **H3**: xl/2xl (responsive), medium, brand-500
- **H4**: lg/xl (responsive), medium, brand-500
- **H5**: base/lg (responsive), medium, accent-600
- **H6**: sm/base (responsive), medium, accent-500

### Body Text
- **Lead**: lg/xl (responsive), normal, gray-600
- **Paragraph**: base, normal, gray-600
- **Subtitle**: lg, normal, gray-600

## Best Practices

1. Only use one `H1` per page
2. Maintain proper heading hierarchy (don't skip levels)
3. Use the Typography components rather than HTML tags
4. When custom styling is needed, use the `className` prop to extend the base styles
5. For specialized components, use SectionHeading for consistent section titles

## Integration with Section Components

The `SectionHeading` component has been updated to use our typography system:

```tsx
<SectionHeading 
  title="Section Title" 
  subtitle="Optional subtitle text" 
  centered={true} 
/>
```
