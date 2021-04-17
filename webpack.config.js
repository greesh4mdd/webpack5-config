const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")


let mode = "development"
let target = "web"

if(process.env.MODE_ENV === "production"){
    mode = "production"
    target = "browserslist"
}

module.exports = {
    mode: mode,
    target: target,

    output: {
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "img/[hash][ext][query]"
    },

    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                type: "asset"
            },
            {
                test: /\.(s[ac]|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    "css-loader", 
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader" 
                }
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],

    devtool: "source-map",

    devServer: {
        contentBase: "./dist",
        hot: true
    }
}