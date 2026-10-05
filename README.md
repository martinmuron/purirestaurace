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

## Bookio reservations

The reservation pages are `/cs/rezervace`, `/en/rezervace`, and `/ru/rezervace`. They embed the public Bookio widget for `puri-restaurace`; bookings go directly to Bookio, without website access to the account password. Account access is documented in Notion under Keys & Accounts.

The widget uses Czech on the Czech page and English on the English and Russian pages. Bookio does not offer Russian for its restaurant widget, so the Russian page explains the English form and offers email contact.

`public/bookio.css` matches the site's colors, logo and Manrope font. The embedded form loads it from the current website origin, so the site must be served over HTTPS for Bookio to load the stylesheet. The font response headers in `next.config.ts` allow Bookio to use the self-hosted font subsets. Keep the stylesheet colors aligned with `src/app/globals.css`.

Opening hours, tables, capacity, notifications and subscription are managed in the [Bookio restaurant admin](https://www.bookiopro.com/client-admin/puri-restaurace/dashboard). The website does not override those settings.

Run `npm test` (Node.js 22.18 or newer), `npm run lint`, and `npm run build` to verify the integration. Browser verification can check availability and the guest-details form without submitting a booking. After deployment, verify that `/bookio.css` and `/fonts/manrope-latin.woff2` load inside the live Bookio iframe.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
