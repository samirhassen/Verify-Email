# OnlineMed - Next.js Medical Platform

A modern, responsive medical platform built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- ⚡ **Next.js 15** with App Router
- 🎨 **Tailwind CSS** for styling
- 🔧 **TypeScript** for type safety
- 📝 **ESLint** + **Prettier** for code quality
- ✨ **Framer Motion** for animations
- 🚀 **Absolute imports** with `@/*` alias

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd onlinemed
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/          # Reusable components
│   └── AnimatedCard.tsx # Example animated component
```

## Configuration

- **TypeScript**: Configured with strict mode and Next.js types
- **Tailwind CSS**: v4 with PostCSS
- **ESLint**: Next.js + Prettier integration
- **Prettier**: Custom configuration for consistent formatting
- **Absolute Imports**: `@/*` points to `src/*`

## Framer Motion Examples

The project includes animated components demonstrating:

- Fade-in animations
- Hover effects
- Staggered animations
- Smooth transitions

## Contributing

1. Follow the ESLint and Prettier configuration
2. Use TypeScript for all components
3. Follow the established project structure
4. Test your changes before submitting

## License

This project is licensed under the MIT License.
