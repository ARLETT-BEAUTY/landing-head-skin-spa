import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Hanken_Grotesk, Marcellus } from 'next/font/google';
import './globals.css';

const marcellus = Marcellus({ subsets: ['latin'], weight: '400', variable: '--font-title', display: 'swap' });
const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: '500', variable: '--font-serif', display: 'swap' });
const hanken = Hanken_Grotesk({ subsets: ['latin'], weight: ['300', '400', '500'], variable: '--font-text', display: 'swap' });

export const metadata: Metadata = {
  // metadataBase: new URL('https://SUBDOMINIO.TU-DOMINIO'),  // añadir cuando el subdominio esté activo
  title: 'Skin & Head Japanese Spa | Arlett Beauty & Health',
  description:
    'Un ritual de agua, masaje y cuidado de piel y cabello. Tres rituales de 60 a 120 minutos en Arlett Beauty & Health, desde 89 €.',
  icons: { icon: '/favicon.png' },
  openGraph: {
    type: 'website',
    title: 'Skin & Head Japanese Spa | Arlett Beauty & Health',
    description: 'Tres rituales de agua, masaje y cuidado de piel y cabello. De 60 a 120 minutos, desde 89 €.',
    images: ['/share.jpg'],
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#17120f',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${marcellus.variable} ${cormorant.variable} ${hanken.variable}`}>
      <head>
        {/* Activa las animaciones solo si hay JS, para que el contenido nunca quede oculto */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
