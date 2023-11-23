#  Dockerfile for Node Express Backend
FROM node:15.1-alpine

# Create App Directory
COPY . /app

# Working directory be app
WORKDIR /app

# Installing dependencies.
RUN npm install cors
RUN npm install mariadb
RUN npm i -g nodemon
RUN npm i

EXPOSE 3001

CMD ["npm","start"]
