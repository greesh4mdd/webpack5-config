const MiniCssExtractPlugin = require("mini-css-extract-plugin")


let mode = "development"
let target = "web"

if(process.env.MODE_ENV === "production"){
    mode = "production"
    target = "browserslist"
}

module.exports = {
    mode: mode,
    target: target,

    module: {
        rules: [
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

    plugins: [new MiniCssExtractPlugin()],

    devtool: "source-map",

    devServer: {
        contentBase: "./dist",
        hot: true
    }
}