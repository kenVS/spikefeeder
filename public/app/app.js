(function () {
    "use strict";

    // Declare app level module which depends on filters, and services
    angular.module('spikeFeeder',
        [
            'ui.router',
            'app.utilities.topdeckOdds.chooser',
            'app.utilities.topdeckOdds.decklistEditor',
            'app.utilities.topdeckOdds.odds'
        ])
        .config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
            $locationProvider.html5Mode(true);

            $stateProvider
                .state('utilities', {
                    url:         "/utilities",
                    abstract:    true,
                    templateUrl: "/app/utilities/utilities.html"
                })
                .state('utilities.topdeckOdds', {
                    url:         "/topdeckOdds",
                    abstract:    true,
                    templateUrl: "/app/utilities/topdeckOdds/topdeckOdds.html"
                })
                .state('utilities.topdeckOdds.chooser', {
                    url:         "/chooser",
                    templateUrl: "/app/utilities/topdeckOdds/decklistChooser/chooser.html",
                    controller:  "ChooserCtrl"
                })
                .state('utilities.topdeckOdds.editor', {
                    url:         "/editor",
                    templateUrl: "/app/utilities/topdeckOdds/decklistEditor/editor.html",
                    controller:  "EditorCtrl"
                })
                .state('utilities.topdeckOdds.odds', {
                    url:         "/odds",
                    templateUrl: "/app/utilities/topdeckOdds/odds/odds.html",
                    controller:  "OddsCtrl"
                })
            ;

            $urlRouterProvider.otherwise("/utilities/topdeckOdds/odds");
        });
}());