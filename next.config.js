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

const ggfOptions = {
  outputDir: './static/fonts',
  path: '/static/fonts/',
  overwriting: true
}

new GetGoogleFonts(ggfOptions).download('https://fonts.googleapis.com/css?family=Lato:300,300i,400,700&display=auto')
new GetGoogleFonts(ggfOptions).download('https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,700&display=auto')

module.exports = withOffline(withCSS(nextConfig))
