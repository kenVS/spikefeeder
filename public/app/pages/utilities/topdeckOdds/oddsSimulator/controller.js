(function() {
  'use strict';

  angular.module('app.utilities.topdeckOdds.oddsSimulator.controller', [
    'app.shared.services.cardSets.stats'
  ]).controller('OddsSimulatorCtrl', OddsSimulatorCtrl);

  function OddsSimulatorCtrl($scope, cardSetsStatsService) {
    var viewModel = this;
    var topdeckOdds = $scope.TopdeckOdds;

    viewModel.updateProbabilities = function() {
      return cardSetsStatsService.calculateDrawingOdds(topdeckOdds.library.cardSets, topdeckOdds.numberOfDraws)
        .then(function(probabilitiesArray) {
          viewModel.probabilities = probabilitiesArray;
        });
    };

    viewModel.useCard = function(argCardName) {
      var cardObject = topdeckOdds.library.cardSets[argCardName];
      topdeckOdds.usedPile.addCard(cardObject);
      topdeckOdds.library.removeCard(cardObject);
      viewModel.updateProbabilities();
    };

    viewModel.switchDeck = function() {
      topdeckOdds.switchWorkingDeck(topdeckOdds.selectedDeck);
      viewModel.updateProbabilities();
    };

    viewModel.setNumberOfDraws = function(argCount) {
      topdeckOdds.numberOfDraws = argCount;
      viewModel.updateProbabilities();
    };

    viewModel.updateProbabilities();
  }
}());
