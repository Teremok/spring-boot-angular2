const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const helpers = require('./helpers');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/app/main.tsx',
    //'styles': './src/initial.scss'
  },

  resolve: {
    modules: [helpers.root('src'), "node_modules"],
    descriptionFiles: ['package.json'],
    extensions: ['', '.js', '.ts', '.tsx', '.css', '.scss', '.json', '.html']
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [helpers.root('node_modules')]
      }
    ],

    loaders: [
      {
        test: /\.ts$/,
        loaders: ['ts-loader'],
        exclude: [/\.(spec|e2e)\.ts$/]
      },


      {test: /\.tsx?$/, loader: 'ts-loader'},


      {
        test: /\.html$/,
        loader: 'raw-loader',
        exclude: [helpers.root('src/index.html')]
      },

      {
        test: /\.css$/,
        loader: 'raw-loader!style-loader!css-loader!postcss-loader'
      },

      { test: /\.scss$/, loaders: ["style", "css", "sass"]},

      //{
      //  test: /initial\.scss$/,
      //  loader: ExtractTextPlugin.extract({
      //    fallbackLoader: 'style-loader',
      //    loader: 'css-loader!sass-loader'
      //  })
      //},

      //{
      //  test: /\.scss$/,
      //  loaders: ['raw-loader', 'sass-loader'],
      //  exclude: [helpers.root('node_modules')]
      //},

      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },

      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      },

      {
        test: /\.json$/,
        loader: 'json-loader'
      }

    ]
  },

  postcss: [autoprefixer],

  plugins: [
    new webpack.ContextReplacementPlugin(
        /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
        __dirname
    ),
    new ExtractTextPlugin({
      filename: 'css/[name].css',
      disable: false, allChunks: true
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new CopyWebpackPlugin([{
      from: 'src/assets',
      to: 'assets'
    }]),

    new HtmlWebpackPlugin({
      template: 'src/index.html',
      chunksSortMode: 'dependency'
    }),

    new webpack.ProvidePlugin({
      "window.moment": "moment",
      'Tether': 'tether',
      'window.Tether': 'tether'
    })
  ],

  node: {
    global: 'window',
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false
  }
};
