#!/bin/sh
# pushd `dirname $0` > /dev/null
base_dir=$(pwd -P);
source /etc/profile
app_env="production"
platform_dir="/data/apps/production_platform"
git_group="h5"
service_name="l-ui"
appspec_dir=$platform_dir"_appspec/"$service_name
service_zip=$service_name".zip";
service_dir=$platform_dir"/"$service_name
if [ ! -d $service_dir ]; then
  echo "Create dir:"$service_dir
  mkdir -p $service_dir
fi
pm2_home='/data/logs/dac/'$service_name
git_branch='production'
git_server="http://zhuxj4:12345678@gitlab.lenovopcsd.com/${git_group}/${service_name}.git"