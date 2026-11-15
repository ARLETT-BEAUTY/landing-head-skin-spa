# Landing Head Spa Japonés · Arlett Beauty & Health

Landing de una sola página (sin menú) para el servicio de head spa japonés, con los tres packs y sus enlaces de pago de Stripe.

- **Stack:** Next.js 16 con exportación estática (`output: 'export'`). `npm run build` genera la web completa en `out/`.
- **Contenido:** todo está en `app/page.tsx`. Los packs (nombre, duración, precio, lista y enlace de Stripe), los pasos y las preguntas son listas al principio del fichero.
- **Diseño:** `app/globals.css` (negro y dorado, Cormorant Garamond + Jost). Efectos de scroll y barra de compra en móvil en `app/Effects.tsx`.
- **Fotos:** `public/img`. Todas las fotos actuales son provisionales (Wikimedia Commons, créditos en `public/credits.html`) hasta tener las del centro.

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # genera out/
```

## Publicar en Vercel con un subdominio

1. En Vercel: **Add New → Project**, importa el repo `ARLETT-BEAUTY/landing-head-skin-spa`. Detecta Next.js solo; no hace falta tocar nada (build `next build`, salida estática).
2. Deploy. Te da una URL `*.vercel.app` para revisar.
3. En el proyecto: **Settings → Domains → Add**, escribe el subdominio (p. ej. `headspa.tudominio.com`).
4. En el panel DNS de tu dominio crea un registro:
   - Tipo: `CNAME`
   - Nombre / Host: `headspa` (solo la parte del subdominio)
   - Valor / Destino: `cname.vercel-dns.com` (o el valor exacto que te muestre Vercel en ese paso)
5. Espera a que Vercel marque el dominio como válido (minutos, a veces hasta unas horas). El certificado HTTPS lo pone Vercel solo.
6. Cuando esté activo, descomenta `metadataBase` en `app/layout.tsx` con la URL final.

## Pendiente de confirmar (ver mensaje en el hilo)

- Contenido de cada pack (sacado del mockup) y qué pasa después del pago (la respuesta "¿Cómo elijo el día?" es provisional, marcada como PROVISIONAL en `app/page.tsx`).
- Fotos reales de la cabina, del lavado y del masaje.
- Ciudad o dirección, si quieres que aparezca.
