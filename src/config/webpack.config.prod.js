const webpackConfig = require('./webpack.config.js');

webpackConfig.mode = 'production'
webpackConfig.output.filename = '[name].min.js'

module.exports = webpackConfig