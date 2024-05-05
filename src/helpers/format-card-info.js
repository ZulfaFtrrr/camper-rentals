export const formatPrice = (price) => '€' + price + '.00';

export const countReviews = (reviews) => {
  return reviews?.reduce((total) => {
    return total + 1;
  }, 0);
};

export const formatLocation = (location) =>
  location?.split(',').reverse().join(', ');

export const formatEngine = (engine) =>
  engine?.charAt(0).toUpperCase() + engine?.slice(1);

export const formatTransmission = (transmission) =>
  transmission?.charAt(0).toUpperCase() + transmission?.slice(1);

export const formatForm = (form) => {
  let index = 0;
  for (let i = 0; i < form.length; i++) {
    if (form[i].toUpperCase() === form[i]) {
      index = i;
      break;
    }
  }
  if (index === 0) return form.charAt(0).toUpperCase() + form.slice(1);
  const arr = [form.slice(0, index), form.slice(index)];
  const first = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);
  const second = arr[1].charAt(0).toLowerCase() + arr[1].slice(1);
  return first + ' ' + second;
};
