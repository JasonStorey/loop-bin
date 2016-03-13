var React = require('react'),
    ReactDOM = require('react-dom');

var App = React.createClass({
    render: function() {
        return <h1>Does something</h1>;
    }
});

module.exports = {
    init: container => {
        ReactDOM.render(<App/>, container);
    }
};
