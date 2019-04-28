// next.config.js
const withCSS = require('@zeit/next-css')
const GetGoogleFonts = require('get-google-fonts');

new GetGoogleFonts({
    outputDir: './static/fonts',
    path: '/static/fonts/'
}).download([
	{
        Lato: [300, '300i', 400, 700],
	    Raleway: [300, '300i', 400, '400i', 700]
    }
])

module.exports = withCSS({
    cssLoaderOptions: {
        url: false
    }
})