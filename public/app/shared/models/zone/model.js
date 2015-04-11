(function() {
  'use strict';

  /**
   * This model will track the contents of a game zone.
   */
  angular.module('shared.models.zone', [
    'shared.models.cardSet'
  ]).factory('Zone', function(lodash, CardSet) {
    var _ = lodash;

    function Zone(argName, argCardSets) {
      this.name = argName || 'UNNAMED ZONE';
      this.cardSets = argCardSets || {};
    }

    Zone.prototype.addCard = function(argCard, argCount) {
      var amountToAdd = argCount || 1;

      if (this.cardSets[argCard.name] !== undefined) {
        this.cardSets[argCard.name].count += 1;
      } else {
        this.cardSets[argCard.name] = new CardSet(argCard, amountToAdd);
      }
    };

    Zone.prototype.removeCard = function(argCard, argCount) {
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

    Zone.prototype.resetZone = function(argCardSets) {
      this.cardSets = argCardSets ? argCardSets : {};
    };

    Zone.prototype.isEmpty = function() {
      var self = this;

      return _(self.cardSets).isEmpty();
    };

    return Zone;
  });
}());
