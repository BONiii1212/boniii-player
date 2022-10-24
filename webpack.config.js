const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, "examples/src/index.js"),
    output: {
        path: path.join(__dirname, "examples/dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                loader: 'babel-loader'
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                    limit: 1024
                    }
                }]
            }
        ],
    },
    plugins: [new HtmlWebpackPlugin({
        filename: 'index.html',   // 指定生成的文件名，默认就是 index.html
        template: './examples/src/index.html' 
    })],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
        port: 3001
    }
};
