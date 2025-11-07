# 4-quadrants-to-do - Next.js Application

A pixel-perfect Next.js implementation of the 4-quadrants-to-do todo list application, styled with the MotherDuck design system.

## Features

### Core Functionality
- ✅ Four-quadrant task management (Do First, Schedule, Delegate, Eliminate)
- ✅ Drag-and-drop task reordering and cross-quadrant movement
- ✅ LocalStorage persistence
- ✅ Task completion toggle
- ✅ Task deletion with confirmation
- ✅ Clear all tasks functionality

### Statistics
- ✅ Comprehensive statistics modal with two views:
  - **Chart View**: Pie chart (task distribution) and Bar chart (completion status)
  - **List View**: Detailed breakdown per quadrant
- ✅ Real-time task counting
- ✅ Completion rate calculation

### UI/UX
- ✅ Pixel-perfect MotherDuck brutalist design
- ✅ Responsive layout (mobile-first)
- ✅ Custom scrollbars (6px width, beige color scheme)
- ✅ Hover effects (shadow-based, no gradients)
- ✅ Fixed 300px quadrant height with scrolling
- ✅ Empty state messages
- ✅ Keyboard support (ESC to close modals)

## Tech Stack

- **Framework**: Next.js 16.0.1 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Charts**: Chart.js 4.4.1 + react-chartjs-2
- **Font**: Inter (Google Fonts)
- **State Management**: React Hooks (useState, useEffect)
- **Drag & Drop**: HTML5 Drag and Drop API

## Project Structure

```
4-quadrants-to-do/  
├── app/
│   ├── page.tsx              # Main page component with drag-and-drop logic
│   ├── layout.tsx            # Root layout with metadata
│   └── globals.css           # Global styles (MotherDuck design system)
├── components/
│   ├── Header.tsx            # Header with CLEAR ALL and STATISTICS buttons
│   ├── Footer.tsx            # Footer with MotherDuck branding
│   ├── QuadrantCard.tsx      # Individual quadrant container
│   ├── TaskItem.tsx          # Task item with checkbox and delete button
│   ├── AddTaskModal.tsx      # Modal for adding new tasks
│   └── StatisticsModal.tsx   # Statistics modal (Chart + List views)
├── hooks/
│   └── useTasks.ts           # Custom hook for task management
├── types/
│   └── index.ts              # TypeScript interfaces
└── constants/
    └── index.ts              # Constants (colors, quadrant configs, demo tasks)
```

## Code Quality Features

### Clean Code Principles
- **Early Returns**: All conditional logic uses early-return pattern
- **Single Responsibility**: Each component has one clear purpose
- **Explicit Types**: Full TypeScript type coverage
- **No Magic Numbers**: All values defined as constants
- **Readable Names**: Clear, descriptive variable and function names

### Component Architecture
- **Separation of Concerns**: Logic separated into custom hooks
- **Prop Drilling Avoided**: Event handlers passed explicitly
- **DRY Principle**: Reusable components for repeated UI elements
- **Stateless Components**: Most components are stateless and pure

### Best Practices
- **XSS Protection**: React's built-in escaping
- **Accessibility**: Proper semantic HTML and ARIA labels
- **Performance**: Minimal re-renders, efficient state updates
- **Error Handling**: Confirmation dialogs for destructive actions

## Getting Started

### Prerequisites
- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## Design System

### MotherDuck Color Palette
- **Yellow**: `#FFD500` (Header, accents)
- **Blue**: `#6FC2FF` (Primary buttons, charts)
- **Cyan**: `#4DD4D0` (Secondary accents)
- **Red**: `#FF6B6B` (Urgent tasks)
- **Beige**: `#F4EFEA` (Main background)
- **Dark**: `#383838` (Text, borders)
- **Light Blue**: `#E5F4FF` (Task hover state)

### Design Principles
- **Brutalist Style**: 2px solid borders, no border-radius on buttons
- **Bold Typography**: Inter font with tracking-tight for headings
- **Shadow Effects**: Transform + box-shadow on hover (4px 4px)
- **No Gradients**: Flat color scheme
- **Minimal Transitions**: Only on necessary interactions

## Features Comparison with Original

| Feature | Original HTML | Next.js App | Status |
|---------|--------------|-------------|--------|
| Four quadrants | ✅ | ✅ | ✅ Perfect |
| Drag-and-drop | ✅ | ✅ | ✅ Perfect |
| LocalStorage | ✅ | ✅ | ✅ Perfect |
| Statistics modal | ✅ | ✅ | ✅ Perfect |
| Chart.js charts | ✅ | ✅ | ✅ Perfect |
| Custom scrollbars | ✅ | ✅ | ✅ Perfect |
| MotherDuck styles | ✅ | ✅ | ✅ Perfect |
| Task CRUD | ✅ | ✅ | ✅ Perfect |
| Demo tasks | ✅ | ✅ | ✅ Perfect |
| Responsive design | ✅ | ✅ | ✅ Perfect |

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is part of the MotherDuck design system showcase.

## Credits

- Design System: MotherDuck
- Built with: Next.js, TypeScript, Tailwind CSS
- Charts: Chart.js
