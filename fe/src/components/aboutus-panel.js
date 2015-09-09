'use strict';

var React = require('react');
var rb = require('react-bootstrap');
var Row = rb.Row;
var Col = rb.Col;
var ResizeElementMixin = require('../mixins/resize-element-mixin.js');

var AboutusPanel = React.createClass({

    mixins: [ ResizeElementMixin ],

    componentDidMount: function(){
        this.setHeightByID("aboutus", window.innerHeight);
        this.setHeightByClass("aboutus_va", window.innerHeight);
    },

    render: function() {

        return (
            <section id="aboutus">
                <span className="vertical_aligner aboutus_va"></span><div className="vertical_container">
                    <div className="container">
                        <Row>
                            <Col xs={12} sm={6}>
                                <h2>Exteriores<span>Tijuana</span></h2>
                                <p className="fancy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                <p>Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. vExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            </Col>
                        </Row> 
                    </div>  
                </div>
            </section>
        );
    }
});

module.exports = AboutusPanel;
