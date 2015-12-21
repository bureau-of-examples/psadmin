"use strict";

var React = require("react");

var Home = React.createClass({
    render: function () {
        return (
            <div className="jumbotron">
                <div className="header">
                    <h1>Pluralsight Administration</h1>

                    <p>React, React Router and Flux for ultra-responsive web apps.</p>
                </div>
            </div>
        );
    }
});

module.exports = Home;