'use strict';
const webpack = require('webpack');
const path = require('path');
const WebpackDevServer = require('webpack-dev-server');
const argv = require('yargs').argv;

const port = argv.port || 4568;

let webpackConfig = require('../webpack.config.js');
webpackConfig.entry['webpack_hm_client'] = `webpack-dev-server/client?http://localhost:${port}/`;
const compiler = webpack(webpackConfig);

var server = new WebpackDevServer(compiler, {
    contentBase: [path.join(__dirname, '../node_modules/coveo-search-ui-extensions/bin'), path.join(__dirname, '../bin/')],
    publicPath: '/zendesk/commonjs',
    contentBasePublicPath: ['/searchuiextensions', '/zendesk'],
    compress: true
});

server.listen(port, 'localhost', function() {});
