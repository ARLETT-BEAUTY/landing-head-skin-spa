import type { Metadata } from 'next';
import { rituales } from '@/lib/rituales';

/** Enlaces amigables (/bloom, /reservar/bloom…): vista previa con datos de Arlett y salto inmediato a Stripe. */
export const pagoParams = () => rituales.map((r) => ({ pack: r.id }));

export function pagoMetadata(pack: string, path: string): Metadata {
  const r = rituales.find((x) => x.id === pack);
  if (!r) return {};
  const og = `/img/og-${r.id}.jpg`;
  const title = `Ritual ${r.nombre} · ${r.duracion} · ${r.precio} | Skin & Head Japanese Spa`;
  const description = `Reserva el ritual ${r.nombre} de Skin & Head Japanese Spa en Arlett Beauty & Health: ${r.incluye.map((x) => x.charAt(0).toLowerCase() + x.slice(1)).join(', ')}. ${r.duracion}, ${r.precio}.`;
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: { index: false, follow: true },
    openGraph: {
      type: 'website',
      url: path,
      siteName: 'Arlett Beauty & Health',
      title,
      description,
      images: [{ url: og, width: 1200, height: 630, alt: `Ritual ${r.nombre}` }],
      locale: 'es_ES',
    },
    twitter: { card: 'summary_large_image', title, description, images: [og] },
  };
}

export function PagoRedirect({ pack }: { pack: string }) {
  const r = rituales.find((x) => x.id === pack);
  if (!r) return null;
  return (
    <main className="page redirect">
      <meta httpEquiv="refresh" content={`0;url=${r.urlPago}`} />
      <script dangerouslySetInnerHTML={{ __html: `location.replace(${JSON.stringify(r.urlPago)})` }} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/img/logo-arlett.webp" alt="Arlett Beauty & Health" width={104} height={104} />
      <p>
        Abriendo el pago del ritual <span className="gold">{r.nombre}</span>…
      </p>
      <a href={r.urlPago} className="btn btn-solid btn-block">
        Ir al pago · {r.precio}
      </a>
    </main>
  );
}
