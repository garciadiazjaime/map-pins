'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var MainbannerPanel = require('./mainbanner-panel');
var AutoScrollMixin = require('../mixins/autoscroll-mixin');
var GoogleMapWidget = require('../widgets/googlemap-widget');
var TabFiltersWidget = require('../widgets/tab-filters-widget');

var HomePanel = React.createClass({

    mixins : [ReactRouter.Navigation, AutoScrollMixin],
    
    handleClick: function(section, event){
        event.preventDefault();
        this.autoScrollTo(section);
    },

    render: function() {

        return (
            <div id="home">
                <MainbannerPanel />
                <GoogleMapWidget />
                <TabFiltersWidget />
            </div>
        );
    }
});

module.exports = HomePanel;
