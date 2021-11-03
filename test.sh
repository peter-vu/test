#!/bin/sh          
# STR="ox-automated-test"
# STR=${STR:3}
# echo $STR
# STR2=${STR:3}
# echo $STR2
SERVER_ENV=DEV1
echo $SERVER_ENV
# if [[ "$SERVER_ENV" == "UAT" || "$SERVER_ENV" == "DEV" ]]
# if [ "$SERVER_ENV" == "UAT" ] || [ "$SERVER_ENV" == "DEV" ]
if [[ "$SERVER_ENV" == "UAT" || "$SERVER_ENV" == "DEV" ]]
then
  echo "mockfxm for $SERVER_ENV"
else
  echo "Non UAT: $SERVER_ENV"
fi
