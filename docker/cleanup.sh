#!/usr/bin/env bash

docker rm $(docker ps -a -q)

docker rmi $(docker images | awk '$2 == "<node>" { print $3 } ')

docker volume rm $(docker volume ls -qf dangling=true)