#!/bin/bash

IMAGE_NAME='cilgaiscan/nestjs-rest-api-devops-fundamentals-course'

docker build -t $IMAGE_NAME:latest .

docker push $IMAGE_NAME:latest
