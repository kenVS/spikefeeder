(function() {
  'use strict';

  /**
   * This model will hold all the data for a single Magic card that is common across all printings.
   */
  angular.module('shared.models.card.oracle', [
    /* Dependencies */
  ]).factory('Oracle', function(lodash) {
    var _ = lodash;

    function Oracle(argName) {
      /* Name fields */
      this.name = _(argName).isString() ? argName : 'UNNAMED_CARD';
      this.names = undefined;
      /* Mana fields */
      this.manaCost = undefined;
      this.cmc = undefined;
      this.colors = undefined;
      /* Layout fields */
      this.layout = undefined;
      /* Type fields */
      this.type = undefined;
      this.supertypes = undefined;
      this.types = undefined;
      this.subtypes = undefined;
      /* Ability text */
      this.oracleText = undefined;
      /* Creature stats fields */
      this.power = undefined;
      this.toughness = undefined;
      /* Planeswalker stats fields */
      this.loyalty = undefined;
      /* Vanguard fields */
      this.hand = undefined;
      this.life = undefined;
    }

    Oracle.prototype = _.create(Object.prototype, {
      'constructor': Oracle
    });

    return Oracle;
  });
}());
