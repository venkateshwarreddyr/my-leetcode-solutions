# LeetCode Solutions Viewer

Next.js app to browse and search local LeetCode solutions stored in `solutions/*/solution.*`.

## Features

- Search by problem title, slug, or language
- Filter by language
- Paginated problem list
- Dedicated viewer page per solution
- Metadata parsing from source headers (`Problem`, `LeetCode`, `Language`, `Runtime`, `Memory`, `Submitted`)
- No database (all data read from local files)

## Project Structure

- `solutions/<slug>/solution.*`: source of truth for all solutions
- `app/`: Next.js App Router UI
- `lib/solutions.js`: file-system index + metadata parser

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy on Vercel

1. Push this folder to a GitHub repo.
2. In Vercel, click **Add New Project** and import the repo.
3. Keep defaults:
   - Framework Preset: `Next.js`
   - Build Command: `next build`
   - Output Directory: `.next`
4. Deploy.

Or with CLI:

```bash
npm i -g vercel
vercel
```

Then production deploy:

```bash
vercel --prod
```

## Notes

- This app does not require external APIs or a DB.
- The index is cached in memory for a short TTL to reduce repeated filesystem scans.
