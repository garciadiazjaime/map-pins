'use strict';

var React = require('react');
var PromoActions = require('../actions/PromoActions');

var TabFiltersWidget = React.createClass({

    render: function() {

        return (
            <div>
            	<a className="btn" onClick={this.onClickHandler.bind(this, 1)}>ESPECTACULARES</a>
		        <a className="btn" onClick={this.onClickHandler.bind(this, 2)}>VALLA FIJA</a>
		        <a className="btn" onClick={this.onClickHandler.bind(this, 3)}>PUENTES</a>
		        <a className="btn" onClick={this.onClickHandler.bind(this, 4)}>PANTALLA ELECTRÓNICA</a>
		        <a className="btn" onClick={this.onClickHandler.bind(this, 0)}>TODOS</a>
		    </div>
        );
    },

    onClickHandler: function(type){
    	console.log(type);
    	PromoActions.setCategory(type);
    }
});

module.exports = TabFiltersWidget;