REM If you have this error:

REM Error: The libsass binding was not found in ../node_modules/node-sass/vendor/linux-x64-11/binding.node
REM (STDERR) This usually happens because your node version has changed.
REM (STDERR) Run npm rebuild node-sass to build the binding for your current node version.
REM (STDERR) at Object.sass.getBinaryPath (../node_modules/node-sass/lib/extensions.js:150:11)

REM It is because Meteor is running on a different Node.js version than your local version. You can fix it easily:

REM 1. Open this script with your favorite editor
REM 2. Set the correct SASS_BINARY_NAME value based on the directory between vendor and binding.node in the error message: .../vendor/linux-x64-11/binding.node
REM 3. Run the script and the error should disappear

SET SASS_BINARY_NAME=linux-x64-11

REM This should be the Meteor Node.js version (not local version)
METEOR_NODE_VERSION=v0.10.40

SET ROOT_FOLDER=%~dp0..
cd "%ROOT_FOLDER%\node_modules\node-sass"
node "%ROOT_FOLDER%\node_modules\node-sass\scripts\build.js" --target=%METEOR_NODE_VERSION% --force
