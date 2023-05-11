import axios from 'axios';
import showLoading from './interceptors/show-loading';
import errorHandler from './interceptors/error-handler';

const instance = axios.create({
  timeout: 20000,
  transformResponse: [(data) => {
    // Do whatever you want to transform the data
    if (data && typeof data === 'string') {
      data = data.replace(/:\s*(\d{15,})/g, ':"$1"');
    }
    try {
      data = JSON.parse(data);
    } catch (e) {
      data = data || {};
    }
    return data;
  }]
});

// Show Error Default
errorHandler(instance);

// Show Loading Default
showLoading(instance);



export default instance;
