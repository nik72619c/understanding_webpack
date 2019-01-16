const webpack=require('webpack');
module.exports={
    entry:'./app.js',
    devtool: 'inline-source-map',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    devServer: {
      // Don't refresh if hot loading fails. Good while
      // implementing the client interface.
      hot: true,
  
      // If you want to refresh on errors too, set
      // hot: true,
    },
    module:{

        rules: [
            {
              test: /\.css$/,
              use: [
                { loader: 'style-loader' },
                {
                  loader: 'css-loader',
                 
                },
               
              ]
            },
            {
                      test: /\.(png|svg|jpg|gif)$/,
                       use: [
                         'file-loader'
                       ]
                    }
          ]
    },

    plugins:[
      new webpack.HotModuleReplacementPlugin(),
    ]
   
}