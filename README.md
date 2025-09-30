# Predivine CS Tutoring Website

[![Website](https://img.shields.io/badge/Website-predivine.com-blue)](https://predivine.com) [![Website](https://img.shields.io/badge/Website-www.predivine.com-blue)](https://www.predivine.com) [![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js)](https://nextjs.org/) [![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript)](https://www.typescriptlang.org/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-blue?logo=tailwind-css)](https://tailwindcss.com/) [![DaisyUI](https://img.shields.io/badge/DaisyUI-purple)](https://daisyui.com/) [![EmailJS](https://img.shields.io/badge/EmailJS-orange)](https://www.emailjs.com/) [![React Toastify](https://img.shields.io/badge/React_Toastify-pink)](https://fkhadra.github.io/react-toastify/) [![next-sitemap](https://img.shields.io/badge/Next_Sitemap-green)](https://www.npmjs.com/package/next-sitemap)

## [![Lighthouse Performance](https://img.shields.io/badge/Performance-98-green)]() [![Lighthouse Accessibility](https://img.shields.io/badge/Accessibility-89-yellow)]() [![Lighthouse Best Practices](https://img.shields.io/badge/Best_Practices-100-green)]() [![Lighthouse SEO](https://img.shields.io/badge/SEO-100-green)]()

## Project Overview

Predivine provides expert computer science tutoring for students from middle school to university in Toronto, Canada.

The website focuses on: Personalized tutoring in Python, Java, C, Web Development, Algorithms, and AP CS prep. Clear, semantic HTML structure for SEO & accessibility. High-performance user experience optimized for speed and mobile responsiveness.

<video src="/demo.mp4" controls width="600"></video>

---

## Tech Stack

Next.js – React framework with SSR & App Router. TypeScript – Type-safe development. Tailwind CSS + DaisyUI – Modern styling and components. EmailJS – Contact form email sending. React Toastify – User notifications. dotenv + ts-node – Environment variable management. next-sitemap – Sitemap generation for SEO.

---

## Project Setup

### 1. Create Next.js App

`bash
npx create-next-app@latest predivine
cd predivine
`

### 2. Install Dependencies

`bash
npm install postcss autoprefixer tailwindcss @tailwindcss/postcss
npm install daisyui@latest
npm install @emailjs/browser
npm install dotenv ts-node
npm install react-toastify
npm install next-sitemap
`

### 3. Tailwind CSS Configuration

`bash
npx tailwindcss init -p
`

### 4. Environment Variables

Create a `.env.local` file:
`env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
`

### 5. SEO & Performance Implementation

Metadata setup: optimized title, description, keywords. Social sharing: Open Graph + Twitter cards, branded `og-image.png`. JSON-LD schema: `EducationalOrganization` & FAQ schema for local SEO. Semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>`. Local SEO: phone/email in footer, Toronto, Canada location. Sitemap & robots.txt: generated via **next-sitemap**. Performance optimization: Next.js `<Image>` component, Lighthouse audits (Performance 98, Accessibility 89, Best Practices 100, SEO 100).

### 6. Content SEO

Keyword-rich content: “computer science tutoring,” “AP CS prep,” “Python tutor,” “Java tutor,” etc. FAQ section optimized with structured data.

### 7. Contact Form Integration

Powered by EmailJS. Honeypot anti-bot field. Real-time notifications via React Toastify. Autocomplete attributes for all fields.

### 8. Analytics

Google Analytics 4 (GA4) with `gtag.js`. Real-time event tracking. GDPR/compliance ready if cookie consent is added.

---

## Key Highlights

Fully responsive & mobile-friendly. SEO optimized with structured metadata & JSON-LD. Accessibility-conscious (Lighthouse: 89/100). High performance (Lighthouse: 98/100). Modern TypeScript + Next.js App Router.

---

## Future Improvements

Implement cookie consent banner for GDPR compliance. Add FAQ structured data for rich snippets. Improve accessibility score to 100.

---

## Project Structure (Selected)

`/app
  /globals.css
  /RootLayout.tsx
/components
  /ContactForm.tsx
/public
  /og-image.png
  /predivine-logo-solid.png
.env.local
next.config.js
tailwind.config.js
postcss.config.js`

---

## Conclusion

This project demonstrates a professional, SEO-friendly, performance-optimized, and fully functional Next.js website for Predivine CS Tutoring. It combines modern web development best practices with analytics, contact forms, accessibility, and local SEO for strong online visibility.

---

## References & Tools

Next.js Documentation. Tailwind CSS Documentation. DaisyUI. EmailJS. React Toastify. next-sitemap. Google Analytics 4.
