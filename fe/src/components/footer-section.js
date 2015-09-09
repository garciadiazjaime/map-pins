'use strict';

var React = require('react');
var rb = require('react-bootstrap');
var Row = rb.Row;
var Col = rb.Col;


var FooterSection = React.createClass({

  render: function() {
    return (
        <div className="container">
            <Row>
                <Col xs={12} sm={5}>
                    <p>Todos los derechos reservados Mapa ®</p>
                </Col>
                <Col xs={12} sm={2}>
                </Col>
            </Row>    
        </div>
    );
  }
});

module.exports = FooterSection;