#!/bin/sh
pushd `dirname $0` > /dev/null
source ./common.sh
cd $appspec_dir
unzip -o $service_zip -d $service_dir
exit 0