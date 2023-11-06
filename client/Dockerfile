# Dockerfile for React client
FROM node:16-alpine

# Creating directory app with owner being node
RUN mkdir /app && chown node:node /app

USER root

# Working directory be app
WORKDIR /app

# copy local files to app folder
COPY . /app/

# Installing dependencies, you'll most likely see warnings, you can ignore
# most of these.
RUN npm i

#RUN npm install node-sass
EXPOSE 3000

CMD ["npm","start"]
