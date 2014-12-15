(function () {
    "use strict";

    angular.module('app.utilities.topdeckOdds.decklistEditor', [
        'app.utilities.topdeckOdds.utils'
    ]).controller('EditorCtrl', function ($scope, topdeckOddsUtils) {
        (function INIT() {
            var currentDeck;

            currentDeck = topdeckOddsUtils.getCurrentDeck();
            if (currentDeck !== null) {
                $scope.deck = currentDeck;
            }
        }());

        $scope.addCard = function (cardName) {
            var isInDeck = $scope.deck.cards[cardName];

            if (isInDeck) {
                $scope.deck[cardName].count = $scope.deck[cardName].count + 1;
            } else {
                $scope.deck.cards[cardName] = {
                    name:  cardName,
                    count: 1,
                    tags:  []
                };
            }

            $scope.cardToAdd = "";
        };

        $scope.incrementCard = function (card) {
            $scope.deck.cards[card.name].count = $scope.deck.cards[card.name].count + 1;
        };

        $scope.decrementCard = function (card) {
            if ($scope.deck.cards[card.name].count <= 1) {
                delete $scope.deck.cards[card.name];
            } else {
                $scope.deck.cards[card.name].count = $scope.deck.cards[card.name].count - 1;
            }
        };

        $scope.removeCard = function (card) {
            delete $scope.decks.cards[card.name];
        };

        $scope.saveDeck = function () {
            topdeckOddsUtils.setCurrentDeck($scope.deck);
        };
    });
}());
