#!/bin/bash

set -e


function do_build {
    rm -rf play
    cp -r mod play
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
