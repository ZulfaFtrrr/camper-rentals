import * as Yup from 'yup';
import { LOCATION_REGEX } from '../helpers/regexPatterns';
import { LOCATION_MESSAGE } from '../helpers/constants';

export const filterFormSchema = Yup.object().shape({
  location: Yup.string().trim().matches(LOCATION_REGEX, LOCATION_MESSAGE),
  details: Yup.array(), //enum ?
  form: Yup.string(),
});
