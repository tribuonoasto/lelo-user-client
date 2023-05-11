const envConfig = {
  dev: {
    // dev
    apiPrefix: 'http://localhost:3000'
  },
  prod: {
    apiPrefix: 'http://localhost:3000'

  }
};

const curEnvConfig = envConfig[import.meta.env.VITE_APP_ENV];
console.log(curEnvConfig)

export default curEnvConfig;
