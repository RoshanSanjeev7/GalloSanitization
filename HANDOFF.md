# Production Handoff Documentation

## High-Level Architecture

```
┌─────────────────────────────────────────────────────────┐
│                      Frontend                           │
│  React 18 + TypeScript + Vite (port 3000)              │
│  ├── pages/          # Route components                │
│  ├── components/     # Shared UI components            │
│  ├── services/api.ts # API client                      │
│  ├── store/          # Redux (auth only)               │
│  └── styles/         # CSS Modules + global            │
└─────────────────────────────────────────────────────────┘
                         │
                  HTTP /api/*
                         ▼
┌─────────────────────────────────────────────────────────┐
│                      Backend                            │
│  Express + TypeScript (port 4000)                      │
│  ├── routes/         # API endpoints                   │
│  ├── middleware/     # Auth, validation                │
│  └── data/store.ts   # In-memory data                  │
└─────────────────────────────────────────────────────────┘
```

## Core Files Reference

| File | Purpose |
|------|---------|
| `frontend/src/App.tsx` | Route definitions |
| `frontend/src/services/api.ts` | All API calls |
| `frontend/src/pages/OperatorDashboard.tsx` | Operator home |
| `frontend/src/pages/AdminDashboard.tsx` | Admin home |
| `frontend/src/pages/ChecklistFill.tsx` | Fill checklist |
| `frontend/src/pages/SubmissionReview.tsx` | Admin review |
| `backend/src/routes/auth.ts` | Login/logout |
| `backend/src/routes/checklists.ts` | Checklist CRUD |
| `backend/src/data/store.ts` | In-memory DB |

## Features Implemented

### Operator Flow
1. Login → Operator Dashboard
2. Create checklist from template
3. Fill checklist items (mark done/issue, add comments)
4. Submit for review

### Admin Flow
1. Login → Admin Dashboard
2. View pending submissions
3. Review checklist (view all items, comments)
4. Edit mode (modify items, add/edit/delete comments)
5. Approve or Deny
6. Export to PDF

### Shared Features
- Role-based routing (operator vs admin)
- JWT authentication
- Real-time status updates
- Comment system on items

## What Worked Well
- CSS Modules for scoped styling
- Playwright E2E tests for all flows
- TypeScript for type safety
- Simple Express backend

## Known Limitations
1. **In-memory data** - Resets on server restart
2. **No real-time** - Polling only, no WebSockets
3. **PDF export** - Uses browser print, no server generation
4. **Concurrent edits** - Last write wins, no conflict resolution
5. **No pagination** - All checklists loaded at once

## Edge Cases Handled
- Empty states ("No checklists found")
- Session expiry → redirect to login
- Invalid routes → 404 handling
- API errors → User-facing messages

## Testing

```bash
# Unit tests (Vitest)
npm run test

# E2E tests (Playwright) - requires dev servers
npm run dev &
npm run test:e2e

# Build check
npm run build
```

## Environment Setup

```bash
# Install dependencies
npm install

# Development
npm run dev

# Production build
npm run build
npm run preview
```

## Deployment Notes
- Frontend: Static files, deploy to any CDN (Vercel, Netlify, S3)
- Backend: Node.js 18+, no external DB required
- Environment: No .env required for demo mode
