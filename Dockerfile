ARG NODE_VERSION=19-alpine3.16
FROM node:${NODE_VERSION}
EXPOSE 8080
RUN apk update && apk add bash
WORKDIR /code
COPY *.json .
COPY server.js .
COPY pages/* pages
RUN npm install
//RUN npm add express
//RUN npm add body-parser
CMD ["node", "server.js"]
