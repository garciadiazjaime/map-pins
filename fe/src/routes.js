var React = require('react');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var DefaultRoute = ReactRouter.DefaultRoute;

var Layout = require('./components/layout');
var HomePanel = require('./components/home-panel');

var routes = (
	<Route path="/" handler={Layout}>
		<DefaultRoute name="home" handler={HomePanel}/>
		<Route name="aboutus" path="nosotros" handler={HomePanel} />
		<Route name="services" path="servicios" handler={HomePanel} />
		<Route name="coverage" path="cobertura" handler={HomePanel} />
		<Route name="contact" path="contacto" handler={HomePanel} />
	</Route>
);

module.exports = routes;