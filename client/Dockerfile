# Dockerfile for React client
FROM node:15.1-alpine

RUN useradd -ms /bin/bash elise
USER elise
# copy local files to app folder
COPY . /usr/src/app

# Working directory be app
WORKDIR /usr/src/app

# Installing dependencies, you'll most likely see warnings, you can ignore
# most of these.
RUN npm i
#RUN npm install node-sass
EXPOSE 3000

CMD ["npm","start"]