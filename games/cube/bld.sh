#!/bin/bash

set -e


function do_build {
    rm -rf play
    cd mod
    # 'npm run build' expects 'export' directory to exist
    rm -rf export
    mkdir export

    npm install
    npm run build
    cd ..
    cp -r mod/export play
}


function do_clean {
    rm -rf mod/export
    rm -rf mod/node_modules
    rm -rf play
}


if [ "$1" = "clean" ]; then
    do_clean
elif [ "$1" = "build" ]; then
    do_build
else
    echo Unrecognized option.
fi
