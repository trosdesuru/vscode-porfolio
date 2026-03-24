import type { Metadata } from "next";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Layout from "@/components/Layout";

import "@/styles/globals.css";
import "@/styles/themes.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://eduardhernandez-portfolio.vercel.app"),
  title: {
    default: "Eduard Hernández | Portfolio",
    template: "Eduard Hernández | %s",
  },
  description:
    "Product Designer con sólida base como Frontend Developer. Diseño experiencias de usuario estratégicas y construyo sistemas de diseño escalables con React y TypeScript.",
  icons: {
    icon: "/logos/icon.png",
    shortcut: "/logos/icon.png",
    apple: "/logos/icon.png",
  },
  keywords: [
    "eduard hernández",
    "ux engineer",
    "ui developer",
    "ux designer",
    "ui designer",
    "product designer",
    "react developer",
    "nextjs",
    "trosdesuru",
  ],
  openGraph: {
    title: "Eduard Hernández's Portfolio",
    description:
      "Product Designer & UX Engineer construyendo data-driven y aplicaciones funcionales.",
    url: "https://eduardhernandez-portfolio.vercel.app/",
    siteName: "Eduard Hernández",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio de Eduard Hernández - UX Engineer",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eduard Hernández Portfolio",
    description:
      "Product Designer & UX Engineer construyendo data-driven y aplicaciones funcionales.",
    images: ["/images/og-image.png"],
  },
};

const themeScript = `
  (function() {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Layout>{children}</Layout>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
