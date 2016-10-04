var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var DashboardPlugin = require('webpack-dashboard/plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

    // context: path.join(__dirname, "src/js/", 'app.js'),
    entry: [
        path.join(__dirname, "src/js/index.js"),
        path.join(__dirname, "src/scss/app.scss")
    ],
    output: {
        publicPath: '/',
        path: path.join(__dirname, 'public/content/js/'),
        filename: 'app.js'
    },

    resolve: {
        root: path.join(__dirname, 'src/js'),
        extensions: ['', '.js']
    },

    watch: false, // debug,
    watchoptions: {
        aggregateTimeout: 100
    },

    devtool: debug ? "inline-sourcemap" : null,


    module: {
        loaders: [ //
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-0'],
                    plugins: [
                        "add-module-exports"
                    ]
                }
            },
            {
                test: /\.scss$/,
                // include: 'src/scss/app.scss',
                loaders: ExtractTextPlugin.extract("css?sourceMap!esolve-url!sass?sourceMap")
            },
            {
                test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
                include: /\/node_modules\//,
                loader: 'file?name=[1][name].[ext]&regExp=node_modules/(*)'
            },
            {
                test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
                exclude: /\/node_modules\//,
                loader: 'file?name=[path][name].[ext]'
            }
        ]
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, "./src/scss")]
    },


    plugins: debug ? [
        new ExtractTextPlugin("[name].css")
    ] : [
        new ExtractTextPlugin("[name].css"),
        new DashboardPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            sourcemap: false,
            compress: {
                warnings: false,
                drop_console: true,
                unsave: true
            }
        }),
    ]
};