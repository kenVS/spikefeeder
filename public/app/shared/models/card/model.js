(function() {
  'use strict';

  /**
   * This model is a wrapper for non-oracle-text functionality.
   */
  angular.module('shared.models.card', [
    'shared.models.card.oracle'
  ]).factory('Card', function(lodash, Oracle) {
    var _ = lodash;

    function Card(argName, argTags) {
      Oracle.call(this, argName);

      this.tags = _(argTags).isArray ? argTags : [];
    }

    Card.prototype = _.create(Oracle.prototype, {
      'constructor': Card
    });

    Card.prototype.addTags = function(argTags) {
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

    Card.prototype.removeTags = function(argTags) {
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

    return Card;
  });
}());
