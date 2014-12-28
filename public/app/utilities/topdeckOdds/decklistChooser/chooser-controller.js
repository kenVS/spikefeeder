(function () {
    "use strict";

    angular.module('app.utilities.topdeckOdds.chooser', [
        'app.utilities.topdeckOdds.utils'
    ]).controller('ChooserCtrl', function ($scope, topdeckOddsUtils) {
        (function INIT() {
            var currentDeck;

            currentDeck = topdeckOddsUtils.getCurrentDeck();
            if (currentDeck !== null) {
                $scope.selectedDeck = currentDeck;
                $scope.currentDeck = currentDeck;
            }

            $scope.decks = topdeckOddsUtils.getDecks();
        }());

        $scope.selectDeck = function (deck) {
            $scope.selectedDeck = deck;
        };

        $scope.saveSelection = function () {
            topdeckOddsUtils.setCurrentDeck($scope.selectedDeck);
            $scope.currentDeck = topdeckOddsUtils.getCurrentDeck();
        };
    });
}());
