import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv, type HtmlTagDescriptor, type Plugin} from 'vite';

// Injects analytics/verification tags from env vars so no site-specific
// values are hardcoded into index.html. Any var left blank is simply skipped.
function analyticsTagsPlugin(env: Record<string, string>): Plugin {
  return {
    name: 'inject-analytics-tags',
    transformIndexHtml() {
      const tags: HtmlTagDescriptor[] = [];

      if (env.VITE_GSC_VERIFICATION) {
        tags.push({
          tag: 'meta',
          attrs: {name: 'google-site-verification', content: env.VITE_GSC_VERIFICATION},
          injectTo: 'head-prepend',
        });
      }

      if (env.VITE_GA_MEASUREMENT_ID) {
        tags.push(
          {
            tag: 'script',
            attrs: {async: true, src: `https://www.googletagmanager.com/gtag/js?id=${env.VITE_GA_MEASUREMENT_ID}`},
            injectTo: 'head',
          },
          {
            tag: 'script',
            children: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${env.VITE_GA_MEASUREMENT_ID}');`,
            injectTo: 'head',
          },
        );
      }

      if (env.VITE_PLAUSIBLE_DOMAIN) {
        tags.push({
          tag: 'script',
          attrs: {
            defer: true,
            'data-domain': env.VITE_PLAUSIBLE_DOMAIN,
            src: env.VITE_PLAUSIBLE_SRC || 'https://plausible.io/js/script.js',
          },
          injectTo: 'head',
        });
      }

      if (env.VITE_UMAMI_WEBSITE_ID) {
        tags.push({
          tag: 'script',
          attrs: {
            defer: true,
            src: env.VITE_UMAMI_SRC || 'https://cloud.umami.is/script.js',
            'data-website-id': env.VITE_UMAMI_WEBSITE_ID,
          },
          injectTo: 'head',
        });
      }

      return tags;
    },
  };
}

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');

  return {
    plugins: [react(), tailwindcss(), analyticsTagsPlugin(env)],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
