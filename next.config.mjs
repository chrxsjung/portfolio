const isDev = process.env.NODE_ENV !== "production";

// next injects inline scripts for hydration and the theme script in layout.jsx runs inline,
// so script-src needs 'unsafe-inline' unless the site moves to per-request nonces
// (which would force dynamic rendering). there is no user input rendered anywhere,
// so the remaining directives still meaningfully limit what the page can load or do.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  `connect-src 'self'${isDev ? " ws:" : ""}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,

  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },

  // old multi-page urls now live as sections on the home page
  async redirects() {
    return ["about", "contact", "projects", "work"].map((section) => ({
      source: `/${section}`,
      destination: `/#${section}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
