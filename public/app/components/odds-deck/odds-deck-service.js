(function () {
    "use strict";

    angular.module('drawingOddsServices', [])
        .factory('oddsDeckService', function () {
            // Create a service for manipulating your current deck:
            // http://stackoverflow.com/questions/16802857/angularjs-saving-data-between-routes
            var service = {};

            var cardList = {
                "Swamp":                     20,
                "Mutavault":                 4,
                "Urborg, Tomb of Yawgmoth":  1,
                "Desecration Demon":         4,
                "Gray Merchant of Asphodel": 4,
                "Nightveil Specter":         4,
                "Pack Rat":                  4,
                "Thoughtseize":              4,
                "Hero's Downfall":           4,
                "Devour Flesh":              4,
                "Bile Blight":               2,
                "Ultimate Price":            1,
                "Underworld Connections":    4
            };

            service.getCardList = function () {
                return cardList;
            };

            service.setCardList = function (newCardList) {
                cardList = newCardList;
            };

            return service;
        });
}());

