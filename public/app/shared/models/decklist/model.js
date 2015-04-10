(function() {
  'use strict';

  /**
   * This model will track the contents of a game zone.
   */
  angular.module('shared.models.decklist', [
    'shared.models.cardSet'
  ]).factory('Decklist', function(CardSet) {

    function Decklist(argName, argCardSets) {
      this.name = argName || 'UNNAMED DECK';
      this.cardSets = argCardSets || {};
    }

    Decklist.prototype.addCard = function(argCard, argCount) {
      var amountToAdd = argCount || 1;

      if (this.cardSets[argCard.name] !== undefined) {
        this.cardSets[argCard.name].count += 1;
      } else {
        this.cardSets[argCard.name] = new CardSet(argCard, amountToAdd);
      }
    };

    Decklist.prototype.removeCard = function(argCard, argCount) {
      var amountToSubtract = argCount || 1;

      if (this.cardSets[argCard.name] !== undefined) {
        // Delete the hash object if the count would go below zero
        if (this.cardSets[argCard.name].count <= amountToSubtract) {
          delete this.cardSets[argCard.name];
        } else {
          this.cardSets[argCard.name].count -= amountToSubtract;
        }
      }
    };

    return Decklist;
  });
}());
