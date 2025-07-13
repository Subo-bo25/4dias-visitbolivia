# Contributing to Visit Bolivia - 4-Day Package Frontend

## Authorship & Ownership

**Original Developer:** Sergio Agreda (sergioagreda21@outlook.com)  
**GitHub:** @AgredaLem023  
**Copyright:** © 2025 Sergio Agreda. All rights reserved.

> **Important:** This is proprietary software. All contributions must maintain the original authorship and follow the established guidelines.

## Development Guidelines

### Prerequisites

- Node.js 18+ or later
- PNPM package manager
- Git
- TypeScript knowledge
- Next.js 15 familiarity
- Tailwind CSS experience

### Getting Started

1. **Clone and Setup:**
   ```bash
   git clone https://github.com/AgredaLem023/visit-bolivia-packages.git
   cd visit-bolivia-packages/4days_package
   pnpm install
   ```

2. **Development Server:**
   ```bash
   pnpm dev
   ```

3. **Build and Test:**
   ```bash
   pnpm build
   pnpm lint
   ```

## Code Standards

### TypeScript Standards
- **Strict Mode:** Always use strict TypeScript configuration
- **Type Safety:** All functions and components must be properly typed
- **Interfaces:** Define clear interfaces for all data structures
- **Generics:** Use generics for reusable components when appropriate

```typescript
// Good: Proper typing
interface TripDataProps {
  packageId: string;
  language: 'es' | 'en';
  isLoading?: boolean;
}

// Bad: Using any type
function processData(data: any): any {
  return data;
}
```

### React Component Standards
- **Functional Components:** Use functional components with hooks
- **Props Interface:** Define props interface for all components
- **Default Props:** Use defaultProps or default parameters
- **Error Boundaries:** Implement error handling where appropriate

```typescript
// Good: Properly typed functional component
interface ButtonProps {
  variant: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  onClick: () => void;
  children: React.ReactNode;
}

export function Button({ variant, size = 'md', onClick, children }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }))}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
```

### Styling Standards
- **Tailwind CSS:** Use Tailwind classes for all styling
- **Component Variants:** Use `class-variance-authority` for component variants
- **Responsive Design:** Mobile-first approach with breakpoints
- **Consistent Spacing:** Use Tailwind spacing scale consistently

```typescript
// Good: Using Tailwind with variants
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors",
  {
    variants: {
      variant: {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4",
        lg: "h-12 px-6 text-lg",
      },
    },
  }
);
```

### File Organization
- **Components:** Place in `/components` directory
- **Hooks:** Place in `/hooks` directory
- **Utilities:** Place in `/lib` directory
- **Types:** Define in component files or separate `types.ts`
- **Constants:** Place in appropriate component or separate constants file

### Import Standards
- **Absolute Imports:** Use `@/` prefix for absolute imports
- **Import Order:** React, Next.js, third-party, local imports
- **Named Imports:** Prefer named imports over default imports

```typescript
// Good: Proper import order
import { useState, useEffect } from 'react';
import { NextPage } from 'next';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { TripData } from './trip-data';
```

## Component Architecture

### Main Components
- **Layout Components:** Root layout with metadata and providers
- **Page Components:** Route-specific components
- **UI Components:** Reusable UI elements using shadcn/ui
- **Business Logic:** Components with travel-specific logic

### Data Management
- **Content Separation:** Separate files for Spanish/English content
- **API Integration:** Centralized API calls with error handling
- **State Management:** React hooks for local state, Context for global state

### Performance Guidelines
- **Code Splitting:** Leverage Next.js automatic code splitting
- **Image Optimization:** Use Next.js Image component
- **Bundle Analysis:** Keep bundle size optimized
- **Lazy Loading:** Implement lazy loading for non-critical components

## Development Workflow

### Branch Strategy
- **Main Branch:** `main` - Production-ready code
- **Feature Branches:** `feature/description` - New features
- **Bug Fixes:** `fix/description` - Bug fixes
- **Hotfixes:** `hotfix/description` - Critical fixes

