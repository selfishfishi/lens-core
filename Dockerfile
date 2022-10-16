# syntax=docker/dockerfile:1.3
FROM ethereum/solc:0.8.7 as build-deps

FROM node:16 as build-packages

COPY package*.json ./
COPY tsconfig*.json ./

RUN npm ci --quiet
RUN npm install hardhat

FROM node:16

WORKDIR /src

COPY . .
COPY --from=build-deps /usr/bin/solc /usr/bin/solc
COPY --from=build-packages /node_modules /node_modules

RUN npm run compile

ENTRYPOINT ["npx", "hardhat", "node"]
