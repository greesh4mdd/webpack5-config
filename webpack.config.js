let mode = "development"

if(process.env.MODE_ENV === "production"){
    mode = "production"
}

module.exports = {
    mode: mode,

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader" 
                }
            }
        ]
    },

    devtool: "source-map",

    devServer: {
        contentBase: "./dist"
    }
}