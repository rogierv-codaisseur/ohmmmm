### Welcome to

![Logo](https://github.com/rogierv-codaisseur/ohmmmm/blob/dev/Screenshot%202019-03-13%20at%2015.50.56.png)

We built this game as a classic top-down rpg style puzzler.<br />
The aim of the game is to reach the Loot Chest first, while avoiding the skeletons.

![](KingdomOfTripolis.gif)

The front-end was developed using only `React` and `Redux`.<br />
The back-end was implimented using `Websocket`

## Game Rules

Player 1 - Use arrow keys to navigate around the map.<br />
Player 2 - Use W A S D to bavigate around the map.<br />
Avoid the Skeletons! They will only move once a player moves.<br />
Player will respawn at start when hit by an enemy.<br />
Plan your moves carefully OR run like a crazed bat out of hell.<br />
Be the first to claim the LOOT!

## Play Online

https://kingdom-of-tripolis.netlify.com/

## Run Locally

The `Server` is deployed to Heroku. <br />
If all dynos are running, you only need to run the `Client`

```sh
cd client/
npm install
npm run start
```

If dynos have been stopped, you can run the `Server` locally:<br />
*NOTE: Run `Client` as mentioned above*

```sh
cd server/
npm install
npm run start
```

## Contributors

Rogier Verkaik: https://github.com/rogierv-codaisseur<br />
Dusty Wood Saunders: https://github.com/dustywsaunders

## Credits

Music: http://freemusicarchive.org/music/Azureflux/<br />
Some sprites: https://candacis.wordpress.com/category/resources/tiles/<br />
Other sprites: https://opengameart.org/content/lpc-medieval-fantasy-character-sprites<br />
