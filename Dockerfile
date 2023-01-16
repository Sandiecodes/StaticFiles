FROM node:16
EXPOSE 8080
RUN apk update && apk add bash
WORKDIR /code
COPY *.json ./
RUN npm install
COPY server.js .
COPY pages/* pages
CMD ["node", "server.js"]
