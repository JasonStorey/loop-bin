module.exports = {
    entry: './front-end/js/index.js',
    output: {
        path: __dirname + '/public/',
        filename: 'loop-bin.js',
        libraryTarget: 'var',
        library: 'LoopBin'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
    }
};
