const axios = require('axios');

const commonAxios = axios.create({
  baseURL: 'https://simple-contact-crud.herokuapp.com/',
});

commonAxios.interceptors.response.use(
  function(response) {
    const {data} = response;
    // if (data.code != 0) {
    //   const error = new Error(data.message || 'Unknown error.');
    //   error.data = data.data;
    //   throw error;
    // }
    return response.data;
  },
  function(error) {
    return Promise.reject(error);
  },
);

export {commonAxios};
