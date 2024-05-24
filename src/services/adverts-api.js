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

export const apiGetFilteredAdverts = async (params, limit = 4) => {
  // page
  const {
    page,
    location,
    form,
    equipment: [transmission, airConditioner, kitchen, TV, shower],
  } = params;

  const url = new URL('https://65c6291fe5b94dfca2e1165b.mockapi.io/adverts');

  // треба апендити якщо не пусат строка?
  //треба лише якщо більше 1 повертати
  if (location) url.searchParams.append('location', location);
  if (form) url.searchParams.append('form', form);
  if (transmission) url.searchParams.append('transmission', transmission);
  if (airConditioner) url.searchParams.append('airConditioner', airConditioner);
  if (kitchen) url.searchParams.append('kitchen', kitchen);
  if (TV) url.searchParams.append('TV', TV);
  if (shower) url.searchParams.append('shower', shower);

  //pagination
  url.searchParams.append('page', page);
  url.searchParams.append('limit', limit);

  const { data } = await apiInstance.get(url.href);

  console.log(url.href);
  console.log(data, 'POST ANSWER'); //повертає id
  return data;
};
