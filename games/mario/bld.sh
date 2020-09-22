#!/bin/bash

set -e


function do_build {
    rm -rf play

    mkdir play
    cp mod/main.html  play
    cp mod/LICENSE.md play
    cp -r mod/code    play
    cp -r mod/Enjine  play
    cp -r mod/images  play
    cp -r mod/midi    play
    cp -r mod/sounds  play
    cp -r mod/vendor  play

    rm play/midi/urldecode.py
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
