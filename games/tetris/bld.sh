#!/bin/bash

set -e


function do_build {
    rm -rf play
    cd mod
    npm install
    npm run build
    cd ..
    cp -r mod/dist play
    cp mod/LICENSE play
    rm play/main.js.map
}


function do_clean {
    rm -rf play
    rm -rf mod/node_modules
    rm -f mod/dist/main.js
    rm -f mod/dist/main.js.map
    rm -f mod/package-lock.json
}


if [ "$1" = "clean" ]; then
    do_clean
elif [ "$1" = "build" ]; then
    do_build
else
    echo Unrecognized option.
fi
