import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Jost } from 'next/font/google';
import './globals.css';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});
const text = Jost({ subsets: ['latin'], weight: ['300', '400', '500'], variable: '--font-text', display: 'swap' });

export const metadata: Metadata = {
  // metadataBase: new URL('https://headspa.TU-DOMINIO'),  // añadir cuando el subdominio esté activo
  title: 'Head spa japonés · Arlett Beauty & Health',
  description:
    'Ritual japonés de cabello y piel: limpieza profunda del cuero cabelludo, masaje y cuidado facial. Tres experiencias de 60 a 120 minutos, desde 89 €.',
  icons: { icon: '/favicon.png' },
  openGraph: {
    type: 'website',
    title: 'Head spa japonés en Arlett Beauty & Health',
    description: 'Tres experiencias Skin & Head de 60 a 120 minutos, desde 89 €.',
    images: ['/share.jpg'],
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#070605',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${display.variable} ${text.variable}`}>
      <body>{children}</body>
    </html>
  );
}
