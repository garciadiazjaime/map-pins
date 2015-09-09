'use strict';

var React = require('react');


var MainbannerPanel = React.createClass({

    render: function() {

        return (
            <section>
                <div className="container">
                    <p id="mainPhrase"><span>Own</span> the <span>look</span></p>
                </div>
            </section>
        );
    }
});

module.exports = MainbannerPanel;
