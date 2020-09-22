#!/bin/bash

set -e


function do_build {
    rm -rf play
    cd mod
    npm install
    npm run build:prod
    sed -i -e 's/<base href="\/"\/>//' ./dist/index.html
    sed -i -e 's/nomodule defer//g' ./dist/index.html
    sed -i -e 's/type="module"//g' ./dist/index.html
    cd ..
    cp -r mod/dist play
    cp mod/LICENSE play
    rm play/assets/svg/bzhmaddog.svg
    rm play/assets/svg/cheshire137.svg
    rm play/assets/svg/recri2.svg
    rm play/assets/svg/riichi.svg
    rm play/assets/svg/uni.svg
    rm play/assets/svg/unib.svg
    rm play/assets/svg/README.md
    rm play/assets/sounds/README.md
    rm play/assets/img/README.md
    rm -rf play/assets/data
}


function do_clean {
    rm -rf mod/node_modules
    rm -rf mod/dist
    rm -rf play
}


if [ "$1" = "clean" ]; then
    do_clean
elif [ "$1" = "build" ]; then
    do_build
else
    echo Unrecognized option.
fi
