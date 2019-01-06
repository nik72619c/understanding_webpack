module.exports={
    entry:'./app.js',
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
            }
          ]
    },
   
}