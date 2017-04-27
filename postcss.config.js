module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-import-url')(),
    require('postcss-copy')({
        "src": "./",
        "dest": "./dist",
        "template": "assets/[name].[ext]"
    })
  ]
}
