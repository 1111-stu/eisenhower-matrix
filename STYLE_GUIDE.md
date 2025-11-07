# MotherDuck UI Design System - Style Guide

## Table of Contents
1. [Overview](#overview)
2. [Color Palette](#color-palette)
3. [Typography](#typography)
4. [Spacing System](#spacing-system)
5. [Component Styles](#component-styles)
6. [Shadows & Elevation](#shadows--elevation)
7. [Animations & Transitions](#animations--transitions)
8. [Border Radius](#border-radius)
9. [Opacity & Transparency](#opacity--transparency)
10. [Layout System](#layout-system)
11. [Common Tailwind CSS Usage](#common-tailwind-css-usage)
12. [Example Component Reference](#example-component-reference)
13. [Responsive Design Patterns](#responsive-design-patterns)

---

## Overview

The MotherDuck design system features a **bold, playful, and technical aesthetic** that combines:
- **Brutalist design principles** with heavy borders and sharp corners
- **Vibrant color palette** inspired by data visualization
- **Interactive micro-animations** with shadow-based hover effects
- **Technical typography** mixing Inter for UI and Monaco for code
- **Generous spacing** for a clean, breathable layout

### Design Philosophy
- **Bold & Confident**: Strong borders, high contrast, and clear visual hierarchy
- **Playful & Approachable**: Bright colors, whimsical cloud decorations, and friendly copy
- **Technical & Professional**: Code samples, data-focused messaging, and precise typography
- **Interactive**: Immediate visual feedback on all interactive elements

---

## Color Palette

### Primary Colors

```css
/* Background Colors */
--beige-background: #F4EFEA;      /* Main page background */
--white: #FFFFFF;                  /* Card and section backgrounds */
--dark-gray: #2D2D2D;             /* Code editor header */

/* Brand Colors */
--primary-blue: #6FC2FF;          /* Primary CTA buttons */
--cyan: #4DD4D0;                  /* Secondary accent, badges */
--light-blue: #5CB8E6;            /* Tertiary accent, banners */
--yellow: #FFD500;                /* Top banner, tags, accents */

/* Text & Borders */
--dark: #383838;                  /* Primary text, borders */
--medium-gray: #666666;           /* Secondary elements */
--light-gray: #E0E0E0;            /* Dividers, table borders */

/* Accent Colors */
--orange-primary: #FF9500;        /* Logo primary */
--orange-secondary: #FF6B00;      /* Logo secondary */
--coral: #FF6B6B;                 /* Error/warning states */
--pink: #FFB6C1;                  /* Decorative accents */
```

### Color Usage Guidelines

| Color | Usage | Hex Code | Tailwind Class |
|-------|-------|----------|----------------|
| **Beige Background** | Main page background, alternating sections | `#F4EFEA` | `bg-[#F4EFEA]` |
| **White** | Cards, modals, content backgrounds | `#FFFFFF` | `bg-white` |
| **Primary Blue** | Primary CTA buttons, focus states | `#6FC2FF` | `bg-[#6FC2FF]` |
| **Cyan** | Badges, secondary highlights | `#4DD4D0` | `bg-[#4DD4D0]` |
| **Light Blue** | Banners, tags, tertiary accents | `#5CB8E6` | `bg-[#5CB8E6]` |
| **Yellow** | Top banner, promotional elements | `#FFD500` | `bg-[#FFD500]` |
| **Dark Gray** | Primary text, all borders | `#383838` | `text-[#383838]` `border-[#383838]` |
| **Medium Gray** | Secondary text, disabled states | `#666666` | `text-gray-600` |

### Color Combinations

**High Contrast Pairings:**
- Yellow background (`#FFD500`) + Dark text (`#383838`)
- White background + Dark borders (`#383838`)
- Primary Blue (`#6FC2FF`) + Dark borders (`#383838`)

**Semantic Colors:**
- **Success**: Cyan (`#4DD4D0`)
- **Warning**: Yellow (`#FFD500`)
- **Error**: Coral (`#FF6B6B`)
- **Info**: Light Blue (`#5CB8E6`)

---

## Typography

### Font Families

```css
/* Primary Font - UI Text */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

/* Secondary Font - Code Samples */
font-family: 'Monaco', 'Courier New', monospace;
```

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Tailwind Classes |
|---------|------|--------|-------------|----------------|------------------|
| **Hero H1** | 96px / 112px / 128px | 700 (Bold) | 1.0 | -0.02em (tight) | `text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter` |
| **Section H2** | 48px / 60px | 700 (Bold) | 1.1 | -0.01em (tight) | `text-4xl lg:text-5xl font-bold tracking-tight` |
| **Section H2 (Large)** | 48px | 700 (Bold) | 1.1 | -0.01em (tight) | `text-5xl font-bold tracking-tight` |
| **Card H3** | 36px / 42px | 700 (Bold) | 1.2 | -0.01em (tight) | `text-3xl lg:text-4xl font-bold tracking-tight` |
| **Component H3** | 16px | 600 (Semibold) | 1.3 (snug) | 0 | `text-base font-semibold leading-snug` |
| **Body Large** | 18px / 20px | 500 (Medium) | 1.6 | 0 | `text-lg lg:text-xl font-medium leading-relaxed` |
| **Body Regular** | 16px | 400 (Regular) | 1.5 | 0 | `text-base` |
| **Body Small** | 14px | 500 (Medium) | 1.5 | 0 | `text-sm font-medium` |
| **Caption** | 12px | 400 (Regular) | 1.4 | 0 | `text-xs` |
| **Button Text** | 14px / 16px | 700 (Bold) | 1.0 | 0 | `text-sm font-bold uppercase` / `text-base font-bold uppercase` |
| **Code** | 13px / 14px | 400 (Regular) | 1.8 | 0 | `text-sm code-text leading-relaxed` |
| **Label Small** | 12px | 700 (Bold) | 1.2 | 0.1em (widest) | `text-xs font-bold tracking-widest` |

### Font Weight Guidelines

| Weight | Value | Usage |
|--------|-------|-------|
| **Regular** | 400 | Body text, descriptions, table content |
| **Medium** | 500 | Navigation links, emphasized body text, subtitles |
| **Semibold** | 600 | Card headings, feature titles |
| **Bold** | 700 | All headings, buttons, tags, labels |
| **Extra Bold** | 800 | (Not used in current design) |

### Typography Patterns

**Heading Pattern:**
```html
<!-- Large Display Heading -->
<h1 class="text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-none mb-8">
    MAKING BIG DATA FEEL SMALL
</h1>

<!-- Section Heading -->
<h2 class="text-5xl font-bold tracking-tight mb-16">
    WHY IT'S BETTER
</h2>

<!-- Subsection Heading with Description -->
<h2 class="text-5xl font-bold tracking-tight mb-3">
    WHO IS IT FOR?
</h2>
<p class="text-xl text-gray-600 mb-16">
    Analytics that works for everyone
</p>
```

**Body Text Pattern:**
```html
<!-- Lead Paragraph -->
<p class="text-lg lg:text-xl max-w-4xl mb-10 font-medium leading-relaxed">
    DUCKDB CLOUD DATA WAREHOUSE SCALING TO TERABYTES
</p>

<!-- Regular Paragraph -->
<p class="text-lg leading-relaxed">
    Is your data all over the place? Start making sense...
</p>

<!-- Small Text -->
<p class="text-sm">Subscribe to MotherDuck news</p>
```

**Text Decoration:**
- Links use `underline` for emphasis
- All-caps text for: buttons, headings, labels, navigation
- Tracking adjustment: `-tracking-tighter` for large headings, `tracking-widest` for small labels

---

## Spacing System

### Base Spacing Scale

The design uses Tailwind's default spacing scale (1 unit = 0.25rem / 4px):

| Value | Pixels | Usage |
|-------|--------|-------|
| `1` | 4px | Micro spacing, icon gaps |
| `2` | 8px | Tight element spacing |
| `3` | 12px | Small gaps, checkbox spacing |
| `4` | 16px | Default gap, button groups |
| `6` | 24px | Medium spacing, card padding |
| `8` | 32px | Large spacing, section gaps |
| `10` | 40px | Extra large spacing |
| `12` | 48px | Section separation |
| `16` | 64px | Major section separation |
| `20` | 80px | Section padding (vertical) |
| `28` | 112px | Hero section padding (desktop) |

### Component Spacing Patterns

**Section Padding:**
```css
/* Standard Section */
padding: py-20 px-6              /* 80px vertical, 24px horizontal */

/* Compact Section */
padding: py-16 px-6              /* 64px vertical, 24px horizontal */

/* Hero Section */
padding: py-20 lg:py-28 px-6    /* 80px mobile, 112px desktop */
```

**Container Max Width:**
```css
max-w-6xl   /* 1152px - Standard content */
max-w-7xl   /* 1280px - Wide content */
max-w-4xl   /* 896px - Narrow content, forms */
max-w-2xl   /* 672px - Very narrow, centered content */
```

**Gap Spacing:**
```css
gap-2       /* 8px - Tight elements (window dots) */
gap-3       /* 12px - Form elements, checkboxes */
gap-4       /* 16px - Button groups, form rows */
gap-6       /* 24px - Grid items (small screens) */
gap-8       /* 32px - Navigation items */
gap-12      /* 48px - Card grid (medium) */
gap-16      /* 64px - Section elements */
```

**Margin Spacing:**
```css
/* Heading Margins */
mb-2        /* 8px - Label to content */
mb-3        /* 12px - Subtitle to content */
mb-6        /* 24px - Small heading to content */
mb-8        /* 32px - Medium heading to content */
mb-16       /* 64px - Large heading to grid */

/* Element Margins */
mb-4        /* 16px - Paragraph to button */
mb-6        /* 24px - Form to submit */
mb-8        /* 32px - Icon to text */
```

---

## Component Styles

### Buttons

#### Primary Button (Blue)

```css
/* Base Styles */
.btn-blue {
    background-color: #6FC2FF;
    border: 2px solid #383838;
    color: #383838;
    position: relative;
    transition: transform 120ms ease-in-out, box-shadow 120ms ease-in-out;
}

/* Hover State */
.btn-blue:hover {
    transform: translate(-2px, -2px);
    box-shadow: 4px 4px 0px 0px #383838;
}

/* Active State */
.btn-blue:active {
    transform: translate(0, 0);
    box-shadow: 2px 2px 0px 0px #383838;
}
```

**HTML Example:**
```html
<a href="#" class="btn-blue px-8 py-4 rounded-none font-bold text-base uppercase">
    TRY 21 DAYS FREE
</a>
```

#### Secondary Button (White)

```html
<button class="btn-white px-8 py-3 rounded-none font-bold text-base uppercase">
    SUBMIT
</button>
```

#### Button Sizing:

| Size | Padding | Font Size | Use Case |
|------|---------|-----------|----------|
| **Small** | `px-6 py-2.5` | `text-sm` | Header, inline actions |
| **Medium** | `px-8 py-3` | `text-base` | Forms, modals |
| **Large** | `px-8 py-4` | `text-base` | Hero CTAs, primary actions |

**Button Rules:**
- Always use `rounded-none` (no border radius)
- Always use `font-bold uppercase`
- Always include 2px solid border (`border-2 border-[#383838]`)
- Transition duration: `120ms ease-in-out`
- Shadow offset: 4px on hover, 2px on active

### Form Inputs

```css
/* Text Input */
.input-field {
    padding: 14px 20px;              /* px-5 py-3 */
    border: 2px solid #383838;       /* border-2 border-[#383838] */
    border-radius: 0;                /* (no rounded class) */
    font-size: 16px;                 /* text-base */
    background: white;
}

/* Focus State */
.input-field:focus {
    outline: none;                   /* focus:outline-none */
    ring: 2px solid #6FC2FF;        /* focus:ring-2 focus:ring-[#6FC2FF] */
}
```

**HTML Example:**
```html
<input
    type="email"
    placeholder="Work Email"
    class="flex-1 min-w-[250px] px-5 py-3 border-2 border-[#383838] text-base focus:outline-none focus:ring-2 focus:ring-[#6FC2FF]"
>
```

### Checkbox

```css
.custom-checkbox {
    appearance: none;
    width: 18px;
    height: 18px;
    border: 2px solid #383838;
    border-radius: 3px;
    background: white;
    cursor: pointer;
    position: relative;
}

.custom-checkbox:checked {
    background: #383838;
}

.custom-checkbox:checked::after {
    content: '✓';
    position: absolute;
    color: white;
    font-size: 12px;
    top: -2px;
    left: 2px;
}
```

**HTML Example:**
```html
<label class="flex items-center gap-3 cursor-pointer">
    <input type="checkbox" checked class="custom-checkbox">
    <span class="text-sm">Subscribe to MotherDuck news</span>
</label>
```

### Cards

#### Feature Card

```html
<div class="bg-white border-2 border-[#383838] rounded p-8 min-h-[340px] hover:shadow-lg transition-shadow">
    <div class="mb-8">
        <!-- Icon SVG (80x80px) -->
    </div>
    <h3 class="text-base font-semibold leading-snug">
        Card Title Text
    </h3>
</div>
```

**Card Specifications:**
- Border: `2px solid #383838`
- Padding: `32px` (p-8)
- Background: `white`
- Border radius: `4px` (rounded)
- Min height: `340px`
- Hover: `shadow-lg` with smooth transition

#### Testimonial Card

```html
<div class="border-2 border-[#383838] rounded p-6 min-h-[180px]">
    <p class="text-sm italic mb-4">
        "Testimonial quote text here..."
    </p>
</div>
```

### Tags / Badges

```html
<!-- Yellow Tag -->
<div class="inline-block bg-[#FFD500] text-[#383838] px-8 py-3 rounded font-bold text-base mb-4">
    SOFTWARE ENGINEERS
</div>

<!-- Cyan Badge (Rotated) -->
<div class="absolute -top-6 -right-12 bg-[#4DD4D0] text-[#383838] px-6 py-3 rounded-full font-bold text-sm transform rotate-12 shadow-lg">
    FREE<br/>BOOK
</div>
```

**Tag Specifications:**
- Padding: `px-8 py-3` (standard), `px-6 py-3` (small)
- Border radius: `4px` (rounded) or `9999px` (rounded-full)
- Font: `font-bold text-base uppercase` or `font-bold text-sm`
- Colors: Yellow, Cyan, or Light Blue backgrounds

### Tables

```html
<table class="w-full text-sm">
    <thead>
        <tr class="border-b border-gray-200">
            <th class="text-left py-2 px-3 font-semibold bg-gray-50">Column Header</th>
        </tr>
    </thead>
    <tbody class="text-sm">
        <tr class="border-b border-gray-100">
            <td class="py-2.5 px-3">Cell Content</td>
        </tr>
    </tbody>
</table>
```

**Table Specifications:**
- Header background: `bg-gray-50`
- Header font: `font-semibold`
- Cell padding: `py-2 px-3` (header), `py-2.5 px-3` (body)
- Border: `border-b border-gray-200` (header), `border-gray-100` (rows)
- Text size: `text-sm`

### Code Block

```html
<div class="bg-white rounded-lg shadow-2xl overflow-hidden max-w-4xl mx-auto">
    <!-- Dark Header -->
    <div class="bg-[#2D2D2D] text-white px-5 py-3 flex items-center justify-between">
        <div class="flex items-center gap-3">
            <!-- macOS Window Dots -->
            <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span class="text-sm font-medium">DuckDB</span>
        </div>
    </div>

    <!-- Code Content -->
    <div class="p-6 code-text text-sm leading-relaxed">
        <div class="text-gray-500 text-xs mb-3">✓ Instant SQL</div>
        <div class="space-y-1">
            <div><span class="text-blue-600">select</span> * <span class="text-blue-600">from</span> table</div>
        </div>
    </div>
</div>
```

**Code Block Specifications:**
- Font: `Monaco, Courier New, monospace` (`.code-text`)
- Font size: `text-sm` (13px)
- Line height: `leading-relaxed` (1.8)
- SQL Keywords: `text-blue-600`
- SQL Strings: `text-red-600`
- Header background: `#2D2D2D`
- Window dots: 12px diameter, gap of 8px

---

## Shadows & Elevation

### Shadow Scale

```css
/* Elevation Levels */
shadow-sm       /* Not used */
shadow          /* Not used */
shadow-md       /* Not used */
shadow-lg       /* Cards on hover */
                /* 0 10px 15px -3px rgb(0 0 0 / 0.1) */

shadow-xl       /* Not used */
shadow-2xl      /* Code demo window, book cover */
                /* 0 25px 50px -12px rgb(0 0 0 / 0.25) */

/* Custom Hard Shadows (Brutalist Style) */
box-shadow: 4px 4px 0px 0px #383838;    /* Button hover */
box-shadow: 2px 2px 0px 0px #383838;    /* Button active */
```

### Shadow Usage Guidelines

| Element | Shadow Type | Usage |
|---------|-------------|-------|
| **Buttons (Hover)** | Hard shadow `4px 4px 0px` | Interactive feedback |
| **Buttons (Active)** | Hard shadow `2px 2px 0px` | Pressed state |
| **Feature Cards (Hover)** | `shadow-lg` | Subtle elevation on hover |
| **Code Window** | `shadow-2xl` | Deep elevation for modal-like elements |
| **Book Cover** | `shadow-2xl` | Product emphasis |
| **Badge** | `shadow-lg` | Floating badge effect |

**Shadow Transition:**
```css
transition: box-shadow 120ms ease-in-out;
```

---

## Animations & Transitions

### Transition Timing

```css
/* Standard Transitions */
transition-opacity      /* 150ms cubic-bezier(0.4, 0, 0.2, 1) - Hover opacity */
transition-colors       /* 150ms cubic-bezier(0.4, 0, 0.2, 1) - Background colors */
transition-shadow       /* 150ms cubic-bezier(0.4, 0, 0.2, 1) - Shadow changes */

/* Custom Button Transitions */
transition: transform 120ms ease-in-out, box-shadow 120ms ease-in-out;
```

### Hover Effects

**Link Hover:**
```css
.link {
    transition: opacity 0.2s;
}
.link:hover {
    opacity: 0.7;
}
```

**Button Hover (with Shadow):**
```css
.btn:hover {
    transform: translate(-2px, -2px);        /* Move up-left */
    box-shadow: 4px 4px 0px 0px #383838;    /* Brutalist shadow */
}
```

**Card Hover:**
```css
.card {
    transition: box-shadow 150ms ease-in-out;
}
.card:hover {
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
}
```

### Keyframe Animations

#### Infinite Scrolling Banner

```css
@keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}

.animate-scroll {
    animation: scroll 30s linear infinite;
}
```

**Usage:**
```html
<div class="bg-[#5CB8E6] py-8 overflow-hidden">
    <div class="flex whitespace-nowrap animate-scroll">
        <span class="text-5xl font-bold text-[#383838] mx-8">USE CASES</span>
        <span class="text-5xl font-bold text-[#383838] mx-8">USE CASES</span>
        <!-- Repeat for seamless loop -->
    </div>
</div>
```

### Animation Guidelines

| Element | Animation | Duration | Easing |
|---------|-----------|----------|--------|
| **Hover Opacity** | opacity: 1 → 0.7 | 200ms | linear |
| **Button Hover** | translate + shadow | 120ms | ease-in-out |
| **Card Hover** | shadow elevation | 150ms | ease-in-out |
| **Scrolling Banner** | translateX | 30s | linear infinite |
| **Focus Ring** | ring appearance | 150ms | ease-in-out |

---

## Border Radius

### Border Radius Scale

```css
/* Used Values */
rounded-none    /* 0px - Buttons */
rounded-sm      /* 2px - Not used */
rounded         /* 4px - Cards, inputs (standard radius) */
rounded-md      /* 6px - Not used */
rounded-lg      /* 8px - Code window, book cover */
rounded-full    /* 9999px - Badges, window dots, checkboxes (slight) */

/* Specific Border Radius */
border-radius: 3px;     /* Custom checkboxes */
border-radius: 100px;   /* Cloud decorations (oval) */
```

### Border Radius Usage

| Element | Radius | Class | Purpose |
|---------|--------|-------|---------|
| **Buttons** | 0px | `rounded-none` | Brutalist aesthetic |
| **Cards** | 4px | `rounded` | Subtle softness |
| **Feature Cards** | 4px | `rounded` | Standard card radius |
| **Testimonial Cards** | 4px | `rounded` | Consistency |
| **Code Window** | 8px | `rounded-lg` | Larger element, more radius |
| **Book Cover** | 8px | `rounded-lg` | Product emphasis |
| **Badges** | 9999px | `rounded-full` | Pill shape |
| **Category Tags** | 4px | `rounded` | Standard radius |
| **Window Dots** | 50% | `rounded-full` | Perfect circles |
| **Checkboxes** | 3px | custom | Slight softness |

**Border Guidelines:**
- **All borders are 2px solid**: `border-2 border-[#383838]`
- Exception: Table borders use 1px: `border-b`
- Hover states do NOT change border weight

---

## Opacity & Transparency

### Opacity Scale

```css
/* Tailwind Opacity Classes Used */
opacity-0       /* 0% - Hidden */
opacity-20      /* 20% - Decorative SVG fills */
opacity-30      /* 30% - Decorative elements */
opacity-40      /* 40% - Cloud decorations */
opacity-50      /* 50% - Not used */
opacity-60      /* 60% - Book decoration */
opacity-70      /* 70% - Hover state (links/text) */
opacity-100     /* 100% - Default */
```

### Opacity Usage

| Element | Opacity | Purpose |
|---------|---------|---------|
| **Cloud Decorations** | 40% | Subtle background elements |
| **Decorative SVG** | 20-30% | Non-functional visual elements |
| **Book Decoration** | 60% | Subtle background shape |
| **Logo Secondary Color** | 70% | Visual depth in logo |
| **Hover State** | 70% | Links and text on hover |
| **SVG Icon Fills** | 30-60% | Multi-layer icon depth |

### Background Opacity (via color value)

```css
/* Border with opacity */
border-[#383838]/10     /* 10% opacity border - subtle dividers */

/* Examples */
.header {
    border-bottom: 1px solid rgba(56, 56, 56, 0.1);
}
```

---

## Layout System

### Container Structure

```html
<!-- Standard Section -->
<section class="py-20 px-6">
    <div class="max-w-7xl mx-auto">
        <!-- Content -->
    </div>
</section>

<!-- Narrow Section -->
<section class="py-20 px-6 bg-white">
    <div class="max-w-6xl mx-auto">
        <!-- Content -->
    </div>
</section>

<!-- Centered Content -->
<section class="py-20 px-6">
    <div class="max-w-2xl mx-auto text-center">
        <!-- Content -->
    </div>
</section>
```

### Grid Layouts

**4-Column Feature Grid:**
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <!-- Cards -->
</div>
```

**3-Column Card Grid:**
```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-12">
    <!-- Cards -->
</div>
```

**2-Column Split Layout:**
```html
<div class="flex flex-col lg:flex-row items-center gap-16">
    <div class="flex-shrink-0"><!-- Left --></div>
    <div class="flex-1"><!-- Right --></div>
</div>
```

### Responsive Breakpoints

```css
/* Tailwind Default Breakpoints */
sm: 640px      /* Small tablets */
md: 768px      /* Tablets */
lg: 1024px     /* Laptops */
xl: 1280px     /* Desktops */
2xl: 1536px    /* Large desktops */
```

**Usage Pattern:**
```html
<!-- Mobile first, then desktop -->
<h1 class="text-6xl lg:text-7xl xl:text-8xl">
<!-- Small -> Large -> Extra Large -->

<section class="py-20 lg:py-28">
<!-- Mobile: 80px, Desktop: 112px -->
```

### Z-Index Hierarchy

```css
z-0      /* Base layer */
z-10     /* Content layer */
z-20     /* Not used */
z-30     /* Not used */
z-40     /* Header (sticky) */
z-50     /* Top banner (sticky) */
```

**Stacking Order:**
1. **z-50**: Top banner (highest)
2. **z-40**: Header navigation
3. **z-10**: Raised content, decorative elements
4. **z-0 / default**: All standard content

---

## Common Tailwind CSS Usage in Project

### Flex Patterns

```html
<!-- Horizontal Center -->
<div class="flex items-center justify-center gap-4">

<!-- Horizontal Between -->
<div class="flex items-center justify-between">

<!-- Vertical Stack -->
<div class="flex flex-col gap-3">

<!-- Responsive Row/Column -->
<div class="flex flex-col lg:flex-row items-center gap-16">

<!-- Gap Variations -->
gap-2       /* 8px - Tight */
gap-3       /* 12px - Default */
gap-4       /* 16px - Comfortable */
gap-6       /* 24px - Spacious */
gap-8       /* 32px - Wide */
gap-12      /* 48px - Extra wide */
gap-16      /* 64px - Section separation */
```

### Text Alignment

```html
<!-- Left (default) -->
class="text-left"

<!-- Center -->
class="text-center"

<!-- Right -->
class="text-right"
```

### Display & Visibility

```html
<!-- Hide on Mobile, Show on Desktop -->
class="hidden lg:flex"

<!-- Show on Mobile, Hide on Desktop -->
class="lg:hidden"

<!-- Responsive Display -->
class="block lg:inline-block"
```

### Position

```html
<!-- Sticky Header -->
class="sticky top-0 z-50"

<!-- Sticky Header (with offset) -->
class="sticky top-12 z-40"

<!-- Absolute Positioning -->
class="absolute -top-6 -right-12"

<!-- Relative Container -->
class="relative"
```

### Overflow

```html
<!-- Hidden Overflow (for animations) -->
class="overflow-hidden"

<!-- Horizontal Scroll -->
class="overflow-x-auto"

<!-- No Wrap -->
class="whitespace-nowrap"
```

### Width & Height

```html
<!-- Full Width -->
class="w-full"

<!-- Fixed Width -->
class="w-56"      /* 224px - Book width */
class="w-3"       /* 12px - Window dot */

<!-- Height -->
class="h-80"      /* 320px - Book height */
class="h-3"       /* 12px - Window dot */

<!-- Min Height -->
class="min-h-[340px]"     /* Feature card */
class="min-h-[180px]"     /* Testimonial card */

<!-- Max Width (Containers) -->
class="max-w-6xl"         /* 1152px */
class="max-w-7xl"         /* 1280px */
```

---

## Example Component Reference

### 1. Primary CTA Button

```html
<a href="#" class="btn-blue px-8 py-4 rounded-none font-bold text-base uppercase">
    TRY 21 DAYS FREE
</a>
```

**CSS:**
```css
.btn-blue {
    background-color: #6FC2FF;
    border: 2px solid #383838;
    color: #383838;
    transition: transform 120ms ease-in-out, box-shadow 120ms ease-in-out;
}
.btn-blue:hover {
    transform: translate(-2px, -2px);
    box-shadow: 4px 4px 0px 0px #383838;
}
```

---

### 2. Section Header with Subtitle

```html
<div class="max-w-7xl mx-auto">
    <h2 class="text-5xl font-bold tracking-tight mb-3">
        WHO IS IT FOR?
    </h2>
    <p class="text-xl text-gray-600 mb-16">
        Analytics that works for everyone
    </p>
</div>
```

---

### 3. Feature Card

```html
<div class="bg-white border-2 border-[#383838] rounded p-8 min-h-[340px] hover:shadow-lg transition-shadow">
    <div class="mb-8">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle cx="20" cy="40" r="14" fill="#FFD500"/>
        </svg>
    </div>
    <h3 class="text-base font-semibold leading-snug">
        Scales Vertically and Horizontally to handle Spikey Workloads
    </h3>
</div>
```

---

### 4. Form Input with Label

```html
<div class="flex flex-wrap gap-3 mb-6">
    <input
        type="email"
        placeholder="Work Email"
        class="flex-1 min-w-[250px] px-5 py-3 border-2 border-[#383838] text-base focus:outline-none focus:ring-2 focus:ring-[#6FC2FF]"
    >
    <button class="btn-white px-8 py-3 rounded-none font-bold text-base uppercase">
        SUBMIT
    </button>
</div>
```

---

### 5. Checkbox with Label

```html
<label class="flex items-center gap-3 cursor-pointer">
    <input type="checkbox" checked class="custom-checkbox">
    <span class="text-sm">Subscribe to MotherDuck news</span>
</label>
```

**CSS:**
```css
.custom-checkbox {
    appearance: none;
    width: 18px;
    height: 18px;
    border: 2px solid #383838;
    border-radius: 3px;
    background: white;
    cursor: pointer;
    position: relative;
}
.custom-checkbox:checked {
    background: #383838;
}
.custom-checkbox:checked::after {
    content: '✓';
    position: absolute;
    color: white;
    font-size: 12px;
    top: -2px;
    left: 2px;
}
```

---

### 6. Sticky Header

```html
<header class="bg-[#F4EFEA] sticky top-12 z-40 border-b border-[#383838]/10">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center gap-2">
            <svg width="32" height="32"><!-- Icon --></svg>
            <span class="text-xl font-bold tracking-tight">MotherDuck</span>
        </div>

        <!-- Navigation -->
        <nav class="hidden lg:flex items-center gap-8">
            <a href="#" class="text-sm font-medium hover:opacity-70 transition-opacity">
                PRODUCT ∨
            </a>
        </nav>

        <!-- Actions -->
        <div class="flex items-center gap-4">
            <a href="#" class="text-sm font-medium">LOG IN</a>
            <a href="#" class="btn-blue px-6 py-2.5 rounded-none font-bold text-sm uppercase">
                START FREE
            </a>
        </div>
    </div>
</header>
```

---

### 7. Category Tag

```html
<div class="inline-block bg-[#FFD500] text-[#383838] px-8 py-3 rounded font-bold text-base mb-4">
    SOFTWARE ENGINEERS
</div>
```

---

### 8. Scrolling Banner

```html
<div class="bg-[#5CB8E6] py-8 overflow-hidden">
    <div class="flex whitespace-nowrap animate-scroll">
        <span class="text-5xl font-bold text-[#383838] mx-8">USE CASES</span>
        <span class="text-5xl font-bold text-[#383838] mx-8">USE CASES</span>
        <span class="text-5xl font-bold text-[#383838] mx-8">USE CASES</span>
        <span class="text-5xl font-bold text-[#383838] mx-8">USE CASES</span>
        <span class="text-5xl font-bold text-[#383838] mx-8">USE CASES</span>
        <span class="text-5xl font-bold text-[#383838] mx-8">USE CASES</span>
        <span class="text-5xl font-bold text-[#383838] mx-8">USE CASES</span>
        <span class="text-5xl font-bold text-[#383838] mx-8">USE CASES</span>
    </div>
</div>
```

**CSS:**
```css
@keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}
.animate-scroll {
    animation: scroll 30s linear infinite;
}
```

---

### 9. Code Window

```html
<div class="bg-white rounded-lg shadow-2xl overflow-hidden max-w-4xl mx-auto">
    <!-- Header -->
    <div class="bg-[#2D2D2D] text-white px-5 py-3 flex items-center justify-between">
        <div class="flex items-center gap-3">
            <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span class="text-sm font-medium">DuckDB</span>
        </div>
        <div class="flex items-center gap-4 text-sm">
            <a href="#" class="hover:opacity-70 transition-opacity">🦆 Sign in to MotherDuck</a>
            <a href="#" class="hover:opacity-70 transition-opacity">⊙ Help</a>
        </div>
    </div>

    <!-- Code Content -->
    <div class="p-6 code-text text-sm leading-relaxed">
        <div class="text-gray-500 text-xs mb-3">✓ Instant SQL</div>
        <div class="space-y-1">
            <div><span class="text-blue-600">select</span> * <span class="text-blue-600">from</span> users</div>
        </div>
    </div>
</div>
```

---

### 10. Two-Column Split Layout

```html
<section class="py-20 px-6 bg-white">
    <div class="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <!-- Left Column -->
        <div class="relative flex-shrink-0">
            <div class="w-56 h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-2xl">
                <!-- Content -->
            </div>
        </div>

        <!-- Right Column -->
        <div class="flex-1">
            <h2 class="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Heading Text
            </h2>
            <p class="text-lg mb-8">Description text...</p>
        </div>
    </div>
</section>
```

---

## Responsive Design Patterns

### Mobile-First Approach

The design system uses a **mobile-first responsive strategy**:

```html
<!-- Default = Mobile, then add breakpoints -->
<div class="grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

<!-- This means:
     - Mobile: 1 column
     - Tablet (md): 2 columns
     - Desktop (lg): 4 columns
-->
```

### Common Responsive Patterns

**Typography:**
```html
<!-- Responsive Heading -->
<h1 class="text-6xl lg:text-7xl xl:text-8xl">
<!-- 96px → 112px → 128px -->

<!-- Responsive Body -->
<p class="text-lg lg:text-xl">
<!-- 18px → 20px -->
```

**Spacing:**
```html
<!-- Responsive Padding -->
<section class="py-20 lg:py-28 px-6">
<!-- Vertical: 80px → 112px, Horizontal: 24px -->

<!-- Responsive Gap -->
<div class="gap-4 lg:gap-16">
<!-- 16px → 64px -->
```

**Layout:**
```html
<!-- Stack on Mobile, Row on Desktop -->
<div class="flex flex-col lg:flex-row">

<!-- Hide on Mobile -->
<nav class="hidden lg:flex">

<!-- Show on Mobile Only -->
<button class="lg:hidden">
```

**Grid:**
```html
<!-- Responsive Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<!-- 1 column → 2 columns → 4 columns -->
```

### Breakpoint Usage Summary

| Breakpoint | Width | Primary Usage |
|------------|-------|---------------|
| `(default)` | 0-639px | Mobile phones (base styles) |
| `md:` | 640px+ | Tablets (2-column grids start) |
| `lg:` | 1024px+ | Laptops (full nav, 4-column grids, horizontal layouts) |
| `xl:` | 1280px+ | Large desktops (largest typography) |

---

## Best Practices

### 1. Consistency
- **Always use 2px borders** for all bordered elements
- **Always use uppercase + bold** for buttons
- **Always use `tracking-tight`** for headings over 24px
- **Always use `leading-relaxed`** for body text and code

### 2. Accessibility
- Ensure color contrast ratio of at least 4.5:1 for text
- Provide focus states for all interactive elements (`focus:ring-2`)
- Use semantic HTML (`<button>`, `<nav>`, `<section>`)
- Include `alt` text for decorative SVGs

### 3. Performance
- Use Tailwind's JIT mode for optimal CSS size
- Minimize custom CSS (prefer Tailwind utilities)
- Use `transform` for animations (GPU-accelerated)

### 4. Maintainability
- Create reusable component classes for buttons (`.btn-blue`, `.btn-white`)
- Document custom animations and complex layouts
- Use CSS variables for colors when building themes

---

## Color Contrast Reference

| Background | Text Color | Contrast Ratio | WCAG AA |
|------------|------------|----------------|---------|
| `#F4EFEA` (Beige) | `#383838` (Dark) | 8.2:1 | ✅ Pass |
| `#FFFFFF` (White) | `#383838` (Dark) | 10.7:1 | ✅ Pass |
| `#6FC2FF` (Blue) | `#383838` (Dark) | 4.8:1 | ✅ Pass |
| `#FFD500` (Yellow) | `#383838` (Dark) | 9.1:1 | ✅ Pass |
| `#4DD4D0` (Cyan) | `#383838` (Dark) | 5.9:1 | ✅ Pass |
| `#383838` (Dark) | `#FFFFFF` (White) | 10.7:1 | ✅ Pass |

---

## Figma / Design Tool Specifications

### Font Setup
```
Primary: Inter (Google Fonts)
Weights: 400, 500, 600, 700, 800

Monospace: Monaco (System)
Fallback: Courier New
```

### Color Swatches
```
Beige Background: #F4EFEA
Primary Blue: #6FC2FF
Cyan: #4DD4D0
Light Blue: #5CB8E6
Yellow: #FFD500
Dark: #383838
White: #FFFFFF
Orange Primary: #FF9500
Orange Secondary: #FF6B00
Coral: #FF6B6B
```

### Grid System
- **Columns**: 12 (standard), 4 (cards), 3 (cards)
- **Gutter**: 24px (desktop), 16px (mobile)
- **Margin**: 48px (desktop), 24px (mobile)

---

## Version History

**v1.0** - Initial style guide based on MotherDuck UI implementation
- Complete color palette documentation
- Typography system with responsive scales
- Component library with code examples
- Animation and transition specifications
- Responsive design patterns

---

## Additional Resources

- **Tailwind CSS Documentation**: https://tailwindcss.com/docs
- **Inter Font**: https://fonts.google.com/specimen/Inter
- **Color Contrast Checker**: https://webaim.org/resources/contrastchecker/

---

**Maintained by**: Design System Team
**Last Updated**: 2025-01-06
