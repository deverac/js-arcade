#!/bin/bash

set -e


function do_build {
    rm -rf play
    cp -r mod play
    rm play/ipad.js
    rm play/README.md
}


function do_clean {
    rm -rf play
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
