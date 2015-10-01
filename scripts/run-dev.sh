#!/bin/bash

ROOT_FOLDER=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )/..
cd $ROOT_FOLDER
npm install
rm -rf meteor/react-build-generated

cd meteor
export WEBPACK_DEV_SERVER=1
node ../webpack/dev-server &
meteor --settings $ROOT_FOLDER/settings/development.json
