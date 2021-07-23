FROM nestjs/cli

# なんかdocker.envから読んでくれないので、一旦コメントアウト
# ARG AWS_ACCESS_KEY_ID
# ARG AWS_SECRET_ACCESS_KEY

WORKDIR /var/task

COPY package*.json ./

RUN npm install