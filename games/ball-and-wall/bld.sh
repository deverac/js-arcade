#!/bin/bash

set -e


function do_build {
    rm -rf play
    rm -rf mod/dist

    cd ./mod
    npm install
    ./node_modules/.bin/bower install
    ./node_modules/.bin/grunt build
    cd ..

    mkdir -p play/dist
    mkdir -p play/js/lib/require
    mkdir -p play/js/lib/createjs

    cp -r mod/dist                              play
    cp mod/LICENSE                              play
    cp mod/index.html                           play
    cp mod/js/_config_prod.js                   play/js
    cp mod/js/lib/require/require.js            play/js/lib/require
    cp -r mod/bower_components                  play/
    cp mod/js/lib/createjs/createjs.min.js      play/js/lib/createjs/
    cp mod/js/lib/createjs/soundjs-0.5.2.min.js play/js/lib/createjs
    cp mod/js/index.js                          play/js
    cp mod/homescreen-144.png                   play

    cp -r mod/sounds play
    cp -r mod/images play
    cp -r mod/fonts  play
    cp -r mod/css    play

    rm -rf play/images/icons
    mkdir play/images/icons
    cp mod/images/icons/128x128.png play/images/icons
    find play -name "*@2x.jpg" -exec rm {} \;
    find play -name "*@2x.png" -exec rm {} \;

    # Remove redundant font formats.
    # These should all have *.woff font files.
    find play/fonts -name "*.eot" -exec rm {} \;
    find play/fonts -name "*.otf" -exec rm {} \;
    find play/fonts -name "*.svg" -exec rm {} \;
    find play/fonts -name "*.ttf" -exec rm {} \;

    # Exclude XHR request.
    sed -i -e 's/b.open("GET","fail.fail",!1)/return 0/'                                 play/js/lib/createjs/soundjs-0.5.2.min.js

    # Prevent throwing exception.
    sed -i -e 's/\(c.checkSrcChange=function(){\)/\1 if(this.tags[this.tags.length-1])/' play/js/lib/createjs/soundjs-0.5.2.min.js
}


function do_clean {
    rm -rf play
    rm -rf mod/dist
    rm -rf mod/node_modules
    rm -rf mod/bower_components
    rm -f  mod/package-lock.json
}


if [ "$1" = "clean" ]; then
    do_clean
elif [ "$1" = "build" ]; then
    do_build
else
    echo Unrecognized option.
fi
