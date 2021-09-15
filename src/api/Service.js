import axios from 'axios';

const BASE_URL = 'https://api.coingecko.com/api';

export const getHeader = () => {
  var header = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  return header;
};

export const getData = async url => {
  return await axios
    .get(BASE_URL + url, {
      headers: getHeader(),
    })
    .then(res => {
      return res;
    })
    .catch(error => {
      if (error?.response) {
        return error?.response;
      }
      return {status: 400};
    });
};
