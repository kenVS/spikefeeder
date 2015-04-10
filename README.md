# TODO #

https://docs.google.com/spreadsheets/d/1kuMrb6GMKPjyEp7OjMBAu9CDb4isXfpUWJQH35uKaXY

## Session Logs
4/9/2015
- More app structure changes checked in and removed the last of the old structure.
- All old existing functionality is reimplemented except for decklist editing.
- Next Session
    - Add sideboard functionality to existing decklist object
    - Create custom decklist object (remove "name" from basic decklist object)
    - Make way to save decklists in the client (make sure it is easily refactored later to save to server)

3/17/2015
- Tons of app structure changes. Moved toward making generic file names and grouped directories by app structure.
- Started making a model folder for decklists
- Next Session
    - Finish decklist model and figure out how to wrap it with odds parsing

Sometime
- Refactored a bunch of stuff in the decklist chooser to be data object based
- Next Session
    - Make more generic objects for cards, decks, and game state
        - Then use those objects in the Odds tab
    - Refactor "utilities" folder into "pages" or something more comprehensible