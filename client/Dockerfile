# Dockerfile for React client
FROM node:16-alpine

# copy local files to app folder
COPY . /app

# Changer le propriétaire du répertoire /app à l'utilisateur node
RUN chown -R node:node /app

# Changer l'utilisateur courant à appuser
USER node

# Working directory be app
WORKDIR /app

# Installing dependencies, you'll most likely see warnings, you can ignore
# most of these.
RUN npm i

#RUN npm install node-sass
EXPOSE 3000

CMD ["npm","start"]
