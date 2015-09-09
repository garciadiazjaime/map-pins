'use strict';

var React = require('react');
var rb = require('react-bootstrap');
var Nav = rb.Nav;
var Navbar = rb.Navbar;
var NavItem = rb.NavItem;
var CollapsibleNav = rb.CollapsibleNav;
var AutoScrollMixin = require('../mixins/autoscroll-mixin');
var FacebookButtonWidget = require('../widgets/facebook-button-widget');


var HeaderSection = React.createClass({

    mixins : [AutoScrollMixin],

    componentDidMount: function(){
        document.getElementsByClassName('navbar-toggle')[0].addEventListener("click", this.onClickNavbar);
    },

    componentWillUnmount: function(){
        document.getElementsByClassName('navbar-toggle')[0].removeEventListener('click', this.onClickNavbar, false);
    },

    render: function() {
        return (
            <Navbar brand='Exteriores Tijuana' toggleNavKey={0} className="navbar-static-top" onClick={this.handleParentClick.bind(this, 'home')}>
                Exteriores Tijuana
                <CollapsibleNav eventKey={0} id="menu-navbar">
                  <Nav navbar>
                    <NavItem eventKey={1} href='/inicio' onClick={this.handleClick.bind(this, 'map-canvas')}>Mapa</NavItem>
                    <NavItem eventKey={2} href='/nosotros' onClick={this.handleClick.bind(this, 'aboutus')}>Nosotros</NavItem>
                    <NavItem eventKey={3} href='/servicios' onClick={this.handleClick.bind(this, 'services')}>Servicios</NavItem>
                    <NavItem eventKey={4} href='/cobertura' onClick={this.handleClick.bind(this, 'coverage')}>Cobertura</NavItem>
                    <NavItem eventKey={9} href='/contacto' onClick={this.handleClick.bind(this, 'contact')}>Contacto</NavItem>
                  </Nav>
                </CollapsibleNav>
                <ul className="social">
                    <li><FacebookButtonWidget /></li>
                </ul>
            </Navbar>
        );
    },

    handleParentClick: function(section, event){
        if(!this.flag.navbarClicked && !this.flag.childClicked){
            this.autoScrollTo(section);
        }
        
        this.flag = initFlags();
    },

    handleClick: function(section, event){
        event.preventDefault();
        this.flag.childClicked = true

        // fix to close bootstrap menu on mobile
        if(screen.width < 768){
            document.getElementsByClassName('navbar-toggle')[0].click();
            event.stopPropagation();
        }

        this.autoScrollTo(section);
    },

    onClickNavbar: function(event){
        this.flag.navbarClicked = true
    },

    flag: initFlags()
});

function initFlags(){
    return {
        navbarClicked: false,
        childClicked: false
    }
};

module.exports = HeaderSection;
