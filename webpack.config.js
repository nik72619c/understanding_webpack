module.exports={
    entry:'./app.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
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
    target: 'async-node'
}