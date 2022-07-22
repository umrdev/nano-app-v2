const webpack = require('webpack')
const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode:'development',
    entry: path.resolve(__dirname, "src/index.js"),
    output: {
        filename: '[name].js',
        path : path.resolve(__dirname, "./static/frontend")
    },
    module: {
        rules: [
            {
                test : /\.(js)$/,
                use:[
                    {
                        loader : "babel-loader"
                    }
                ]
            },
            {
                test: /\.less$/,
                use:[
                    {
                      loader: "style-loader",
                    },
                    {
                      loader: "css-loader",
                    },
                    {
                      loader: "less-loader",
                      options: {
                          lessOptions: {
                              javascriptEnabled: true
                          }
                      },
                    },
              ]
            },
            {
                test: /\.(png|svg|jpe?g|gif|ico|ttf|woff2|eot)$/i,
                use: [
                    {
                        loader: "file-loader"
                    }
                ]
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }
        ]
    },

    plugins:[
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html"),
            filename: './index.html',
            favicon: './public/favicon.ico',
        })
    ],
    devServer:{
        historyApiFallback: true,
        port: 5000
    }
}