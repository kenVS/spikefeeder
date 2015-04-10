(function() {
  'use strict';

  /**
   * This model will hold all the data for a single Magic card that is common across all printings.
   */
  angular.module('shared.models.card.oracle', [
    'shared.services.utilities.libraries'
  ]).factory('Oracle', function(lodash) {
    var _ = lodash;

    function Oracle(argName, argTags) {
      this.name = argName;
      this.names = undefined;

      this.manaCost = undefined;
      this.cmc = undefined;
      this.colors = undefined;

      this.type = undefined;
      this.supertypes = undefined;
      this.types = undefined;
      this.subtypes = undefined;

      this.oracleText = undefined;

      this.tags = argTags ? argTags : [];
    }

    Oracle.prototype.addTags = function(argTags) {
      var currentTags;
      var newTags;

      currentTags = this.tags;
      newTags = [];

      argTags.forEach(function(tag) {
        if (_.includes(currentTags, tag) === false) {
          newTags.push(tag);
        }
      });

      this.tags.push(newTags);
    };

    Oracle.prototype.removeTags = function(argTags) {
      var tagIndex,
          updatedTags;

      updatedTags = this.tags;

      argTags.forEach(function(tag) {
        tagIndex = updatedTags.indexOf(tag);
        if (tagIndex > -1) {
          updatedTags.splice(tagIndex, 1);
        }
      });

      this.tags = updatedTags;
    };

    //Oracle.prototype.toJSON = function() {
    //
    //};

    return Oracle;
  });
}());
