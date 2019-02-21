FROM node:10-alpine

WORKDIR /expensetracker

# keep only dependencies inside image
# mount code from host filesystem
COPY package.json package.json

RUN npm install

ENTRYPOINT npm run start-dev
#entrypoint is not skipped
