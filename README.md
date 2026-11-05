# ARYSON!CK

Official site for ARYSON!CK (Nick Santangelo), EDM DJ / producer from Albuquerque, NM.
Built with Vite, React 19 and Tailwind CSS 4. Requires Node 20.19+.

## Editing content

- **Contact & socials:** `src/siteConfig.js`. Set `bookingEmail` so the booking form
  opens a pre-filled email to that address, and replace the `#` social links.
- **Sections:** `src/components/` (`Hero`, `About`, `Story`, `Services`, `Gallery`, `Booking`, `Footer`).
- **Design tokens:** colors and fonts live in the `@theme` block of `src/index.css`, alongside shared styles.

## Scripts

```bash
npm install
npm run dev      # dev server at http://localhost:3000
npm run build    # production build in ./build
npm run preview  # serve the production build locally
npm run lint     # ESLint
npm run format   # Prettier (with Tailwind class sorting)
```
