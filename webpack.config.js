const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        path: path.join(__dirname,'/bundle'),
        filename: 'bundle.js'
    },
    devServer:{
        port: 8001
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: '/node_modules/',
                loader: 'babel-loader',
                options:{
                    presets: ['es2015', 'react','stage-2']
                }
            },
            {
                test: /\.(scss|css)$/,
                exclude: '/node_modules/',
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}