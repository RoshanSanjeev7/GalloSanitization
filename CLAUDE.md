# CLAUDE.md - Project Rules

## Quick Start
```bash
npm install
npm run dev         # Start frontend (3000) + backend (4000)
npm run test        # Unit tests
npm run test:e2e    # E2E tests (requires dev servers)
npm run build       # Production build
```

## Architecture
- Frontend: `packages/frontend/` - React + TypeScript + Vite
- Backend: `packages/backend/` - Express + TypeScript
- Tests: `tests/` - Playwright E2E tests

## Code Standards

### DRY (Don't Repeat Yourself)
- If logic appears twice, extract to shared utility
- Date/time formatting → `src/utils/formatters.ts`
- Status labels → `src/utils/constants.ts`

### Function Length
- Max 50 lines per function
- Single responsibility - each function does ONE thing

### Styling
- NO inline styles - Use CSS classes
- NO `style={{ }}` - Extract to CSS module or global utilities

### File Size
- Max 300 lines per component
- If larger, extract sub-components

### Naming
- Components: PascalCase (`ChecklistItem.tsx`)
- Utilities: camelCase (`formatDate.ts`)
- CSS Modules: kebab-case (`checklist.module.css`)
- Constants: SCREAMING_SNAKE_CASE

### Error Handling
- All API calls need try/catch
- Show user-facing error messages
- Never swallow errors silently

### Imports
- No unused imports
- No React import (JSX transform handles it)
- Order: external libs → internal absolute → relative

### TypeScript
- No `any` types
- All props interfaces explicitly defined
