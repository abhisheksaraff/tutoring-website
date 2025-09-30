# Predivine CS Tutoring Website

[![Website](https://img.shields.io/badge/Website-predivine.com-blue)](https://predivine.com)  
[![Website](https://img.shields.io/badge/Website-www.predivine.com-blue)](https://www.predivine.com)  
[![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js)](https://nextjs.org/)  
[![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript)](https://www.typescriptlang.org/)  
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-blue?logo=tailwind-css)](https://tailwindcss.com/)  
[![DaisyUI](https://img.shields.io/badge/DaisyUI-purple)](https://daisyui.com/)  
[![EmailJS](https://img.shields.io/badge/EmailJS-orange)](https://www.emailjs.com/)  
[![React Toastify](https://img.shields.io/badge/React_Toastify-pink)](https://fkhadra.github.io/react-toastify/)  
[![next-sitemap](https://img.shields.io/badge/Next_Sitemap-green)](https://www.npmjs.com/package/next-sitemap)  

[![Performance](https://img.shields.io/badge/Performance-100-green)]()  
[![Accessibility](https://img.shields.io/badge/Accessibility-89-yellow)]()  
[![Best Practices](https://img.shields.io/badge/Best_Practices-100-green)]()  
[![SEO](https://img.shields.io/badge/SEO-100-green)]()  

Predivine provides expert computer science tutoring for students from middle school to university in Toronto, Canada. The website focuses on personalized tutoring in Python, Java, C, web development, algorithms, and AP CS prep, with a clear semantic HTML structure for SEO, accessibility, and high-performance user experience optimized for speed and mobile responsiveness.  

**Tech Stack**: Next.js (React framework with SSR & App Router), TypeScript (type-safe development), Tailwind CSS + DaisyUI (modern styling and components), EmailJS (@emailjs/browser) for contact form email sending, React Toastify for notifications, dotenv + ts-node for environment variable management, next-sitemap for sitemap generation.  

**Project Setup**:

```bash
npx create-next-app@latest predivine
cd predivine
npm install postcss --save-dev
npm install autoprefixer --save-dev
npm install tailwindcss @tailwindcss/postcss
npm install daisyui@latest
npm install @emailjs/browser
npm install dotenv ts-node
npm install react-toastify
npm install next-sitemap
npx tailwindcss init -p
