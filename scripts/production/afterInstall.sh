#!/bin/sh
pushd `dirname $0` > /dev/null
source ./common.sh
cd $appspec_dir
unzip -o $service_zip -d $service_dir
# rm -rf $service_zip
# cd $service_dir
# npm uninstall ccap
# npm install --registry=https://registry.npm.taobao.org
exit 0