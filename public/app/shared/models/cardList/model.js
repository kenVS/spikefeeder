(function() {
  'use strict';

  /**
   * This model will track the contents of a game zone.
   */
  angular.module('shared.models.cardList', [
    /* Dependencies */
  ]).factory('CardList', function(lodash) {
    var _ = lodash;

    function CardList(argCardSets) {
      var optionalArg = _(argCardSets).isObject() ? argCardSets : {};
      Object.call(this, optionalArg);
    }

    CardList.prototype = _.create(Object.prototype, {
      'constructor': CardList
    });

    return CardList;
  });
}());
