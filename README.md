# Landing Head Spa Japonés · Arlett Beauty & Health

Landing de una sola página (sin menú) para el servicio de head spa japonés, con los tres packs y sus enlaces de pago de Stripe.

- **Stack:** Next.js 16 con exportación estática (`output: 'export'`). `npm run build` genera la web completa en `out/`.
- **Diseño:** recreación del handoff de Claude Design (opción 8a, móvil 390 px). En escritorio, columna centrada de 480 px hasta tener diseño propio.
- **Contenido:** rituales (nombre, duración, precio, qué incluye, foto y enlace de Stripe), preguntas frecuentes y contacto en `lib/rituales.ts`. La página está en `app/page.tsx`.
- **Estilos:** `app/globals.css` (tokens del diseño, Marcellus + Cormorant Garamond + Hanken Grotesk). Animaciones de scroll en `components/Effects.tsx`.
- **Fotos:** `public/img`. Las fotos `hs-*.webp` son provisionales (baja resolución) hasta tener las del centro.

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

## Enlaces directos de pago

Páginas estáticas (`app/[pack]` y `app/reservar/[pack]`) con título, descripción e imagen de Arlett para la vista previa al compartir, que llevan al instante al pago de Stripe. Salen de `lib/rituales.ts`:

- `/esencial` y `/reservar/esencial`
- `/delicatesse` y `/reservar/delicatesse`
- `/bloom` y `/reservar/bloom`

## Pendiente de confirmar

- Contenido de cada pack (sacado del mockup) y qué pasa después del pago (la respuesta "¿Cómo elijo el día?" es provisional, marcada como PROVISIONAL en `app/page.tsx`).
- Fotos reales de la cabina, del lavado y del masaje.
- Ciudad o dirección, si quieres que aparezca.
