FROM node:10-alpine

WORKDIR /expensetracker

# keep only dependencies inside image
# mount code from host filesystem

COPY package.json .

RUN npm install
