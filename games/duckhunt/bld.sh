#!/bin/bash

set -e


function do_build {
    rm -rf play

    cd mod
    npm install
    npm run images  # Builds ./dist/sprites.png and ./dist/sprites.json
    npm run encpng  # Encode sprites.png as ./modules/sprite.js
    npm run audio   # Build ./dist/audio.ogg and ./dist/audio.mp3
    # Building creates 'node_modules/.cache/hardsource'. Using hardsource
    # speeds up the build process, but sometimes fails, so delete the
    # cache before (re-)building.
    rm -rf node_modules/.cache/hardsource
    npm run build   # Build duckhunt.js
    cd ..

    cp -r mod/dist play
    rm play/duckhunt.js.map

    cp mod/LICENSE play
}


function do_clean {
    rm -rf play
    cd mod
    rm -rf node_modules
    rm -f dist/audio.json
    rm -f dist/audio.mp3
    rm -f dist/audio.ogg
    rm -f dist/duckhunt.js
    rm -f dist/duckhunt.js.map
    rm -f dist/sprites.json
    rm -f dist/sprites.png
    rm -f src/modules/encodedPng.js
    cd ..
}


if [ "$1" = "clean" ]; then
    do_clean
elif [ "$1" = "build" ]; then
    do_build
else
    echo Unrecognized option.
fi
