const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js', // ponto de entrada que vai puxar a piramide de arquivos
    output: {
        path: __dirname + '/dist', // onde vai sair o código
        filename: 'bundle.js', // nome do arquivo javascript final
    },
    module: {
        rules: [
          {
            test: /\.js$/, // se o arquivo terminar com .js
            loader: 'babel-loader', // será aplicado o babel-loader
            exclude: /node_modules/ // regra que não se aplica do node_modules
          },
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: 'src/index.html'
        })
      ]
    
}