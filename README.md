# Piyush Sharma — Portfolio

Built with **Next.js 16** · **Tailwind CSS** · **Prisma (SQLite)** · **GitHub API**

## Features
- ✅ Custom cursor with lerp-smoothed ring
- ✅ Scroll reveal animations on every section
- ✅ Terminal typing animation in Hero
- ✅ Live GitHub API project fetch
- ✅ Contact form with SQLite DB (Prisma)
- ✅ Coding profiles section (GitHub, LinkedIn, Kaggle, Codeforces, LeetCode)
- ✅ Fully responsive (mobile + desktop)
- ✅ Dark futuristic design with noise, grid, glow effects

## Getting Started

```bash
npm install
npx prisma generate
npx prisma db push
npm run dev
```

## Deploy to Vercel
```bash
npm i -g vercel
vercel --prod
```

Set `DATABASE_URL="file:./dev.db"` in Vercel environment variables.

## Resume
Replace `public/resume.pdf` with your actual resume PDF.

## Customization
- `data/portfolio.ts` — skills, achievements, profiles
- `components/sections/` — each section is isolated
- `app/globals.css` — all custom CSS animations

