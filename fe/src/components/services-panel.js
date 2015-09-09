'use strict';

var React = require('react');
var rb = require('react-bootstrap');
var Row = rb.Row;
var Col = rb.Col;
var ResizeElementMixin = require('../mixins/resize-element-mixin.js');

var ServicesPanel = React.createClass({

      mixins: [ ResizeElementMixin ],

    componentDidMount: function(){
        this.setHeightByID("services", window.innerHeight);
        if(window.innerWidth>767){
            this.setHeightByClass("services_va",  window.innerHeight-60);
        } 
    },

    render: function() {

        return (
            <section id="services">
                <div className="container">
                    <h2>Servicios
                        <hr />
                    </h2>
                    <Row>
                        <Col xs={12} sm={4} className="service_item" id="espacios_publicitarios">
                            <span className="vertical_aligner services_va"></span><div className="vertical_container">
                                <span className="service_icons"></span>
                                <h3>Espacios Publicitarios Fijos</h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={4} className="service_item" id="valla_movil">
                            <span className="vertical_aligner services_va"></span><div className="vertical_container">
                                <span className="service_icons"></span> 
                                <h3>Valla Móvil</h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={4} className="service_item" id="impresion_instalacion">
                            <span className="vertical_aligner services_va"></span><div className="vertical_container">
                                <span className="service_icons"></span>
                                <h3>Impresión e Instalación</h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        );
    }
});

module.exports = ServicesPanel;
