var path = require('path');
var webpack = require('webpack');
module.exports = {
    devtool: 'eval-source-map',
    entry: {
        main: [
            './app/js/msg.js',
            './app/js/main.js'
        ]
    },
    output: {
        filename: 'assets/[name].bundle.js',
        path: path.join(__dirname, 'dist'),
        // publicPath:'/assets/'
    },

    module: {
        loaders: [{
                test: /\.jsx?$/,
                // exclude: /(node_modules|bower_components)/,
                include: path.join(__dirname, 'app'),
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['react', 'es2015']
                }
            },
            // // LESS
            // {
            //     test: /\.less$/,
            //     include: path.join(__dirname, 'app'),
            //     loader: 'style!css!less'
            // },

            // SASS
            {
                test: /\.scss$/,
                include: path.join(__dirname, 'app'),
                loader: 'style!css!sass'
            }

        ]
    }

};
