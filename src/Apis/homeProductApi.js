import axiosClient from './axiosClient';

const homeProductApi = {
  getAll(params) {
    const url = '/home/product';
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/home/products/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = '/home/product';
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/home/product/${data.id}`;
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `/home/product/${id}`;
    return axiosClient.delete(url);
  },
};

export default homeProductApi;
