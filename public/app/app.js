(function() {
  'use strict';

  // Declare app level module which depends on filters, and services
  angular.module('spikeFeeder', [
    'ui.router',
    'spikeFeeder.utilities.topdeckOdds.routes'
  ]).config(function($locationProvider, $stateProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('utilities', {
        url:         '/utilities',
        abstract:    true,
        templateUrl: '/app/pages/utilities/template.html'
      });

    $urlRouterProvider.otherwise('/utilities/topdeckOdds/simulator');
  });
}());