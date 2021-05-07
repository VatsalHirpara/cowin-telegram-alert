FROM node:13-alpine

WORKDIR ./

COPY . .

RUN npm install

ENTRYPOINT [ "node", "index.js" ]