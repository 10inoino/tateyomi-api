FROM amazon/aws-lambda-nodejs:14
COPY package*.json ./
COPY tsconfig.* ./
COPY webpack.config.js ./
COPY /src/ ./src
RUN npm i
RUN ls -ld $(find /var/task -type d -name 'node_modules' -prune -o -type f -print )
RUN npx webpack
CMD [ "handler.hello" ]