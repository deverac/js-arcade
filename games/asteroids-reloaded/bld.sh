#!/bin/bash

set -e


function do_build {
    cd mod
    npm install
    npm run build
    cd ..
    rm -rf play
    mkdir play
    mkdir play/scripts
    cp -r mod/sounds play
    cp -r mod/images play
    cp mod/index.html play
    cp mod/license.txt play
    cp mod/scripts/asteroids.min.js play/scripts
    cp mod/scripts/mathlib.min.js   play/scripts
    cp mod/scripts/gamelib.min.js   play/scripts
    cp mod/scripts/server-data.js   play/scripts
}


function do_clean {
    rm -rf play
    rm -rf mod/node_modules
    rm -f mod/package-lock.json
    rm -f mod/scripts/asteroids.min.js
    rm -f mod/scripts/asteroids.min.js.map
    rm -f mod/scripts/gamelib.min.js
    rm -f mod/scripts/mathlib.min.js
}


if [ "$1" = "clean" ]; then
    do_clean
elif [ "$1" = "build" ]; then
    do_build
else
    echo Unrecognized option.
fi
