module.exports = {
    entry: './front-end/js/index.js',
    output: {
        path: __dirname + '/public/',
        filename: 'loop-bin.js',
        libraryTarget: 'var',
        library: 'LoopBin'
    }
};
