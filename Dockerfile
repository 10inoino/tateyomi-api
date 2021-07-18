FROM amazon/aws-lambda-nodejs:14
ARG FUNCTION_DIR="/var/task"

# Create function directory
RUN mkdir -p ${FUNCTION_DIR}

COPY package*.json tsconfig.json ${FUNCTION_DIR}
COPY src/ ${FUNCTION_DIR}/src/
COPY dist/ ${FUNCTION_DIR}

# check files
RUN ls -l

RUN npm i
CMD [ "handler.handler" ]