#!/bin/bash

set -e


function do_build {
    rm -rf play
    cd mod
    npm install
    npm run build
    cd ..

    mkdir play
    cp mod/index.html            play
    cp mod/app.css               play
    cp mod/app.js                play
    cp mod/rot.min.js            play
    cp mod/Metrickal-Regular.otf play
}


function do_clean {
    rm -rf play
    rm -rf mod/node_modules
    rm -f mod/package-lock.json
}


if [ "$1" = "clean" ]; then
    do_clean
elif [ "$1" = "build" ]; then
    do_build
else
    echo Unrecognized option.
fi
