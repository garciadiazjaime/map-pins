/*
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * TodoActions
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var PromoConstants = require('../constants/PromoConstants');

var TodoActions = {

  /**
   * @param {object} data
   */
  openModal: function(promo) {
    AppDispatcher.dispatch({
      actionType: PromoConstants.OPEN_MODAL,
      promo: promo
    });
  },

  setCategory: function(category){
    AppDispatcher.dispatch({
      actionType: PromoConstants.SHOW_CATEGORY,
      category: category
    });
  }

};

module.exports = TodoActions;
