'use strict'

const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack/dev.config')

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: { colors: true },
  watchOptions: {
    poll: 1000,
    aggregateTimeout: 1000
  }
}).listen(3000, (err) => {
  if (err) {
    return console.log(err)
  }

  console.log('Listening on http://localhost:3000')
})
