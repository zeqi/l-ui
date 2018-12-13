#!/bin/sh
pushd `dirname $0` > /dev/null
source ./common.sh
cd $service_dir
npm run pm2-start:$app_env