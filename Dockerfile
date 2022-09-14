FROM node:latest

RUN npm install

ENV NODE_ENV production

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]