FROM node:13-alpine

WORKDIR ./

COPY package*.json ./

RUN npm install

COPY . .

ENTRYPOINT [ "node", "index.js" ]