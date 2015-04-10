(function() {
  'use strict';

  angular.module('shared.utilities.logger', [
    'shared.services.utilities.libraries'
  ]).service('LOGGER', LOGGER)
  ;

  function LOGGER(console) {
    this.debug = function(debugMessage) {
      console.log('[DEBUG] ' + debugMessage);
    };

    this.info = function(infoMessage) {
      console.info('[INFO] ' + infoMessage);
    };

    this.warn = function(warnMessage) {
      console.warn('[WARN] ' + warnMessage);
    };

    this.error = function(errorMessage) {
      console.error('[ERROR] ' + errorMessage);
    };
  }
}());
