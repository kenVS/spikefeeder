'use strict';

angular.module('DrawingOdds.Editor', [
    'DrawingOdds.TabBar'
]).
controller('DrawingOddsEditorCtrl', ['$scope', 'oddsDeckService',
    function ($scope, oddsDeckService) {
        $scope.cardList = oddsDeckService.getCardList();
        $scope.cardListString = JSON.stringify($scope.cardList, null, 2);

        $scope.$watch("cardListString", function () {
            $scope.cardList = angular.fromJson($scope.cardListString);
            oddsDeckService.setCardList($scope.cardList);
            console.log("hit");
        });
    }
]);