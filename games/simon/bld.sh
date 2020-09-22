#!/bin/bash

set -e


function do_build {
    rm -rf play
    cp -r mod play
    rm play/README.md
    rm play/libs/OFL.txt
    rm play/libs/twitter-bootstrap/4.0.0-alpha.6/css/bootstrap.min.css.map
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
