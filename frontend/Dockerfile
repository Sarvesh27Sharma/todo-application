FROM node:slim
LABEL authors="sarvesh27sharma"
WORKDIR /todo-app/
COPY public/ /todo-app/public
COPY src/ /todo-app/src
COPY package.json /todo-app/
RUN npm install
CMD ["npm", "start"]