/*
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * PromoStore
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var PromoConstants = require('../constants/PromoConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _data = {
  isModalOpen: false,
  promo: {},
  category: 0
};

/**
 * Delete all the completed TODO items.
 */
function openModal(promo) {
  _data.isModalOpen = true;
  _data.promo = promo;
}

function setCagory(category) {
  _data.category = category;
}

var PromoStore = assign({}, EventEmitter.prototype, {

  getState: function() {
    return _data;
  },

  getCategory: function() {
    return _data.category;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  var text;

  switch(action.actionType) {
    case PromoConstants.OPEN_MODAL:
      openModal(action.promo);
      PromoStore.emitChange();
      break;

    case PromoConstants.SHOW_CATEGORY:
      setCagory(action.category);
      PromoStore.emitChange();
      break;

    default:
      // no op
  }
});

module.exports = PromoStore;
