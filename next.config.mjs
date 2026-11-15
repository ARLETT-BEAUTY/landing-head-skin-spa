/** Static export: `npm run build` writes the whole site to /out (Vercel serves it as-is). */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: false,
  devIndicators: false,
};
export default nextConfig;
