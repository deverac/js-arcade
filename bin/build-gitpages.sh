#!/bin/sh

# This script creates a branch that will be served via GitHub Pages.
#
# Creating the structure of the target branch from the source branch is
# simple, but being able to cleanly switch between the two is error-prone.
# Both contain 'index.html', 'games', and 'screenshots'. While 'index.html'
# and 'screenshots' are (should be) identical, the contents of the development
# version and production version of the 'games' directory differ. To avoid
# difficulties when switching between branches, the 'docs' directory is used;
# it can be served via GitHub Pages.
#
# While creating the branch, files will be re-organized and many files
# will be deleted because they are not needed when serving HTML pages.


# Exit on error
set -e

GITPAGES_BRANCH=gitpages
CURRENT_BRANCH=`git rev-parse --abbrev-ref HEAD`

# Ensure we are in the git root directory
if [ `pwd` != `git rev-parse --show-toplevel` ]
then
    echo Error: This script must be run from the git root
    echo Error: directory. e.g. "'"./bin/$0"'"
    exit 1
fi



if [ "$CURRENT_BRANCH" = "$GITPAGES_BRANCH" ]
then
    echo Error: You are currently on the "'""$GITPAGES_BRANCH""'" branch.
    echo Error: This script should not be run while on that branch.
    echo Error: Please switch to another branch and rerun this script.
    echo Error: To switch to the 'main' branch: "'"git checkout main"'"
    exit 1
else
    # Delete branch if it exists
    git branch --delete "$GITPAGES_BRANCH" 2>/dev/null || true

    # Create branch
    git checkout -b "$GITPAGES_BRANCH"

    # Clean
    rm -rf docs

    # Rebuild
    unzip arcade.zip
    mv arcade docs

    rm -rf arcade
    rm -rf bin
    rm -rf games
    rm -rf screenshots
    rm -r arcade.zip
    rm -r index.html
    rm -f build.sh
    rm -f LICENSE
    rm -f prereqs.txt
    rm -f README.md

    # Add changes and commit branch
    git add --all
    git commit -m "Construct gitpages branch"

    # Remove files created for the 'gitpages' branch
    rm -rf ./docs

    # Return to original branch
    git checkout "$CURRENT_BRANCH"
fi
