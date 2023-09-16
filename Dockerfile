FROM node:16-alpine
WORKDIR /usr/app
COPY package.json ./
COPY yarn.lock ./
COPY src src
RUN yarn