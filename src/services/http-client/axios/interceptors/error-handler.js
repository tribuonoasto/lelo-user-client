import { ElMessage } from 'element-plus'


function errorHandler(data) {
  const { msg } = data;

  ElMessage.error({
    message: msg || 'Permintaan gagal, coba lagi nanti',
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
      msg: ''
    };

    if (error.response) {
      data.msg = error.response.data && error.response.data.msg;
    } else {
      data.msg = error.message;
    }

    errorHandler(data);

    return Promise.reject(error);
  });
};
