const dev = {
  STRIPE_KEY: "pk_test_51HLXfoIiRk0GYIsbYq8T9mWmlsldrGVBaIGE24Rxbst9lqRapg4WN7F3YlewOPg7CA9e4ChC7d72yzIxkNzrnMzi004StJGjgW",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1o900l74nywiv"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://dii8arxpwc.execute-api.us-east-2.amazonaws.com/dev/notes"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_XjzRFCNwH",
    APP_CLIENT_ID: "1omni1uj08rtpkbhdjtvab2ijq",
    IDENTITY_POOL_ID: "us-east-2:01c007ec-cc7e-42f5-9eb9-aa8e9c90caa6"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_51HLXfoIiRk0GYIsbYq8T9mWmlsldrGVBaIGE24Rxbst9lqRapg4WN7F3YlewOPg7CA9e4ChC7d72yzIxkNzrnMzi004StJGjgW",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-pnvgraszz49v"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://n2ieijt4ik.execute-api.us-east-2.amazonaws.com/prod/notes"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_b27hD8tt5",
    APP_CLIENT_ID: "64nbc2eah4274kf78ji2p9qq",
    IDENTITY_POOL_ID: "us-east-2:729d32e4-8ca6-4190-94ed-c127a87483b0"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
