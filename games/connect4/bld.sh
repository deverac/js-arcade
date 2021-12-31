#!/bin/bash

set -e


function do_build {
    rm -rf play
    cd mod/browser
    npm install
    npm install yarn
    # Force v1.12.3 because v1.12.4 causes error:
    #    app.ts: Invalid Version: undefined
    # See https://github.com/parcel-bundler/parcel/issues/5943
    npm install parcel@1.12.3
    npm run-script build
    cd ../..

    cp -r mod/browser/dist play
    cp mod/LICENSE         play
    rm play/app.*.css.map
    rm play/app.*.js.map

    # Adjust '/app.*.css' and '/app.*.js'
    sed -i -e 's/\/app\./app./g' play/index.html

    # Remove footer
    sed -i -e 's/<footer .*\/footer>//g' play/index.html
}


function do_clean {
    rm -rf play
    rm -rf mod/browser/dist
    rm -rf mod/browser/node_modules
    rm -rf mod/browser/.cache
    rm -f  mod/browser/package-lock.json
}


if [ "$1" = "clean" ]; then
    do_clean
elif [ "$1" = "build" ]; then
    do_build
else
    echo Unrecognized option.
fi
