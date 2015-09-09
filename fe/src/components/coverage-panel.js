'use strict';

var React = require('react');
var rb = require('react-bootstrap');
var Row = rb.Row;
var Col = rb.Col;
var ResizeElementMixin = require('../mixins/resize-element-mixin.js');

var CoveragePanel = React.createClass({

    mixins: [ ResizeElementMixin ],

    componentDidMount: function(){
        this.setHeightByID("coverage", window.innerHeight);
        this.setHeightByClass("coverage_va", window.innerHeight);
    },

    render: function() {

        return (
            <section id="coverage">
                <div className="container">
                    <span className="vertical_aligner coverage_va"></span><div className="vertical_container coverage-map">
                        <Row>
                            <Col xs={8} xsOffset={4} sm={5} smOffset={7}>
                                <h2>Cobertura<br /><hr /></h2>
                                <p>Contamos con alianzas que nos permiten cubrir campañas en otras ciudades del país.</p>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>
        );
    }
});

module.exports = CoveragePanel;
