#  Dockerfile for Node Express Backend
FROM node:15.1-alpine

# Create App Directory
COPY . /app

# Changer le propriétaire du répertoire /app à l'utilisateur node
RUN chown -R node:node /app

# Changer l'utilisateur courant à appuser
USER node

# Working directory be app
WORKDIR /app

# Installing dependencies.
RUN npm install cors
RUN npm i -g nodemon
RUN npm i


EXPOSE 5000

CMD ["npm","start"]
