'use strict';

var React = require('react');
var ModalWidget = require('./modal-widget');
var PromoActions = require('../actions/PromoActions');
var PromoStore = require('../stores/PromoStore');


var GoogleMapWidget = React.createClass({

  getInitialState: function() {
    return {
      promos: [],
      category: 0
    }
  },

  componentDidMount: function() {
    PromoStore.addChangeListener(this._onChangeHandler);

    axios
      .get('http://127.0.0.1:8000/api/promo/')
      .then(function(response) {
        // this.initialize(response.data);
        this.setState({
          promos: response.data
        });
      }.bind(this))
      .catch(function(data) {
        console.log(data);
      });
  },

  componentWillUnmount: function() {
    PromoStore.removeChangeListener(this._onChangeHandler);
  },

  render: function() {
    this.renderPromos(this.state.promos);
    return ( 
      <div>
        <div id="map-canvas"> </div>
      </div>
    );
  },

  renderPromos: function(data) {
    if(data.length){
      
      var mapOptions = {
        center: {
          lat: 32.5242224,
          lng: -117.0121445
        },
        zoom: 15,
        scrollwheel: false
      };

      var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

      for (var i in data) {
        if(!this.state.category || data[i].category == this.state.category){

          // 1 Espectacular
          // 2 Valla Fija
          // 3 Puentes
          // 4 Pantalla Elctronica
          var image = [
            '',
            'https://www.ipdomain.net/portal/images/Hosting/order_bar/linux_icon_small.png',
            'http://handheldempire.com/images/flags/italy_small.png',
            'http://www.yukiba.com/images/flags/brazil_small.png',
            'http://www2.psd100.com/ppp/2013/10/0501/woman-icon-1005020945.png'
            ];
          var position = new google.maps.LatLng(
            data[i].latitude,
            data[i].longitude
          );

          var marker = new google.maps.Marker({
            position: position,
            map: map,
            icon: image[data[i].category || 1],
            _data: data[i]
          });

          marker.setTitle(data[i].address);
          this.attachClickEvent(marker)

        }

      }

    }
  },

  attachClickEvent: function(marker){
    google.maps.event.addListener(marker, 'click', function(event) {
      PromoActions.openModal(marker._data);
    });
  },

  _onChangeHandler: function(){
    var category = PromoStore.getCategory();

    this.setState({ 
      category: category
    });
  },
});

module.exports = GoogleMapWidget;
