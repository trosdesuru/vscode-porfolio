import type { Metadata } from 'next';

import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next';

import Layout from '@/components/Layout';

import '@/styles/globals.css';
import '@/styles/themes.css';

export const metadata: Metadata = {
  title: {
    default: 'Eduard Hernández | Portfolio',
    template: 'Eduard Hernández | %s',
  },
  description: "Product Designer con sólida base como Frontend Developer. Diseño experiencias de usuario estratégicas y construyo sistemas de diseño escalables con React y TypeScript.",
  keywords: [
    'eduard hernández',
    'ux engineer',
    'ui developer',
    'ux designer',
    'ui designer',
    'product designer',
    'react developer',
    'nextjs',
    'trosdesuru'
  ],
  openGraph: {
    title: "Eduard Hernández's Portfolio",
    description: "Product Designer & UX Engineer construyendo data-driven y aplicaciones funcionales.",
    url: 'https://eduardhernandez.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
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
