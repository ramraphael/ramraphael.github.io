const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: `production`,
  entry: `./src/index.js`,
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
          options: {
            presets: [`@babel/preset-env`, `@babel/preset-react`]
          }
        },
       },
       {
         test: /\.scss$/,
         use: [
          'style-loader',
          'css-loader',
          'sass-loader'
         ]
       }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html'),
    filename: 'index.html'
  })],
  resolve: {
    extensions: [`.js`, '.jsx']
  },
  devServer: {
    port: 9000,
    hot: true
  }
}