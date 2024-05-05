import axios from 'axios';

const apiInstance = axios.create({
  baseURL: 'https://65c6291fe5b94dfca2e1165b.mockapi.io/',
});

export const apiGetAdverts = async () => {
  const { data } = await apiInstance.get('/adverts');
  return data;
};
