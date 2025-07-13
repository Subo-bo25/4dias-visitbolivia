# Visit Bolivia - 4-Day Package Frontend

Modern Next.js frontend application showcasing the 4-day Bolivia travel package experience featuring Copacabana, Isla del Sol, and Isla de la Luna.

## Authorship & Development

**Original Developer:** Sergio Agreda  
**Email:** sergioagreda21@outlook.com  
**GitHub:** [@AgredaLem023](https://github.com/AgredaLem023)  
**Development Period:** May 2025 Jul 2025  
**Project:** Visit Bolivia - 4-Day Travel Package Frontend  

> **Copyright © 2025 Sergio Agreda. All rights reserved.**  
> This code is proprietary and confidential.  
> Originally developed by Sergio Agreda for Visit Bolivia business operations.

### Technology Stack
- **Framework:** Next.js 15.2.4 with App Router
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3.4.17
- **UI Components:** Radix UI (shadcn/ui)
- **State Management:** React 19 with hooks
- **Package Manager:** PNPM
- **Build System:** Next.js with static export

## Features

### Core Functionality
- **Travel Package Showcase:** Immersive 4-day Bolivia trip presentation
- **Multi-language Support:** Spanish and English with route-based switching
- **Responsive Design:** Mobile-first approach with breakpoint management
- **Interactive Elements:** Tabs, accordions, modals, and image galleries
- **Review System:** Customer feedback with star ratings and statistics
- **WhatsApp Integration:** Direct booking and contact functionality

### Technical Features
- **Server-Side Rendering:** Next.js App Router with SSR/SSG
- **Component Library:** 35+ shadcn/ui components
- **Type Safety:** Comprehensive TypeScript implementation
- **Performance:** Optimized bundle size and code splitting
- **SEO:** Structured metadata and semantic HTML
- **Accessibility:** WCAG 2.1 compliant components

## Quick Start

### Prerequisites
- Node.js 18+ or later
- PNPM package manager
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AgredaLem023/visit-bolivia-packages.git
   cd visit-bolivia-packages/4days_package
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Set up environment variables:**
   Create `.env.local` file with:
   ```env
   NODE_ENV=development
   NEXT_PUBLIC_API_URL=http://localhost:8000
   ```

4. **Run the development server:**
   ```bash
   pnpm dev
   ```

5. **Open in browser:**
   Navigate to `http://localhost:3000`

### Production Build

```bash
# Build for production
pnpm build

# Export static files
pnpm export

# Start production server
pnpm start
```

## Project Structure

```
4days_package/
├── app/
│   ├── layout.tsx              # Root layout with metadata (24 lines)
│   ├── page.tsx                # Main page component (23 lines)
│   ├── pe_es/                  # Spanish route
│   │   └── page.tsx            # Spanish language page
│   ├── pe_en/                  # English route
│   │   └── page.tsx            # English language page
│   ├── test/                   # Test route
│   └── globals.css             # Global styles (95 lines)
├── components/
│   ├── trip-page-client.tsx    # Main trip component (875 lines)
│   ├── trip-data-es.ts         # Spanish content data (457 lines)
│   ├── trip-data-en.ts         # English content data (456 lines)
│   ├── floating-language-selector.tsx # Language switcher (78 lines)
│   ├── icons.tsx               # Custom icons (48 lines)
│   ├── theme-provider.tsx      # Theme management (12 lines)
│   └── ui/                     # shadcn/ui components (35+ files)
├── hooks/
│   ├── use-toast.ts            # Toast notification system (195 lines)
│   └── use-mobile.tsx          # Mobile detection (20 lines)
├── lib/
│   └── utils.ts                # Utility functions (7 lines)
├── public/                     # Static assets
├── styles/
│   └── globals.css             # Additional global styles
├── next.config.mjs             # Next.js configuration (17 lines)
├── tailwind.config.ts          # Tailwind configuration (78 lines)
├── tsconfig.json               # TypeScript configuration (28 lines)
├── package.json                # Dependencies and scripts (72 lines)
└── README.md                   # This file
```

## Architecture & Design

### Component Architecture
- **Main Component:** `trip-page-client.tsx` - 875 lines of complex React logic
- **Data Management:** Separate TypeScript files for Spanish/English content
- **UI Components:** Modular shadcn/ui components for consistency
- **Custom Hooks:** Reusable logic for toast and mobile detection
- **Utility Functions:** Helper functions for styling and logic

### Multi-language Implementation
- **Route-based:** `/pe_es` for Spanish, `/pe_en` for English
- **Content Separation:** Dedicated data files for each language
- **Dynamic Switching:** Floating language selector with smooth transitions
- **SEO Optimization:** Proper metadata for each language version

### Performance Optimizations
- **Code Splitting:** Automatic with Next.js App Router
- **Static Export:** Ready for CDN deployment
- **Image Optimization:** Next.js Image component
- **Bundle Analysis:** Optimized dependencies and tree shaking
- **TypeScript:** Compile-time optimization and error catching

## API Integration

### Backend Connection
The frontend connects to the Visit Bolivia backend API:
- **Production:** `https://backend-visitbolivia.onrender.com`
- **Development:** `http://localhost:8000`

### API Endpoints Used
- `GET /api/reviews/4days` - Customer reviews and ratings
- `GET /api/images/4days` - Travel package images
- `GET /api/itinerary/4days` - Day-by-day itinerary

### Error Handling
- **Retry Logic:** Automatic retry with exponential backoff
- **Fallback Data:** Graceful degradation with static content
- **Loading States:** User-friendly loading indicators
- **Error Messages:** Informative error handling

## Development Guidelines

### Code Quality Standards
- **TypeScript:** Strict type checking enabled
- **Component Design:** Modular and reusable components
- **Styling:** Tailwind CSS with consistent design tokens
- **Accessibility:** WCAG 2.1 compliance
- **Performance:** Optimized rendering and bundle size

### Development Commands
```bash
# Development server
pnpm dev

# Type checking
pnpm type-check

# Linting
pnpm lint

# Build production
pnpm build

# Export static files
pnpm export
```

### Environment Configuration
- **Development:** Hot reload with Next.js dev server
- **Production:** Static export for CDN deployment
- **Testing:** Test route available at `/test`
- **Languages:** Route-based language switching

## Dependencies

### Core Dependencies
- **next**: 15.2.4 - React framework
- **react**: 19 - UI library
- **typescript**: 5 - Type safety
- **tailwindcss**: 3.4.17 - Styling
- **@radix-ui/react-***: 20+ UI components
- **lucide-react**: 0.454.0 - Icon library
- **react-hook-form**: 7.54.1 - Form handling
- **zod**: 3.24.1 - Schema validation

### Development Dependencies
- **@types/node**: 22 - Node.js types
- **@types/react**: 19 - React types
- **@types/react-dom**: 19 - React DOM types
- **postcss**: 8.5 - CSS processing
- **autoprefixer**: 10.4.20 - CSS vendor prefixes

## Deployment

### Static Export
The application is configured for static export:
```bash
pnpm build
```

### Deployment Platforms
- **Vercel:** Recommended for Next.js applications
- **Netlify:** Static site hosting
- **CDN:** Any static file hosting service
- **GitHub Pages:** With GitHub Actions

### Environment Variables
```env
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://backend-visitbolivia.onrender.com
```

## Performance Metrics

### Code Statistics
- **Total Lines:** 2,000+ lines of production-ready code
- **Components:** 10+ custom components
- **Dependencies:** 35+ carefully selected packages
- **Bundle Size:** Optimized with code splitting
- **TypeScript Coverage:** 100% type safety

### Technical Achievements
- **Multi-language Architecture:** Complete i18n implementation
- **Component Reusability:** Modular design with shadcn/ui
- **Performance:** Fast loading with Next.js optimizations
- **Accessibility:** WCAG 2.1 compliant components
- **Mobile Experience:** Responsive design across all devices

## License & Copyright

This project is proprietary software developed by Sergio Agreda for Visit Bolivia.

**Copyright © 2025 Sergio Agreda (sergioagreda21@outlook.com)**  
All rights reserved.

See `LICENSE` file for complete terms and conditions.  
See `AUTHORS.md` for detailed development history and contributions.

## Contact & Support

For questions regarding this frontend application:

**Developer:** Sergio Agreda  
**Email:** sergioagreda21@outlook.com  
**GitHub:** [@AgredaLem023](https://github.com/AgredaLem023)  
**Project:** Visit Bolivia - 4-Day Travel Package Frontend  

## Related Projects

- **Backend API:** Visit Bolivia trip packages backend (Python/FastAPI)
- **11-Day Package:** Extended Bolivia travel package frontend
- **Frontend Architecture:** Shared components and utilities

---

*This frontend application was originally developed by Sergio Agreda and transferred to Visit Bolivia business operations while maintaining original authorship and intellectual property rights.* 