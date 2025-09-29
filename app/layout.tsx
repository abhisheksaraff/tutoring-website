import Script from "next/script";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.predivine.com"),
  title: "Predivine CS Tutoring | Computer Science & Coding Help in Toronto",
  description:
    "Predivine helps students from middle school to university build confidence in computer science. Learn Python, Java, C, web development, algorithms, and ace AP CS exams with expert tutoring.",
  keywords: [
    "computer science tutoring",
    "coding tutor",
    "Python tutoring",
    "Java tutor",
    "C programming help",
    "AP Computer Science prep",
    "Toronto coding tutor",
    "university programming help",
    "CS tutoring Toronto",
    "Predivine tutoring",
  ],
  authors: [{ name: "Predivine CS Tutoring" }],
  openGraph: {
    title: "Predivine CS Tutoring | Building Tomorrow’s Canadian Tech Leaders",
    description:
      "Expert computer science tutoring for middle school, high school, and university students. Personalized support in coding, algorithms, web development, and interview prep.",
    url: "https://predivine.com",
    siteName: "Predivine CS Tutoring",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Predivine CS Tutoring preview",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Predivine CS Tutoring",
    description:
      "Personalized CS tutoring in Python, Java, algorithms, AP CS prep, and coding interviews.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Predivine CS Tutoring",
              url: "https://www.predivine.com",
              logo: "https://www.predivine.com/predivine-logo-solid.png",
              sameAs: [
                "https://www.facebook.com/predivinetutoring",
                "https://www.instagram.com/predivinetutoring",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Toronto",
                addressRegion: "ON",
                addressCountry: "Canada",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-647-547-4808",
                contactType: "tutoring inquiry",
                email: "predivinetutoring@gmail.com",
              },
            }),
          }}
        />
      </head>
      <body>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6G15SJMC1K"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6G15SJMC1K');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
