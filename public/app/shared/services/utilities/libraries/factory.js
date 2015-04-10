(function() {
  'use strict';

  angular.module('shared.services.utilities.libraries', [
    /* Dependencies */
  ]).factory('console', console)
    .factory('jStat', jStat)
    .factory('math', math)
    .factory('lodash', lodash)
  ;

  function console($window) {
    return $window.console;
  }

  function jStat($window) {
    return $window.jStat;
  }

  function math($window) {
    return $window.math;
  }

  function lodash($window) {
    return $window._;
  }
}());
