(function() {
  'use strict';

  /**
   * This model will track the counts of a card.
   */
  angular.module('shared.models.cardSet', [
    'shared.models.card'
  ]).factory('CardSet', function(lodash, Card) {
    var _ = lodash;

    function CardSet(argCard, argCount) {
      _.assign(this, argCard);
      this._count = _(argCount).isFinite() ? argCount : 0;
    }

    CardSet.prototype = _.create(Card.prototype, {
      'constructor': CardSet
    });

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
