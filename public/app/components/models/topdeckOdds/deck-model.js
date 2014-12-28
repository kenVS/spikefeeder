(function () {
    "use strict";

    angular.module('models.topdeckOdds.deck', [
        'models.topdeckOdds.card'
    ]).factory('Deck', function (Card) {
        function Deck(argName, argListOfCards) {
            var cardHash;

            if (typeof argName === "string") {
                // TODO - this.setName(argName);
                this.name = argName;
            } else {
                throw "'name' must be defined when instantiating a Deck object";
            }

            cardHash = {};
            if (argListOfCards) {
                // TODO - this.setCards(argListOfCards);
                argListOfCards.forEach(function (card) {
                    var cardName = card.getName(),
                        cardCount = card.getCount(),
                        cardTags = card.getTags();

                    cardHash[cardName] = new Card(cardName, cardCount, cardTags);
                });

                this.cards = cardHash;
            } else {
                // TODO - this.setCards([]);
                this.cards = cardHash;
            }

            //TODO - Keep track of total cards in deck.
        }

        Deck.prototype.addCard = function (argCard) {
            var cardName = argCard.getName(),
                cardCount = argCard.getCount(),
                cardTags = argCard.getTags();

            if (this.cards[cardName] !== undefined) {
                this.cards[cardName].incrementCount(cardCount);
                this.cards[cardName].addTags(cardTags);
            } else {
                this.cards[cardName] = new Card(cardName, cardCount, cardTags);
            }
        };

        Deck.prototype.removeCard = function (argCard) {
            var cardName = argCard.getName(),
                cardCount = argCard.getCount(),
                cardTags = argCard.getTags();

            if (this.cards[cardName] !== undefined) {
                this.cards[cardName].decrementCount(cardCount);
                this.cards[cardName].removeTags(cardTags);
            }
        };

        Deck.prototype.getCardByName = function (argCardName) {
            return this.cards[argCardName];
        };

        Deck.prototype.getCardCount = function () {
            var cardCount = 0;

            angular.forEach(this.cards, function (card) {
                cardCount = cardCount + card.getCount();
            });

            return cardCount;
        };

        return Deck;
    });
}());

