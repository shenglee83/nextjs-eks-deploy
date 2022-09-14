FROM node:latest

RUN mkdir -p /app

WORKDIR /app

RUN npm install

ENV NODE_ENV production

COPY package.json ./

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]