import { showLoading, hideLoading } from '@/libs/loading';

export default (instance) => {
  // Add a request interceptor
  instance.interceptors.request.use((instance) => {
    if(instance.config.disableLoading !== "true") {
      showLoading();
    }
    return instance;
  }, (error) => {
    console.log(error);
    return Promise.reject(error);
  });

  // Add a response interceptor
  instance.interceptors.response.use((response) => {
    hideLoading();
    return response;
  }, (error) => {
    console.log(error)
    return Promise.reject(error);
  });
};
