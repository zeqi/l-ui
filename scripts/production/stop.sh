#!/bin/sh
pushd `dirname $0` > /dev/null
source ./common.sh

pid_file=$pm2_home"/pm2.pid"
if [ -f $pid_file ]; then
  service_pid=$(cat $pid_file)
  echo $app_env" $service_name The previous version service pid:"$service_pid
  isalive=`ps -ax | awk '{ print $1 }' | grep -e "^${service_pid}$"`
  if [ -n "$isalive" ]; then
    cd $service_dir
    kill $isalive
    echo $service_name" env:$app_env pid:$isalive is killed!"
  else
   echo $service_name" env:$app_env process exit"
  fi
fi