(function () {
    "use strict";

    angular.module('models.topdeckOdds.card', [])
        .factory('Card', function () {
            function Card(argName, argCount, argTags) {
                if (typeof argName === "string") {
                    this.setName(argName);
                } else {
                    throw "'name' must be defined when instantiating a Card object";
                }

                if (argCount) {
                    this.setCount(argCount);
                } else {
                    this.setCount(0);
                }

                if (argTags) {
                    this.setTags(argTags);
                } else {
                    this.setTags([]);
                }
            }

            Card.prototype.getName = function () {
                return this.name;
            };

            Card.prototype.setName = function (argName) {
                this.name = argName;
            };

            Card.prototype.getCount = function () {
                return this.count;
            };

            Card.prototype.setCount = function (argCount) {
                this.count = argCount;
            };

            Card.prototype.getTags = function () {
                return this.tags;
            };

            Card.prototype.setTags = function (argTags) {
                this.tags = argTags;
            };

            Card.prototype.incrementCount = function (argCount) {
                var increaseAmount = 1;

                if (argCount) {
                    increaseAmount = argCount;
                }

                this.count = this.count + increaseAmount;
            };

            Card.prototype.decrementCount = function (argCount) {
                var decreaseAmount = 1;

                if (argCount) {
                    decreaseAmount = argCount;
                }

                this.count = this.count - decreaseAmount;

                if (this.count < 0) {
                    this.count = 0;
                }
            };

            Card.prototype.addTags = function (argTags) {
                // TODO
                return;
            };

            Card.prototype.removeTags = function (argTags) {
                // TODO
                return;
            };

            return Card;
        });
}());

