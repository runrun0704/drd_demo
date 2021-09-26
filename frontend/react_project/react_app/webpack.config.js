const path = require('path');
const webpack = require("webpack");

module.exports = {
    mode: 'development',
    entry: './src/index.js',//buildするファイル
    output: {
        filename: 'bundle.js',//build後のファイル名
        path: path.join(__dirname, '../../../backend/django_project/django_app_app/static/js'),//buildファイルが作成される場所
        publicPath: 'http://localhost:3000/static/'
      },
    module: {
        rules: [
          {
            test: /\.js[x]?$/,  
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/preset-env',
                  '@babel/preset-react' 
                ],
                plugins: ['@babel/plugin-syntax-jsx'] 
              }
            }
          }
        ]
      },
      optimization: {
        minimize: true,
      },
      plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV' : JSON.stringify('production')
        })
      ],
      resolve: {
        extensions: ['.js', '.jsx', '.json']
      }
};