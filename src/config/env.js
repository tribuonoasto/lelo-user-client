const envConfig = {
  dev: {
    // dev
    apiPrefix: 'http://194.233.92.65:3000'
  },
  prod: {
    apiPrefix: 'http://194.233.92.65:3000'

  }
};

const curEnvConfig = envConfig[import.meta.env.VITE_APP_ENV];
console.log(curEnvConfig, import.meta.env.VITE_APP_ENV)

export default curEnvConfig;
