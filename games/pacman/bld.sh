#!/bin/bash

set -e


function do_build {
    # The 'play' dir must be created from 'web' and 'mod'.
    # The 'mod' dir does not contain sounds, but does include fonts.
    rm -rf play

    cd mod
    ./build.sh
    cd ..

    mkdir play

    cp -r mod/sounds play
    cp mod/pacman.js play
    cp mod/index.htm play/index.html
    cp mod/COPYING   play
    mkdir play/font
    cp -r mod/font/ARCADE_R.TTF play/font
    mkdir play/icon
    cp mod/icon/favicon.png play/icon
}


function do_clean {
    rm -rf play
    rm -f mod/pacman.js
    rm -f mod/debug.htm
}


if [ "$1" = "clean" ]; then
    do_clean
elif [ "$1" = "build" ]; then
    do_build
else
    echo Unrecognized option.
fi
