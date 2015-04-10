(function() {
  'use strict';

  angular.module('spikeFeeder.utilities.topdeckOdds.routes', [
    'app.utilities.topdeckOdds.controller',
    'app.utilities.topdeckOdds.chooser.controller',
    'app.utilities.topdeckOdds.oddsSimulator.controller'
  ]).config(UtilitiesRoutes);

  function UtilitiesRoutes($stateProvider) {
    $stateProvider
      .state('utilities.topdeckOdds', {
        url:         '/topdeckOdds',
        abstract:    true,
        templateUrl: '/app/pages/utilities/topdeckOdds/template.html',
        controller:  'TopdeckOddsCtrl'
      })
      .state('utilities.topdeckOdds.chooser', {
        url:          '/chooser',
        templateUrl:  '/app/pages/utilities/topdeckOdds/decklistChooser/template.html',
        controller:   'ChooserCtrl',
        controllerAs: 'chooser'
      })
      .state('utilities.topdeckOdds.simulator', {
        url:          '/simulator',
        templateUrl:  '/app/pages/utilities/topdeckOdds/oddsSimulator/template.html',
        controller:   'OddsSimulatorCtrl',
        controllerAs: 'simulator'
      });
  }
}());
