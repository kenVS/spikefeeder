(function() {
  'use strict';

  angular.module('app.shared.services.cardSets.stats', [
    'shared.services.utilities.libraries'
  ]).service('cardSetsStatsService', cardSetsStatsService);

  function cardSetsStatsService($q, math, jStat, lodash) {
    var _ = lodash;

    /**
     * Publicly Exposed Functionality
     */
    this.calculateDrawingOdds = function(argCardSets, argNumDraws) {
      var deferred = $q.defer();

      var numberOfSuccesses = 0;
      var populationSize = _(argCardSets).sum('count');
      var successRate = argNumDraws ? argNumDraws : 1;

      var oddsArray = [];
      var tagMap = {};
      _.forEach(argCardSets, function(cardSet) {
        var numberOfDraws = cardSet.count;
        var chanceToNotDraw = jStat.hypgeom.pdf(numberOfSuccesses, populationSize, successRate, numberOfDraws);

        var chanceToDraw = math.subtract(1, chanceToNotDraw); // Inverting chance to not draw
        chanceToDraw = math.multiply(chanceToDraw, 100);      // Convert chance to percentage
        chanceToDraw = math.round(chanceToDraw, 1);           // Round to nearest tenth of a percent

        oddsArray.push({
          name:        cardSet.card.name,
          count:       cardSet.count,
          probability: chanceToDraw,
          type:        'CARD'
        });

        // Prepare tag map for tag probability calculations
        cardSet.card.tags.forEach(function(tag) {
          if (tagMap[tag] === undefined) {
            tagMap[tag] = cardSet.count;
          } else {
            tagMap[tag] += cardSet.count;
          }
        });
      });

      _.forEach(tagMap, function(tagCount, tagName) {
        var numberOfDraws = tagCount;
        var chanceToNotDraw = jStat.hypgeom.pdf(numberOfSuccesses, populationSize, successRate, numberOfDraws);

        var chanceToDraw = math.subtract(1, chanceToNotDraw); // Inverting chance to not draw
        chanceToDraw = math.multiply(chanceToDraw, 100);      // Convert chance to percentage
        chanceToDraw = math.round(chanceToDraw, 1);           // Round to nearest tenth of a percent

        oddsArray.push({
          name:        tagName,
          count:       tagCount,
          probability: chanceToDraw,
          type:        'TAG'
        });
      });

      deferred.resolve(oddsArray);

      return deferred.promise;
    };
  }
}());
