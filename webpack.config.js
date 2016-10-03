var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {

    // context: path.join(__dirname, "src/js/"),
    entry: './src/js/app.js',
    output: {
        // path: __dirname + 'public/content/js/',
        filename: './public/content/js/application.js'
    },

    watch: debug,
    watchoptions: {
        aggregateTimeout: 100
    },
    
    devtool: debug ? "inline-sourcemap" : null,
    
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
                presets: ['es2015']
            }
        },
        {
            test: /\.scss$/,
            loaders: ["style", "css?sourceMap", "sass?sourceMap"]
        }]
    },

    devServer: {
        host: 'localhost',
        port: 8080,
        contentBase: __dirname + '/public'
    }
};
