import { showLoading, hideLoading } from '@/libs/loading';

export default (instance) => {
  // Add a request interceptor
  instance.interceptors.request.use((instance) => {
    if(instance.config.disableLoading !== "true") {
      showLoading();
    }
    return instance;
  }, (error) => {
    return Promise.reject(error);
  });

  // Add a response interceptor
  instance.interceptors.response.use((response) => {
    hideLoading();
    return response;
  }, (error) => {
    hideLoading();
    return Promise.reject(error);
  });
};
