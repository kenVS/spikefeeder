(function() {
  'use strict';

  angular.module('app.utilities.topdeckOdds.viewModel', [
    'shared.models.zone',
    'app.shared.services.decklists'
  ]).factory('TopdeckOddsVM', TopdeckOddsVMFactory);

  function TopdeckOddsVMFactory(lodash, Zone, decklistService) {
    var _ = lodash;
    var that;

    function TopdeckOddsVM() {
      that = this;

      that.numberOfDraws = 1;
      that.library = new Zone('Library');
      that.usedPile = new Zone('Used Pile');

      decklistService.getAllDecks().then(function(arrayOfDecklists) {
        that.availableDecks = arrayOfDecklists;
      });
    }

    TopdeckOddsVM.prototype.selectDeck = function(argDeck) {
      that.selectedDeck = argDeck;

      if (that.workingDeck === undefined) {
        that.switchWorkingDeck(argDeck);
      }
    };

    TopdeckOddsVM.prototype.switchWorkingDeck = function(argDeck) {
      that.workingDeck = argDeck;

      that.usedPile.resetZone();
      that.library.resetZone(_(that.workingDeck.cardSets).clone());
      //that.library.resetZone(_.clone(that.workingDeck.cardSets));
    };

    return TopdeckOddsVM;
  }
}());
