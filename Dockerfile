FROM node:16.18.1-alpine3.16

RUN apk add --no-cache bash

RUN npm install -g @nestjs/cli@8.2.5

USER node

WORKDIR /app