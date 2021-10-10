FROM node:latest

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm install appoptics-apm

EXPOSE 3000

CMD ["npm", "run", "start"]