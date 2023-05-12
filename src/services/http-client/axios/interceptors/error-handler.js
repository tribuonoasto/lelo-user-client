import { ElMessage } from 'element-plus'


function errorHandler(data) {
  const { message } = data;

  ElMessage.error({
    message: message || 'Permintaan gagal, coba lagi nanti',
    duration: 3000
  });

}

export default (instance) => {
  // Add a response interceptor
  instance.interceptors.response.use((response) => {
    const data = response.data;

    if (data.status === '0') {
      if (response.config.showDefaultError !== false) {
        errorHandler(data);
      }
    }

    return response;
  }, (error) => {
    // Do something with response error
    const data = {
      error,
      message: ''
    };

    if (error.response) {
      data.message = error.response.data.message;
    } else {
      data.message = error.message;
    }

    errorHandler(data);

    return Promise.reject(error);
  });
};
