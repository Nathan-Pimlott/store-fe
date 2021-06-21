const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { HotModuleReplacementPlugin } = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
    entry: path.resolve(__dirname, "src/index.tsx"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.[contenthash].js",
        publicPath: "/",
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
                resolve: {
                    extensions: [".js", ".jsx"],
                },
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
            },
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    "css-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html"),
        }),
        new MiniCssExtractPlugin({
            filename: "styles.[contentHash].css",
        }),
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(dotenv.config().parsed),
        }),
        new NodePolyfillPlugin(),
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, "src"),
        hot: true,
        port: 8080,
        proxy: {
            "*": "http://[::1]:3000",
            secure: false,
            changeOrigin: true,
        },
    },
};
