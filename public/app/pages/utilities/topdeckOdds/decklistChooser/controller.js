angular.module('app.utilities.topdeckOdds.chooser.controller', [
  /* Dependencies */
]).controller('ChooserCtrl', function($scope) {
  'use strict';

  var viewModel = this;

  if ($scope.TopdeckOdds.selectedDeck !== undefined) {
    viewModel.selectedDeck = $scope.TopdeckOdds.selectedDeck;
  }
});
