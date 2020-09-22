#!/bin/bash

set -e


function do_build {
    rm -rf play
    cp -r mod play
    
    rm -rf play/screenshots
    rm play/v1.straight.html
    rm play/v2.curves.html
    rm play/v3.hills.html
    rm play/v4.final.html
    rm play/Rakefile
    rm play/README.md
    rm play/index.html
    rm play/thanks.txt
    rm play/images/background.xcf
    rm play/images/sprites.svg
    rm -rf play/images/background
}


function do_clean {
    rm -rf play
}


if [ "$1" = "clean" ]; then
    do_clean
elif [ "$1" = "build" ]; then
    do_build
else
    echo Unrecognized option.
fi
