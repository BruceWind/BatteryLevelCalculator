This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Cloudflare Pages

To deploy this Next.js project on Cloudflare Pages, follow these steps:

1. Push your project to a GitHub repository.

2. Log in to your Cloudflare account and go to the Pages section.

3. Click on "Create a project" and select your GitHub repository.

4. Configure your build settings:
   - Framework preset: Next.js
   - Build command: `npm run build`
   - Build output directory: `.next`

5. Add the following environment variables:
   - `NODE_VERSION`: Set to `16` or higher
   - `NPM_VERSION`: Set to `8` or higher

6. Click "Save and Deploy" to start the deployment process.

7. Once deployed, Cloudflare will provide you with a URL for your site.

