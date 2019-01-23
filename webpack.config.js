const webpack=require('webpack');
module.exports={
    entry:{
      index: './app.js',
      another: './assets/js/dummy.js',
      file1: './assets/js/file1.js'
    },
    devtool: 'inline-source-map',
    output: {
        path: __dirname,
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
    },
    optimization: {
           splitChunks: {
             chunks: 'all'
           }
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
   
};