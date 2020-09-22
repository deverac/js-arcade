#!/bin/bash
# Each directory in 'games' should contain a 'bld.sh' which builds the
# game to a directory named 'play'.

set -e


function do_arcade {
    echo Building dist
    DST=arcade
    ZIP=arcade.zip
    rm -rf $DST
    rm -f $ZIP
    mkdir $DST
    cp index.html $DST
    cp -r screenshots $DST
    for nam in `ls games`; do
        if [ -d games/$nam/play ]; then
            cp -r --parents games/$nam/play $DST
        else
            echo Skipping $nam
        fi
    done
    7z a $ZIP $DST
}


function do_clean_all {
    echo Cleaning all
    for nam in `ls games`; do
        if [ -d games/$nam ]; then
            do_clean $nam
        fi
    done
    rm -rf arcade
    rm -f arcade.zip
}


function do_build_all {
    echo Building all
    for nam in `ls games`; do
        if [ -d games/$nam ]; then
            do_build $nam
        fi
    done
}


function do_clean {
    if [ "$1" = "" ]; then
        return
    fi
    cd games/$1
        ./bld.sh clean
    cd ../..
}


function do_build {
    if [ "$1" = "" ]; then
        return
    fi
    if [ -d games/$1 ]; then
        cd games/$1
            ./bld.sh build
        cd ../..
    else
        echo $1 is not a game directory.
    fi
}


if [ "$1" = "build_all" ]; then
    do_build_all
elif [ "$1" = "clean_all" ]; then
    do_clean_all
elif [ "$1" = "clean" ]; then
    do_clean $2
elif [ "$1" = "arcade" ]; then
    do_arcade
elif [ "$1" = "game" ]; then
    do_build $2
else
    echo Unrecognized option $*
fi
