FROM node:20.18.0

#install git
RUN apt-get update && apt-get install -y git

WORKDIR /app

#install npm package based on packages.json
COPY package.json ./
RUN npm install