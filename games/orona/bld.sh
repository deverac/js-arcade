#!/bin/bash

set -e


function do_build {
    cd mod
    npm install
    # Replacement for 'git submodule update --init'
    cp -r ../mod-villain node_modules/villain
    cake.coffeescript build
    cd ..

    rm -rf play
    mkdir play
    cp -r mod/js      play
    cp -r mod/css     play
    cp -r mod/images  play
    cp -r mod/vendor  play
    cp -r mod/sounds  play
    cp -r mod/maps    play
    cp mod/index.html play
    cp mod/COPYING    play
}


function do_clean {
    rm -rf play
    rm -rf mod/node_modules
    rm -f mod/js/bolo-bundle.js
    rm -f mod/package-lock.json
}


if [ "$1" = "clean" ]; then
    do_clean
elif [ "$1" = "build" ]; then
    do_build
else
    echo Unrecognized option.
fi
