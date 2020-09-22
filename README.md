This is a curated collection of Javascript games that have been modified to run in a browser and have no external dependencies. i.e. An Internet connection is not required, nor is running a local server required.

To run, unzip [arcade.zip](arcade.zip), and open `index.html` in your browser.

### Keys
 Key   |  Action
-------|--------------
__Arrow keys__ | Navigate  
__Enter__      | Run a game title  
__Space__      | Open an info window showing the keys for the game and links to the original source and an online version of the game (if available).

To exit it a game, navigate _Back_ in your browser.

 * Some games start with sounds on; some games start with sounds off; some games have no way to mute the sound.
 * Sound levels vary a lot, between games.
 * Some games include help pages; most do not.
 * Some games require Local Storage or Cookies.


  Game |  Description | License
-------|--------------|---------
[Asteroids Classic](https://github.com/dmcinnes/HTML5-Asteroids)| Black and white vector graphics | MIT
[Asteroids Reloaded](https://github.com/kevinroast/Asteroids-Reloaded) | Asteroids, re-imagined. | MIT-like
[Ball and Wall](https://github.com/budnix/ball-and-wall)        | Arkanoid-like | GPL
[Checkers](https://github.com/kschuetz/checkers)                | Capture all opponents pieces by jumping | Apache2
[Connect4](https://github.com/kenrick95/c4)                     | Get four discs in a row | MIT
[Cube](https://github.com/bsehovac/the-cube)                    | Solve 2, 3, 4, 5 sided cubes | ISC
[Duck Hunt](https://github.com/MattSurabian/DuckHunt-JS)        | Shoot the ducks before they escape | MIT
[Lemmings](https://github.com/radare/fxos-app-lemmings)         | Get lemmings to their home | GPL2
[Lunar Lander](https://github.com/sebleedelisle/apollolander)   | Land LEM module on moon | MIT
[Mahjong](https://github.com/ffalt/mah)                         | Remove matching tiles | MIT
[Mario](https://github.com/robertkleffner/mariohtml5)           | Run and jump to the end | Unlicense
[Memory Game](https://github.com/mmenavas/memory-game)          | Match pairs of cards | MIT
[Onslaught Arena](https://github.com/lostdecade/onslaught_arena)| Kill the monsters | GPL
[Orona](https://github.com/stephank/orona)                      | Bolo clone. Capture all bases; destroy all pillboxes | GPL2
[Outrun Synthwave](https://github.com/lrq3000/javascript-racer) | Beat the clock | MIT
[Pacman](https://github.com/shaunlebron/pacman)                 | Recreation of classic Pacman | GPL3
[Pool](https://github.com/henshmi/Classic-Pool-Game)            | Pocket your balls before your opponent | MIT
[Racer10k](https://github.com/onaluf/RacerJS)                   | One lap on procedurally generated course.  | MIT
[Radius](https://github.com/jackrugile/radius-raid-js13k)       | A cross between Robotron and Asteroids | MIT
[Simon](https://github.com/Kuljeet-123/Simon-Game)              | The classic 4-color, 4-tone repeat-a-sequence | None
[Sleeping Beauty](https://github.com/ondras/sleeping-beauty)    | A Rogue-like game to rescue a sleeping beauty | ISC
[Tetris](https://github.com/mimshwright/mimstris)               | Place blocks to create solid rows | MIT

None of the games in this collection were written by the curator.

### Developer Info

Action |  Description | Notes
-------|--------------|---------
Build all games     | `./build.sh build_all`                | Creates the `play` directory for each game
Build a single game | `./build.sh build <name_of_game_dir>` | e.g. `/build.sh build racer10k`
Clean all games     | `./build.sh clean_all`                | Remove all generated files and dirs (e.g. `node_modules`, `play`)
Clean a single game | `./build.sh build <name_of_game_dir>` | e.g. `/build.sh clean racer10k`
Create `arcade.zip` |`./build.sh arcade`                    | Only games that have been built are included in the zip file.

Building all games takes about 20 minutes and requires about 1.3Gb of disk space.

Building most games requires [Node](http://nodejs.org); some require external tools be installed.
