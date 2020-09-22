#!/bin/bash

set -e


function do_build {
    rm -rf play
    cd mod/bin
    ./encode_pngs.py # Only necessary if pngs are modified.
    ./build.py
    cd ../..
    cp -r mod/build/web play
    cp mod/README.md play
    rm play/img/frame_background.png
    rm play/img/sheet_arena.png
    rm play/img/sheet_beholder.png
    rm play/img/sheet_characters.png
    rm play/img/sheet_objects.png
    rm play/img/sheet_ui.png
    rm play/robots.txt
}


function do_clean {
    rm -rf mod/build
    rm -rf play
    rm -f mod/htdocs/js/encoded_pngs.js
}


if [ "$1" = "clean" ]; then
    do_clean
elif [ "$1" = "build" ]; then
    do_build
else
    echo Unrecognized option.
fi
