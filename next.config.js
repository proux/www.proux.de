// next.config.js
const withCSS = require('@zeit/next-css')
const GetGoogleFonts = require('get-google-fonts')
const withOffline = require('next-offline')

const nextConfig = {
  workboxOpts: {
    swDest: process.env.NEXT_EXPORT
      ? 'service-worker.js'
      : 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxEntries: 200,
          },
        },
      },
    ],
  },
  experimental: {
    async rewrites() {
      return [
        {
          source: '/service-worker.js',
          destination: '/_next/static/service-worker.js',
        },
      ]
    },
  },
  cssLoaderOptions: {
    url: false
  }
}

const ggfOptions = {
  outputDir: './static/fonts',
  path: '/static/fonts/',
  overwriting: true
}

new GetGoogleFonts(ggfOptions).download('https://fonts.googleapis.com/css?family=Lato:300,300i,400,700&display=fallback', { cssFile: 'lato.css' })
new GetGoogleFonts(ggfOptions).download('https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,700&display=fallback', { cssFile: 'roboto.css' })

module.exports = withOffline(withCSS(nextConfig))
