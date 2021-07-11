FROM amazon/aws-lambda-nodejs:14
COPY package*.json tsconfig.json ./
COPY src/ src/
RUN npm i
CMD [ "handler.handler" ]