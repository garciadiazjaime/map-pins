'use strict';

var React = require('react');
var rb = require('react-bootstrap');
var Modal = rb.Modal;
var Button = rb.Button;
var Popover = rb.Popover;
var Tooltip = rb.Tooltip;
var OverlayTrigger = rb.OverlayTrigger;

var PromoStore = require('../stores/PromoStore');


var ModalWidget = React.createClass({

  getInitialState: function(){
    return { 
      data: {}
    };
  },

  componentDidMount: function() {
    PromoStore.addChangeListener(this._onChangeHandler);
  },

  componentWillUnmount: function() {
    PromoStore.removeChangeListener(this._onChangeHandler);
  },

  render: function() {
    var popover = <Popover title='popover'>very popover. such engagement</Popover>;
    var tooltip = <Tooltip>wow.</Tooltip>;
    var promo = this.state.data.promo || {};

    return (
      <div>
        <Modal show={this.state.data.isModalOpen} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            id: {promo.id} <br />
            status: {promo.status} <br />
            address: {promo.address} <br />
            area: {promo.area} <br />
            light: {promo.light} <br />
            img front: {promo.image_front} <br />
            img back: {promo.image_back}
          </Modal.Body>
        </Modal>
      </div>
    );
  },

  _onChangeHandler: function(){
    var state = PromoStore.getState();
    
    console.log('state', state);

    this.setState({ 
      data: state
    });
  },

  close: function(){
    var state = this.state;
    state.data.isModalOpen = false;
    this.setState(state);
  },

});

module.exports = ModalWidget;