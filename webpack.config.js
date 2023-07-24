const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js', // entry point that will pull the file pyramid
    output: {
        path: __dirname + '/dist', // code output
        filename: 'bundle.js', // final javascript output file name
    },
    module: {
        rules: [
          {
            test: /\.js$/, // rule for files with .js extension
            loader: 'babel-loader', // babel-loader will be applied to this rule
            exclude: /node_modules/ // doesn't apply to the node_modules directory
          },
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({  // plugin for html files
          filename: 'index.html',
          template: 'src/index.html'
        })
      ]
    
}