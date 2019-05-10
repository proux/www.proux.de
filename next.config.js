// next.config.js
const withCSS = require('@zeit/next-css')
const GetGoogleFonts = require('get-google-fonts')
const withOffline = require('next-offline')

const nextConfig = {
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'networkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60 // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      }
    ]
  },
  cssLoaderOptions: {
    url: false
  }
}

new GetGoogleFonts({
  outputDir: './static/fonts',
  path: '/static/fonts/',
  overwriting: true
}).download([
  {
    Lato: [300, '300i', 400, 700],
    Raleway: [300, '300i', 400, '400i', 700]
  }
])

module.exports = withOffline(withCSS(nextConfig))
