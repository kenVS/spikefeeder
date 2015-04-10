(function() {
  'use strict';

  /**
   * This model will track the counts of a card.
   */
  angular.module('shared.models.cardSet', [
    'shared.models.card'
  ]).factory('CardSet', function(Card) {

    function CardSet(argCard, argCount) {
      this.card = new Card(argCard.name, argCard.tags);
      this._count = argCount || 0;
    }

    Object.defineProperty(CardSet.prototype, 'count', {
      get: function() {
        return this._count;
      },
      set: function(argCount) {
        // Never let the count go negative
        this._count = Math.max(0, Math.floor(argCount));
      }
    });

    return CardSet;
  });
}());
