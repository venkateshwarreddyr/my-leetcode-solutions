# My LeetCode Solutions Atlas

This repository is my personal archive of LeetCode solutions, organized by problem slug and language.

Live site: https://my-leetcode-solutions.vercel.app/

## What Is New

- Dashboard cards for total solutions, language count, current-year activity, and metadata coverage
- Submission timeline chart for recent monthly activity
- Advanced filters: query, language, file extension, metadata-only mode, page size, sort mode
- Dual layouts: grid and list views
- Smart sorting: newest/oldest, title A-Z/Z-A, runtime fastest/slowest
- Language cloud shortcuts
- Deterministic random matching solution picker
- Detail page enhancements: line-numbered code view, copy-to-clipboard, code stats, and neighboring solutions
- Related solutions suggestions (by language + slug token overlap)
- Brighter visual redesign with responsive behavior for desktop/mobile

## How Solutions Are Organized

- Each problem is stored in: `solutions/<problem-slug>/`
- Each solution file follows: `solution.<ext>`
- Examples:
  - `solutions/basic-calculator-ii/solution.js`
  - `solutions/valid-parentheses/solution.rs`

## Metadata Format (Optional but Recommended)

Many files include header metadata used by the local viewer:

```js
// Problem: Basic Calculator II
// LeetCode: https://leetcode.com/problems/basic-calculator-ii/
// Language: JavaScript
// Runtime: 50 ms
// Memory: 45 MB
// Submitted: 2026-02-20
```

## Local Solution Viewer

This repo also includes a Next.js app to browse/search solutions.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Production: https://my-leetcode-solutions.vercel.app/

## Deployment (Recommended)

This app should be deployed through **Vercel Git Integration** (not via custom GitHub deploy scripts).

1. In Vercel, click **Add New Project**.
2. Import `venkateshwarreddyr/my-leetcode-solutions`.
3. Framework: `Next.js` (auto-detected).
4. Root Directory: repository root (`.`).
5. Build Command: `npm run build` (default).
6. Output: `.next` (default for Next.js).
7. Production Branch: `main`.
8. Click **Deploy**.

After this setup:
- Every push to `main` triggers a production deployment in Vercel.
- Pull requests/other branches create preview deployments.

## CI vs CD

- GitHub Actions (`.github/workflows/ci-cd.yml`) is used for CI checks (`npm ci`, `npm run build`).
- Vercel handles all deployments (CD) directly from Git events.

## Project Structure

- `solutions/`: all problem solutions (source of truth)
- `app/`: Next.js UI (dashboard + detail pages)
- `components/`: client components (for example: copy-code button)
- `lib/solutions.js`: file indexer, metadata parser, and analytics helpers
