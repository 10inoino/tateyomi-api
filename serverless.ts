import type { AWS } from '@serverless/typescript';

const serverlessConfiguration: AWS = {
  service: 'tateyomi-api',
  frameworkVersion: '2',
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    region: 'ap-northeast-1',
    apiGateway: {
      minimumCompressionSize: 1024,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
    lambdaHashingVersion: '20201221',
  },
  // import the function via paths
  functions: {
    hello: {
      image: 'xxx' // 仮設定
    }
  }
};

module.exports = serverlessConfiguration;
