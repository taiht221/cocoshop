import axios from 'axios';
// import {useRouteMatch} from 'react-router-dom';
const URL = 'https://cfd-reactjs.herokuapp.com';

export const callCategory = () => {
  return axios.get(`${URL}/categories`);
};
// export const callItem = () => {
//   return axios.get(`${URL}/product`);
// };
export const callItem = (data) => {
  if (data.id) {
    return axios.get(
      `${URL}/product?categories=${data.id}&&page=${data.pageQueryParam}&&sort=${
        data.sortQueryParam || 'real_price.-1'
      }`
    );
  } else {
    return axios.get(`${URL}/product?page=${data.pageQueryParam}&&sort=${data.sortQueryParam || 'real_price.-1'}`);
  }
};

export const callhomeProduct = () => {
  return axios.get(`${URL}/home/product`);
};
