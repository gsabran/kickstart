SET ROOT_FOLDER=%~dp0..
cd "%ROOT_FOLDER%"
CMD /C npm install
rmdir /s/q meteor\react-build-generated

cd meteor
SET WEBPACK_DEV_SERVER=1
start node ..\webpack\dev-server
start meteor --settings "%ROOT_FOLDER%\settings\development.json"
