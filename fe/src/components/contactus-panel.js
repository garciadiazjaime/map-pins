'use strict';

var React = require('react');
var rb = require('react-bootstrap');
var Row = rb.Row;
var Col = rb.Col;
var ContactForm = require('./contact-form')


var ContactusPanel = React.createClass({

    render: function() {
        return (
            <section id="contact">
                <div id="map">
                    <a href="https://www.google.com.mx/maps/place/M%C3%A9rida+258,+Centro,+22020+Tijuana,+B.C./@32.504227,-117.006552,3a,75y,175.81h,87.89t/data=!3m7!1e1!3m5!1sa65UfHiwBKuU5IeeJkz-5w!2e0!6s%2F%2Fgeo0.ggpht.com%2Fcbk%3Fcb_client%3Dmaps_sv.tactile%26output%3Dthumbnail%26thumb%3D2%26panoid%3Da65UfHiwBKuU5IeeJkz-5w%26w%3D374%26h%3D75%26yaw%3D224%26pitch%3D0%26thumbfov%3D120%26ll%3D32.504227,-117.006552!7i13312!8i6656!4m15!1m12!4m11!1m6!1m2!1s0x80d9481f28d30061:0xdc08723940ef1927!2sM%C3%A9rida+254,+Centro,+22020+Tijuana,+B.C.!2m2!1d-117.0062013!2d32.5042379!1m3!2m2!1d-117.0065037!2d32.5041818!3m1!1s0x80d9481f31d5e301:0xdc44b3248c9874f2!6m1!1e1" target="_blank" title="Ver en google maps">
                        <span>Ver en google maps</span>
                    </a>
                </div>
                <div className="twoColumns">
                    <Row>
                        <Col xs={12} sm={6} className="pinkBackground">
                            <div className="twoColumns-wraper">
                                <h2>Información de contacto</h2>
                                <address>
                                    <h3>Dirección</h3>
                                    <p>Avenida Mérida #254 Col. Hipódromo<br />Tijuana B.C., México</p>

                                    <h3>Tels:</h3>
                                    <a href="tel:6646341158" title="Llámanos">(664) 634 11 58</a> / <a href="tel:6646340889" title="Llámanos">(664) 634 08 89</a>

                                    <h3 className="hidden">Correo electrónico</h3>    
                                    <a href="mailto:info@giosalon.com" title="Escríbenos" className="email">info@giosalon.com</a>
                                </address>
                                <ul className="social">
                                    <li><a href="https://www.facebook.com/gioelsalon?fref=ts" title="Síguenos en facebook" target="_blank"><span>Facebook</span></a></li>
                                </ul>    
                            </div>
                        </Col>
                        <Col xs={12} sm={6}>
                            <div className="twoColumns-wraper">
                                <h2>Contacto / Citas</h2>
                                <span className="sidenote">*Información requerida</span>
                                <ContactForm />
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        );
    }

});

module.exports = ContactusPanel;
