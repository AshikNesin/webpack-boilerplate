var path = require('path');
var webpack = require('webpack');
module.exports = {
    devtool: 'eval-source-map',
    entry: {
        main: [
            './app/js/msg.js',
            './app/js/main.js',

        ],
        jade: [
            './app/index.jade'
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
            },

            // Jade
            {
                test: /\.jade$/,
                include: path.join(__dirname, 'app'),
                loader: "jade-html"
            }

            // Images
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192' // inlining images if they are equal or under 8kb.
            }


        ]
    }

    // resolve: {
    //     // you can now require('file') instead of require('file.coffee')
    //     extensions: ['', '.js', '.sass', '.coffee']
    // }

};
