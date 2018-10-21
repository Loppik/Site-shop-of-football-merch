var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "./bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: __dirname + "/node_modules",
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                exclude: __dirname + "/node_modules",
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        },
        contentBase: "./dist"
    },
    entry: ["@babel/polyfill", "./src/index.js"]
};

