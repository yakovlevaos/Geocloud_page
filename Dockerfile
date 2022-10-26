FROM node:16-alpine

WORKDIR /ui
ENV GENERATE_SOURCEMAP=false

COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
