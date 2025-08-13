# Verify-Email

A modern, pixel-perfect email verification UI built with Next.js, TypeScript, and Framer Motion.

## 🚀 Features

- **Pixel-Perfect Design**: Replicated from Figma with exact spacing, typography, and colors
- **Modern Architecture**: Clean component structure with proper separation of concerns
- **Design System**: Comprehensive CSS custom properties and utility classes
- **Smooth Animations**: Framer Motion-powered morph animations and transitions
- **Responsive Design**: Mobile-first approach with proper breakpoints
- **Accessibility**: ARIA labels, focus management, and reduced motion support
- **Type Safety**: Full TypeScript coverage with proper interfaces

## 🏗️ Architecture

### Design System
- **`src/styles/design-tokens.css`**: CSS custom properties for colors, typography, spacing, etc.
- **`src/styles/utilities.css`**: Utility classes for common patterns
- **`src/styles/base.css`**: Global styles and resets

### Component Structure
```
src/components/VerifyEmail/
├── VerifyEmail.tsx          # Main component
├── VerifyEmail.module.css   # Component styles
├── types.ts                 # TypeScript interfaces
├── constants.ts             # Animation and validation constants
├── utils.ts                 # Helper functions
└── index.ts                 # Component export
```

### Key Features
- **Email Validation**: Real-time validation with domain length checking
- **OTP Verification**: 6-digit code input with auto-focus management
- **Morph Animation**: Smooth transition from email input to OTP verification
- **State Management**: Clean state handling with proper view transitions

## 🎨 Design Tokens

The design system uses CSS custom properties for:
- **Colors**: Primary, neutral, success, and gray scales
- **Typography**: Font families, weights, sizes, line heights, and letter spacing
- **Spacing**: Consistent spacing scale from 2px to 128px
- **Border Radius**: Standardized corner radius values
- **Shadows**: Elevation and focus shadow system
- **Transitions**: Duration and easing curves
- **Layout**: Component dimensions and breakpoints

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
npm install
# or
yarn install
```

### Development
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000/verifyemail](http://localhost:3000/verifyemail) to view the component.

### Build
```bash
npm run build
# or
yarn build
```

## 📱 Responsive Design

- **Desktop**: Two-column layout with sidebar and form
- **Tablet**: Stacked layout with adjusted spacing
- **Mobile**: Single-column layout with optimized typography

## ♿ Accessibility

- **Focus Management**: Proper tab order and focus indicators
- **ARIA Labels**: Descriptive labels for form inputs
- **Reduced Motion**: Respects user preferences for animations
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader**: Semantic HTML structure

## 🎭 Animations

### Framer Motion Integration
- **Layout Animations**: Smooth morphing between states
- **Staggered Animations**: Sequential element reveals
- **Performance**: Optimized with `useReducedMotion` hook
- **Custom Easing**: Bezier curves for natural motion

### Animation States
- **Email Input**: Fade in with focus animation
- **Loading Spinner**: Rotating gradient with hollow effect
- **OTP Transition**: Morph animation from input to verification
- **Code Inputs**: Staggered reveal with individual delays

## 🔧 Customization

### Design Tokens
Modify `src/styles/design-tokens.css` to update:
- Color palette
- Typography scale
- Spacing values
- Animation timing

### Component Styles
Update `src/components/VerifyEmail/VerifyEmail.module.css` for:
- Component-specific styling
- Layout adjustments
- Responsive breakpoints

### Constants
Modify `src/components/VerifyEmail/constants.ts` to change:
- Animation durations
- Validation rules
- Layout dimensions

## 📁 File Structure

```
src/
├── app/                     # Next.js App Router
│   ├── globals.css         # Global styles import
│   └── verifyemail/        # Route page
├── components/              # Reusable components
│   └── VerifyEmail/        # Main component
├── styles/                  # Design system
│   ├── base.css            # Base styles and resets
│   ├── design-tokens.css   # CSS custom properties
│   └── utilities.css       # Utility classes
└── types/                   # Global TypeScript types
```

## 🧪 Testing

The component is built with testing in mind:
- **Type Safety**: Full TypeScript coverage
- **Component Isolation**: Modular structure for easy testing
- **Props Interface**: Clear contract for component usage
- **State Management**: Predictable state transitions

## 🚀 Performance

- **CSS Modules**: Scoped styles with no conflicts
- **Framer Motion**: Optimized animation library
- **Lazy Loading**: Component-level code splitting
- **Optimized Assets**: Efficient image and font loading

## 🤝 Contributing

1. Follow the established architecture patterns
2. Use design tokens for consistent styling
3. Maintain TypeScript coverage
4. Test responsive behavior
5. Ensure accessibility compliance

## 📄 License

This project is licensed under the MIT License.
