(function() {
  'use strict';

  var BACKEND_RESPONSE_DATA = [
    {
      name:  "Abzan Midrange",
      cards: [
        {
          name:  "Siege Rhino",
          count: 4,
          tags:  []
        }, {
          name:  "Wingmate Roc",
          count: 2,
          tags:  []
        }, {
          name:  "Thoughtseize",
          count: 4,
          tags:  []
        }, {
          name:  "Sylvan Caryatid",
          count: 4,
          tags:  []
        }, {
          name:  "Sorin, Solemn Visitor",
          count: 2,
          tags:  []
        }, {
          name:  "Hero's Downfall",
          count: 4,
          tags:  []
        }, {
          name:  "End Hostilities",
          count: 2,
          tags:  []
        }, {
          name:  "Elspeth, Sun's Champion",
          count: 3,
          tags:  []
        }, {
          name:  "Courser of Kruphix",
          count: 4,
          tags:  []
        }, {
          name:  "Ajani, Mentor of Heroes",
          count: 2,
          tags:  []
        }, {
          name:  "Abzan Charm",
          count: 4,
          tags:  []
        }, {
          name:  "Windswept Heath",
          count: 4,
          tags:  []
        }, {
          name:  "Urborg, Tomb of Yawgmoth",
          count: 1,
          tags:  []
        }, {
          name:  "Temple of Silence",
          count: 3,
          tags:  []
        }, {
          name:  "Temple of Plenty",
          count: 1,
          tags:  []
        }, {
          name:  "Temple of Malady",
          count: 4,
          tags:  []
        }, {
          name:  "Sandsteppe Citadel",
          count: 1,
          tags:  []
        }, {
          name:  "Plains",
          count: 2,
          tags:  []
        }, {
          name:  "Mana Confluence",
          count: 1,
          tags:  []
        }, {
          name:  "Llanowar Wastes",
          count: 3,
          tags:  []
        }, {
          name:  "Forest",
          count: 3,
          tags:  []
        }, {
          name:  "Caves of Koilos",
          count: 4,
          tags:  []
        }
      ]
    },
    {
      name:  "Abzan Wins",
      cards: [
        {
          name:  "Siege Rhino",
          count: 4,
          tags:  ["Creature"]
        }, {
          name:  "Wingmate Roc",
          count: 2,
          tags:  ["Creature"]
        }, {
          name:  "Thoughtseize",
          count: 4,
          tags:  []
        }, {
          name:  "Sylvan Caryatid",
          count: 4,
          tags:  ["Creature", "Ramp"]
        }, {
          name:  "Sorin, Solemn Visitor",
          count: 2,
          tags:  ["Planeswalker"]
        }, {
          name:  "Hero's Downfall",
          count: 4,
          tags:  ["Removal"]
        }, {
          name:  "End Hostilities",
          count: 2,
          tags:  ["Removal", "Sweeper"]
        }, {
          name:  "Elspeth, Sun's Champion",
          count: 3,
          tags:  ["Planeswalker", "Sweeper"]
        }, {
          name:  "Courser of Kruphix",
          count: 4,
          tags:  ["Creature"]
        }, {
          name:  "Ajani, Mentor of Heroes",
          count: 2,
          tags:  ["Planeswalker"]
        }, {
          name:  "Abzan Charm",
          count: 4,
          tags:  ["Removal", "Combat Trick", "Card Draw"]
        }, {
          name:  "Windswept Heath",
          count: 4,
          tags:  ["Land", "Untapped Land", "Green Source", "White Source"]
        }, {
          name:  "Urborg, Tomb of Yawgmoth",
          count: 1,
          tags:  ["Land", "Untapped Land", "Black Source"]
        }, {
          name:  "Temple of Silence",
          count: 3,
          tags:  ["Land", "White Source", "Black Source"]
        }, {
          name:  "Temple of Plenty",
          count: 1,
          tags:  ["Land", "White Source", "Green Source"]
        }, {
          name:  "Temple of Malady",
          count: 4,
          tags:  ["Land", "Black Source", "Green Source"]
        }, {
          name:  "Sandsteppe Citadel",
          count: 1,
          tags:  ["Land", "White Source", "Black Source", "Green Source"]
        }, {
          name:  "Plains",
          count: 2,
          tags:  ["Land", "Untapped Land", "White Source"]
        }, {
          name:  "Mana Confluence",
          count: 1,
          tags:  ["Land", "Untapped Land", "White Source", "Blue Source",
            "Black Source", "Red Source", "Green Source"]
        }, {
          name:  "Llanowar Wastes",
          count: 3,
          tags:  ["Land", "Untapped Land", "Green Source", "Black Source"]
        }, {
          name:  "Forest",
          count: 3,
          tags:  ["Land", "Untapped Land", "Green Source"]
        }, {
          name:  "Caves of Koilos",
          count: 4,
          tags:  ["Land", "Untapped Land", "Black Source", "White Source"]
        }
      ]
    },
    {
      name:  "UB Control",
      cards: [
        {
          name:  "Siege Rhino",
          count: 4,
          tags:  []
        }, {
          name:  "Wingmate Roc",
          count: 2,
          tags:  []
        }, {
          name:  "Thoughtseize",
          count: 4,
          tags:  []
        }, {
          name:  "Sylvan Caryatid",
          count: 4,
          tags:  []
        }, {
          name:  "Sorin, Solemn Visitor",
          count: 2,
          tags:  []
        }, {
          name:  "Hero's Downfall",
          count: 4,
          tags:  []
        }, {
          name:  "End Hostilities",
          count: 2,
          tags:  []
        }, {
          name:  "Elspeth, Sun's Champion",
          count: 3,
          tags:  []
        }, {
          name:  "Courser of Kruphix",
          count: 4,
          tags:  []
        }, {
          name:  "Ajani, Mentor of Heroes",
          count: 2,
          tags:  []
        }, {
          name:  "Abzan Charm",
          count: 4,
          tags:  []
        }, {
          name:  "Windswept Heath",
          count: 4,
          tags:  []
        }, {
          name:  "Urborg, Tomb of Yawgmoth",
          count: 1,
          tags:  []
        }, {
          name:  "Temple of Silence",
          count: 3,
          tags:  []
        }, {
          name:  "Temple of Plenty",
          count: 1,
          tags:  []
        }, {
          name:  "Temple of Malady",
          count: 4,
          tags:  []
        }, {
          name:  "Sandsteppe Citadel",
          count: 1,
          tags:  []
        }, {
          name:  "Plains",
          count: 2,
          tags:  []
        }, {
          name:  "Mana Confluence",
          count: 1,
          tags:  []
        }, {
          name:  "Llanowar Wastes",
          count: 3,
          tags:  []
        }, {
          name:  "Forest",
          count: 3,
          tags:  []
        }, {
          name:  "Caves of Koilos",
          count: 4,
          tags:  []
        }
      ]
    },
    {
      name:  "Golgari Constellation",
      cards: [
        {
          name:  "Siege Rhino",
          count: 4,
          tags:  []
        }, {
          name:  "Wingmate Roc",
          count: 2,
          tags:  []
        }, {
          name:  "Thoughtseize",
          count: 4,
          tags:  []
        }, {
          name:  "Sylvan Caryatid",
          count: 4,
          tags:  []
        }, {
          name:  "Sorin, Solemn Visitor",
          count: 2,
          tags:  []
        }, {
          name:  "Hero's Downfall",
          count: 4,
          tags:  []
        }, {
          name:  "End Hostilities",
          count: 2,
          tags:  []
        }, {
          name:  "Elspeth, Sun's Champion",
          count: 3,
          tags:  []
        }, {
          name:  "Courser of Kruphix",
          count: 4,
          tags:  []
        }, {
          name:  "Ajani, Mentor of Heroes",
          count: 2,
          tags:  []
        }, {
          name:  "Abzan Charm",
          count: 4,
          tags:  []
        }, {
          name:  "Windswept Heath",
          count: 4,
          tags:  []
        }, {
          name:  "Urborg, Tomb of Yawgmoth",
          count: 1,
          tags:  []
        }, {
          name:  "Temple of Silence",
          count: 3,
          tags:  []
        }, {
          name:  "Temple of Plenty",
          count: 1,
          tags:  []
        }, {
          name:  "Temple of Malady",
          count: 4,
          tags:  []
        }, {
          name:  "Sandsteppe Citadel",
          count: 1,
          tags:  []
        }, {
          name:  "Plains",
          count: 2,
          tags:  []
        }, {
          name:  "Mana Confluence",
          count: 1,
          tags:  []
        }, {
          name:  "Llanowar Wastes",
          count: 3,
          tags:  []
        }, {
          name:  "Forest",
          count: 3,
          tags:  []
        }, {
          name:  "Caves of Koilos",
          count: 4,
          tags:  []
        }
      ]
    },
    {
      name:  "Temur Aggro",
      cards: [
        {
          name:  "Siege Rhino",
          count: 4,
          tags:  []
        }, {
          name:  "Wingmate Roc",
          count: 2,
          tags:  []
        }, {
          name:  "Thoughtseize",
          count: 4,
          tags:  []
        }, {
          name:  "Sylvan Caryatid",
          count: 4,
          tags:  []
        }, {
          name:  "Sorin, Solemn Visitor",
          count: 2,
          tags:  []
        }, {
          name:  "Hero's Downfall",
          count: 4,
          tags:  []
        }, {
          name:  "End Hostilities",
          count: 2,
          tags:  []
        }, {
          name:  "Elspeth, Sun's Champion",
          count: 3,
          tags:  []
        }, {
          name:  "Courser of Kruphix",
          count: 4,
          tags:  []
        }, {
          name:  "Ajani, Mentor of Heroes",
          count: 2,
          tags:  []
        }, {
          name:  "Abzan Charm",
          count: 4,
          tags:  []
        }, {
          name:  "Windswept Heath",
          count: 4,
          tags:  []
        }, {
          name:  "Urborg, Tomb of Yawgmoth",
          count: 1,
          tags:  []
        }, {
          name:  "Temple of Silence",
          count: 3,
          tags:  []
        }, {
          name:  "Temple of Plenty",
          count: 1,
          tags:  []
        }, {
          name:  "Temple of Malady",
          count: 4,
          tags:  []
        }, {
          name:  "Sandsteppe Citadel",
          count: 1,
          tags:  []
        }, {
          name:  "Plains",
          count: 2,
          tags:  []
        }, {
          name:  "Mana Confluence",
          count: 1,
          tags:  []
        }, {
          name:  "Llanowar Wastes",
          count: 3,
          tags:  []
        }, {
          name:  "Forest",
          count: 3,
          tags:  []
        }, {
          name:  "Caves of Koilos",
          count: 4,
          tags:  []
        }
      ]
    }
  ];

  angular.module('app.shared.services.decklists', [
    'shared.models.card',
    'shared.models.decklist'
  ]).service('decklistService', decklistService);

  function decklistService($q, Card, Decklist) {

    function parseIntoDecklists(argArrayOfDecks) {
      var arrayOfDecklists = [];

      argArrayOfDecks.forEach(function(deck) {
        var newDeck = new Decklist(deck.name);

        deck.cards.forEach(function(card) {
          var cardObject = new Card(card.name, card.tags);
          newDeck.addCard(cardObject, card.count);
        });

        arrayOfDecklists.push(newDeck);
      });

      return arrayOfDecklists;
    }

    /**
     * Publicly Exposed Functionality
     */
    this.getAllDecks = function() {
      var deferred = $q.defer();

      deferred.resolve(parseIntoDecklists(BACKEND_RESPONSE_DATA));

      return deferred.promise;
    };
  }
}());
