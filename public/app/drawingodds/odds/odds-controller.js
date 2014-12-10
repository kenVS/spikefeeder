'use strict';

angular.module('DrawingOdds.Odds', ['DrawingOdds.TabBar']).
// TODO - Inject math as a service instead of calling it globally
controller('DrawingOddsCtrl', ['$scope', 'oddsDeckService',
    function ($scope, oddsDeckService) {
        var totalCards, h, C, P, updateDeckProbabilities, initializeDeckModel;

        P = function (n, r) {
            var nFac, nrFac;

            nFac = math.factorial(math.round(n));
            nrFac = math.factorial(math.round(math.subtract(n, r)));

            return math.divide(nFac, nrFac);
        };

        C = function (n, r) {
            var perm, rFac;

            perm = P(n, r);
            rFac = math.factorial(math.round(r));

            return math.divide(perm, rFac);
        };

        h = function (x, N, n, k) {
            var x2, y2, z2;

            x2 = C(k, x);
            y2 = C(math.subtract(N, k), math.subtract(n, x));
            z2 = C(N, n);

            return math.divide(math.multiply(x2, y2), z2);
        };

        initializeDeckModel = function () {
            $scope.usedItemsList = {
                itemList: {
                    /**
                     * {
                     *   name: name of card
                     *   count: number of cards available
                     * },
                     */
                },
                totalItems: 0
            };

            $scope.toDrawList = {
                cardList: {
                    /** 
                     * name: name of card
                     * count: number of cards available
                     */
                },
                totalCards: 0,
                odds: [
                    /**
                     * name: name of item to draw
                     * count: number of items available
                     * probability: probably to draw item
                     */
                ]
            };

            angular.forEach($scope.cardList, function (value, key) {
                $scope.usedItemsList.itemList[key] = {
                    name: key,
                    count: 0
                };
                $scope.usedItemsList.totalItems = 0;

                $scope.toDrawList.cardList[key] = {
                    name: key,
                    count: value
                };
                $scope.toDrawList.totalCards += value;
            });
        };

        updateDeckProbabilities = function () {
            $scope.toDrawList.odds = [];
            angular.forEach($scope.toDrawList.cardList, function (card) {
                var chanceToNotDraw = h(0, $scope.toDrawList.totalCards, $scope.numberOfDraws, card.count);
                var chanceToDraw = math.subtract(1, chanceToNotDraw);

                chanceToDraw = math.multiply(chanceToDraw, 100);
                chanceToDraw = math.round(chanceToDraw, 1);

                $scope.toDrawList.odds.push({
                    name: card.name,
                    count: card.count,
                    probability: chanceToDraw
                });
            });
        };

        $scope.useCard = function (cardName) {
            // Update current card list
            $scope.toDrawList.cardList[cardName].count--;
            $scope.toDrawList.totalCards--;

            // Add card to used list
            $scope.usedItemsList.itemList[cardName].count++;
            $scope.usedItemsList.totalItems++;

            updateDeckProbabilities();
        };

        $scope.numberOfDraws = 1;
        $scope.cardList = oddsDeckService.getCardList();

        totalCards = 0;

        initializeDeckModel();
        updateDeckProbabilities();

        $scope.$watch("numberOfDraws", function () {
            updateDeckProbabilities();
        });
    }
]);