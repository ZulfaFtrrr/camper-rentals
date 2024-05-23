import axios from 'axios';

const apiInstance = axios.create({
  baseURL: 'https://65c6291fe5b94dfca2e1165b.mockapi.io/',
});

export const apiGetAdverts = async (page, limit = 4) => {
  const url = new URL('https://65c6291fe5b94dfca2e1165b.mockapi.io/adverts');

  url.searchParams.append('page', page);
  url.searchParams.append('limit', limit);
  const { data } = await apiInstance.get(url.href);

  console.log(url.href);
  return data;
};
