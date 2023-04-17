const path = require('path');

module.exports = {
    mode: 'development',
    devtool: false,
    entry: "./public/assets/js/src/app.js",
    output: {
        path: path.resolve(__dirname, 'public/assets/js/dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }]
    },
    resolve: {
        alias: {
            'Ludr': path.resolve(__dirname, '../Ludr')
        }
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    }
}