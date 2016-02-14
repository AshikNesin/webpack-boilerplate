module.exports = {
    devtool:'eval-source-map',
    entry: {
        main: ['./app/js/msg.js', './app/js/main.js']
    },
    output: {
        filename: './dist/js/[name].bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel', // 'babel-loader' is also a legal name to reference
            query: {
                presets: ['react', 'es2015']
            }
        }]
    }

};
