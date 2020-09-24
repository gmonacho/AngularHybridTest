const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


/* Pour régler les warnings core-js */
const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: "./ng-app/main.ts",
    //entry: "./app/Application/ApplicationSchema.ts",
    devtool: 'inline-source-map',
    devServer: {
        contentBase: __dirname
    },
    output: {
        filename: 'webpack.bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader"
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        /* Pour régler les warnings core-js */
        new webpack.ContextReplacementPlugin(
            // if you have anymore problems tweet me at @gdi2290
            // The (\\|\/) piece accounts for path separators for Windows and MacOS
            /(.+)?angular(\\|\/)core(.+)?/,
            path.join(__dirname, 'src'), // location of your src
            {} // a map of your routes
        )
        //new CleanWebpackPlugin(),
        //new MiniCssExtractPlugin({
        //    filename: "css/[name].[chunkhash].css"
        //})
    ]
};