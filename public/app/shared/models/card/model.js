(function() {
  'use strict';

  /**
   * This model will hold all the data for a single Magic card that is specific to a certain printing.
   *
   * (This should not need to be implemented until it becomes necessary to customize the display based on printings..)
   */
  angular.module('shared.models.card', [
    'shared.services.utilities.libraries',
    'shared.models.card.oracle'
  ]).factory('Card', function(lodash, Oracle) {
    var _ = lodash;

    function Card(argName, argTags) {
      var self = this;

      _.assign(self, new Oracle(argName, argTags));
    }

    return Card;
  });
}());
