import { GET_PRODUCT } from './type';

export const getProduct = (data) => {
  return {
    type: GET_PRODUCT,
    payload: data,
  };
};
