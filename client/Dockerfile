# Dockerfile for React client
FROM node:16-alpine

# Creating directory app with owner being node
RUN mkdir /app && chown node:node /app
# Working directory be app
WORKDIR /app

USER node
COPY --chown=node:node package.json package-lock.json* ./

# Installing dependencies, you'll most likely see warnings, you can ignore
# most of these.
RUN npm i

# copy local files to app folder
COPY . .

#RUN npm install node-sass
EXPOSE 3000

CMD ["npm","start"]
