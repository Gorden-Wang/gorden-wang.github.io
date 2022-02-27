const {resolve} = require('path');
console.log(resolve(__dirname , './assets/css/global.css'))
module.exports = {
    // entry: {
    //     globalcss: resolve(__dirname , './assets/globalcss.js'),
    // },
    // output: {
    //     path: __dirname + '/dist',
    // },
    module: {
        rules: [
          {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'style-loader',
              },
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                }
              },
              {
                loader: 'postcss-loader'
              }
            ]
          }
        ]
      }
}