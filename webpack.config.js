var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {

    // context: path.join(__dirname, "src/js/"),
    entry: './src/js/app.js',
    output: {
        publicPath: path.join(__dirname, 'public/'),
        path: path.join(__dirname, 'public/content/js/'),
        filename: path.join(__dirname, 'public/content/js/application.js')
    },

    resolve: {
        root: path.join(__dirname, 'src/js'),
        extensions: ['', '.js']
    },

    watch: debug,
    watchoptions: {
        aggregateTimeout: 100
    },

    devtool: debug ? "inline-sourcemap" : null,

    plugins: debug ? [] : [
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
    ],

    module: {
        loaders: [ //
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015'],
                    plugins: [
                        "add-module-exports"
                    ]
                }
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css?sourceMap", "sass?sourceMap"]
            }
        ]
    },

    devServer: {
        host: 'localhost',
        port: 8080
    }
};