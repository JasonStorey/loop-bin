var App = require('./app');

function init(config) {
    App.init(config.container);
}

const LoopBin = {
    init: init
};

module.exports = LoopBin;
