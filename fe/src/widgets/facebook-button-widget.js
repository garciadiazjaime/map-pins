'use strict';

var React = require('react');


var FacebookButtonWidget = React.createClass({

    render: function() {

        return (
            <a href="http://facebook.com/mint.it.media" title="Síguenos en facebooks" target="_blank"><span>Facebook</span></a>
        );
    }
});

module.exports = FacebookButtonWidget;