### Commit Standards
- **Conventional Commits:** Use conventional commit format
- **Clear Messages:** Descriptive commit messages
- **Atomic Commits:** One logical change per commit

```bash
# Good commit messages
feat: add WhatsApp integration for booking
fix: resolve language selector routing issue
docs: update README with new deployment instructions
style: improve responsive design for mobile devices
```

### Testing Guidelines
- **Manual Testing:** Test all features across devices
- **Browser Testing:** Chrome, Firefox, Safari, Edge
- **Mobile Testing:** iOS Safari, Android Chrome
- **Performance Testing:** Lighthouse scores

## Code Quality

### Linting and Formatting
- **ESLint:** Follow project ESLint configuration
- **Prettier:** Use Prettier for code formatting
- **TypeScript:** Fix all TypeScript errors
- **Accessibility:** Ensure WCAG 2.1 compliance

### Performance Standards
- **Core Web Vitals:** Optimize for Google Core Web Vitals
- **Bundle Size:** Keep bundle size under 1MB
- **Loading Time:** Target under 3 seconds initial load
- **Accessibility:** Maintain accessibility score above 90

### Error Handling
- **Graceful Degradation:** Handle API failures gracefully
- **User Feedback:** Provide clear error messages
- **Retry Logic:** Implement retry mechanisms for API calls
- **Fallback Content:** Provide fallback content when needed

## Multi-language Support

### Content Management
- **Separate Files:** Maintain separate data files for each language
- **Consistent Structure:** Keep data structure consistent between languages
- **Translation Quality:** Ensure high-quality translations
- **SEO Optimization:** Optimize metadata for each language

### Routing Strategy
- **Route-based:** Use `/pe_es` and `/pe_en` for languages
- **Language Detection:** Implement proper language detection
- **Fallback Language:** Default to Spanish as fallback
- **URL Structure:** Maintain clean URL structure

## Deployment Guidelines

### Build Process
- **Static Export:** Configure for static export
- **Environment Variables:** Properly configure environment variables
- **Asset Optimization:** Optimize images and assets
- **Cache Strategy:** Implement proper caching headers

### Production Checklist
- [ ] TypeScript compilation successful
- [ ] Build process completes without errors
- [ ] All links and routes work correctly
- [ ] Images load properly
- [ ] Performance metrics meet standards
- [ ] Accessibility compliance verified
- [ ] Cross-browser compatibility tested

## Security Considerations

### Frontend Security
- **Input Validation:** Validate all user inputs
- **XSS Prevention:** Prevent cross-site scripting attacks
- **CSRF Protection:** Implement CSRF protection where needed
- **Content Security Policy:** Configure CSP headers

### API Security
- **Environment Variables:** Keep API keys secure
- **HTTPS Only:** Use HTTPS in production
- **Rate Limiting:** Implement rate limiting for API calls
- **Error Handling:** Don't expose sensitive information in errors

## Documentation Standards

### Code Documentation
- **JSDoc Comments:** Document complex functions and components
- **README Updates:** Keep README.md current
- **API Documentation:** Document API integration points
- **Component Documentation:** Document component props and usage

### Inline Comments
- **Complex Logic:** Comment complex business logic
- **Workarounds:** Document any workarounds with explanations
- **TODOs:** Mark areas for improvement with TODO comments
- **Performance Notes:** Document performance considerations

## Contact & Support

For questions regarding development guidelines or contributions:

**Original Developer:** Sergio Agreda  
**Email:** sergioagreda21@outlook.com  
**GitHub:** @AgredaLem023  

## License Notice

This project is proprietary software. All contributions must respect the original authorship and licensing terms. See `LICENSE` file for complete terms.

---

*These guidelines ensure consistent, high-quality development while maintaining the original authorship and intellectual property rights of Sergio Agreda.* 