FROM amazon/aws-lambda-nodejs:14
COPY handler.ts package*.json tsconfig.json webpack.config.js ./
RUN npm i
RUN npx webpack
CMD [ "handler.hello" ]