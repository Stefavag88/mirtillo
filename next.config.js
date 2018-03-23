const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const webpack = require('webpack');
require('dotenv').config({
  path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env'
});

module.exports = withCSS({
  cssModules: true,
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.(less|jpg|png|gif|svg)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: "css-loader!less-loader",
                })
        // use this for development - see here https://github.com/aoc/with-ant-design-custom-theme
        //use: ['babel-loader', 'raw-loader', 'less-loader']
      },
      {
        test: /\.(jpg|png|gif|svg)$/i, 
        loader: "file-loader"
      }
    );

    config.plugins.push(
        new ExtractTextPlugin(__dirname + '/static/styles.css')
    );

    config.plugins.push(
      new webpack.EnvironmentPlugin(process.env)
    )

    return config
  }
})