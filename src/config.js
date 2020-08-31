export default {
MAX_ATTACHMENT_SIZE: 5000000,
STRIPE_KEY: "pk_test_51HLXfoIiRk0GYIsbYq8T9mWmlsldrGVBaIGE24Rxbst9lqRapg4WN7F3YlewOPg7CA9e4ChC7d72yzIxkNzrnMzi004StJGjgW",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-application-attachment"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://8japt8yjyl.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_wSswHRprv",
    APP_CLIENT_ID: "4anu7f62h0e2jrtiuqrec3vtt3",
    IDENTITY_POOL_ID: "us-east-2:041402fe-14cf-4694-8c2c-020285862889"
  }
};
