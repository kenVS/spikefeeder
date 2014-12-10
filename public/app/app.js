'use strict';

// Declare app level module which depends on filters, and services
angular.module('mtgUtilities', [
    'ngRoute',
    'drawingOddsServices',
    'DrawingOdds.Odds',
    'DrawingOdds.Editor'
]).
config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider.when('/cardDrawingOdds/odds', {
            templateUrl: '/app/drawingodds/odds/odds.html',
            controller: 'DrawingOddsCtrl'
        });

        $routeProvider.when('/cardDrawingOdds/editor', {
            templateUrl: '/app/drawingodds/decklisteditor/editor.html',
            controller: 'DrawingOddsEditorCtrl'
        });

        $routeProvider.otherwise({
            redirectTo: '/cardDrawingOdds/odds'
        });
    }
]);