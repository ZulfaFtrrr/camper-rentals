import axios from 'axios';

const apiInstance = axios.create({
  baseURL: 'https://65c6291fe5b94dfca2e1165b.mockapi.io/',
});

export const apiGetAdverts = async (page, limit = 4) => {
  const url = new URL('https://65c6291fe5b94dfca2e1165b.mockapi.io/adverts');

  url.searchParams.append('page', page);
  url.searchParams.append('limit', limit);
  const { data } = await apiInstance.get(url.href);

  // console.log(url.href);
  return data;
};

export const apiGetFilteredAdverts = async (params, limit = 4) => {
  // console.log(params, 'PARAMS');

  const { equipment } = params;

  const {
    filtersPage,
    location,
    type,
    equipment: [transmission],
  } = params;

  const url = new URL('https://65c6291fe5b94dfca2e1165b.mockapi.io/adverts');

  equipment.forEach((field) => {
    if (field === 'automatic') {
      url.searchParams.append('transmission', transmission);
    }
    if (field === 'airConditioner') {
      url.searchParams.append('airConditioner', 1);
    }
    if (field === 'kitchen') {
      // url.searchParams.append('kitchen', 1);
    }
    if (field === 'TV') {
      // url.searchParams.append('TV', 1);
    }
    if (field === 'shower') {
      // url.searchParams.append('shower', 1);
    }
  });

  if (location) url.searchParams.append('location', location);
  if (type) url.searchParams.append('form', type);

  //pagination
  url.searchParams.append('page', filtersPage);
  url.searchParams.append('limit', limit);

  const { data } = await apiInstance.get(url.href);

  // console.log(url.href);
  return data;
};
