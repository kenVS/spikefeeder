(function () {
    "use strict";

    angular.module('app.utilities.topdeckOdds.odds', [
        'models.topdeckOdds.card',
        'models.topdeckOdds.deck',
        'app.utilities.topdeckOdds.utils'
    ]).controller('OddsCtrl', function ($scope, Deck, topdeckOddsUtils) {
        // TODO - Inject math and jStat as services instead of calling them globally.

        var loadedDeck,     // The deck we're getting probabilities for
            currentDeck,    // The deck currently selected in the deck chooser
            PLACEHOLDER;

        function updateDeckProbabilities() {
            $scope.oddsArray = [];
            angular.forEach($scope.drawPile.cards, function (card) {
                var numberOfSuccesses,
                    populationSize,
                    successRate,
                    numberOfDraws,
                    chanceToNotDraw,
                    chanceToDraw;

                numberOfSuccesses = 0;
                populationSize = $scope.drawPile.getCardCount();
                successRate = $scope.numberOfDraws;
                numberOfDraws = card.getCount();
                chanceToNotDraw = jStat.hypgeom.pdf(numberOfSuccesses, populationSize, successRate, numberOfDraws);

                chanceToDraw = math.subtract(1, chanceToNotDraw);   // Inverting chance to not draw
                chanceToDraw = math.multiply(chanceToDraw, 100);    // Convert chance to percentage
                chanceToDraw = math.round(chanceToDraw, 1);         // Round to nearest tenth of a percent

                $scope.oddsArray.push({
                    name:        card.name,
                    count:       card.count,
                    probability: chanceToDraw
                });
            });
        }

        (function INIT() {
            // TODO - Assign loaded deck so that it doesn't reinitialize everything each page hit.
            if (!loadedDeck) {
                $scope.numberOfDraws = 1;

                $scope.usedPile = new Deck("Used Cards");
                $scope.drawPile = angular.copy(topdeckOddsUtils.getCurrentDeck());
                $scope.oddsArray = [];

                updateDeckProbabilities();
            }
        }());

        $scope.setNumberOfDraws = function (count) {
            $scope.numberOfDraws = count;
            updateDeckProbabilities();
        };

        $scope.useCard = function (cardName) {
            var singleCard = angular.copy($scope.drawPile.getCardByName(cardName));
            singleCard.setCount(1);

            $scope.usedPile.addCard(singleCard);
            $scope.drawPile.removeCard(singleCard);

            updateDeckProbabilities();
        };

        $scope.resetDeck = function () {
            // TODO - Add logic to reset to loaded deck
        };
    });
}());

