(function() {
  'use strict';

  angular.module('app.utilities.topdeckOdds.controller', [
    'app.utilities.topdeckOdds.viewModel'
  ]).controller('TopdeckOddsCtrl', TopdeckOddsCtrl);

  function TopdeckOddsCtrl($scope, TopdeckOddsVM) {
    $scope.TopdeckOdds = $scope.TopdeckOdds || new TopdeckOddsVM();
  }
}());