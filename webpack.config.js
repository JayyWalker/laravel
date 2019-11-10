const Encore = require('@symfony/webpack-encore')
const path = require('path')

Encore
    .setOutputPath('public/')
    .setPublicPath('/')
    .addEntry('javascript/script', './resources/javascript/main.js')
    .addStyleEntry('stylesheets/app', './resources/scss/app.scss')
    .enableSassLoader((options) => {}, {
        resolveUrlLoader: false
    })
    .enablePostCssLoader()
    .addAliases({
        '@': path.resolve(__dirname, 'resources/')
    })
    .enableSourceMaps(!Encore.isProduction())
    .enableBuildNotifications()
    .enableSingleRuntimeChunk()

module.exports = Encore.getWebpackConfig()
