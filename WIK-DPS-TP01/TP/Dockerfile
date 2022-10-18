FROM node:16.14.0
WORKDIR /TP
COPY . /TP
RUN useradd webUser
RUN su - webUser
RUN npm install
RUN npx tsc
CMD [ "node", "build/App.js" ]