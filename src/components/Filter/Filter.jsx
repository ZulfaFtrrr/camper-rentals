import { useState } from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';

import ErrorMessage from '../forms/ErrorMessage/ErrorMessage';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';

import { filterFormSchema } from '../../schemas/filterFormSchema';

import s from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAdverts,
  fetchFilteredAdverts,
  resetFilteredAdverts,
} from '../../redux/adverts/advertsOperations';
import { limit } from '../../helpers/constants';
import { hideLoadMore } from '../../redux/adverts/advertsSlice';
import { selectIsLoading } from '../../redux/adverts/advertsSelectors';
import { useLocation } from 'react-use';

const Filter = ({ page }) => {
  const dispatch = useDispatch();

  const [resetDisabled, setResetDisabled] = useState(true);
  const isLoading = useSelector(selectIsLoading);

  const location = useLocation();
  const isFavoritesPage = location.pathname === '/camper-rentals/favorites';

  //діспатчити лище якщо змінився стейт ? але юз ефект не доступний

  //   const [filterValues, setFilterValues] = useState({});

  //   const handleChange = (e) => {};
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    setSubmitting,
    resetForm,
    setFieldValue,
  } = useFormik({
    initialValues: {
      location: '', //зробити стейт Киів ?
      equipment: [], //відповідає бд окрім transmission
      form: '',
      //   details:

      //   transmission: 'automatic',

      //   airConditioner: '', //??? якщо задати 0  то знайде ж саме з 0 +  NUMBEr not STRING ?? infinity?)
      //   kitchen: '',
      //   TV: '',
      //   shower: '',

      //   form: '',

      //"panelTruck", "alcove", "fullyIntegrated" - value
    },
    validationSchema: filterFormSchema,
    onSubmit: () => {
      if (isFavoritesPage) {
        toast.success('Favs filtering in process');

        return setSubmitting(false);
      } //temporary
      //   resetForm();
      //   setSubmitting(false);
      console.log(values);

      const filters = { ...values, page };
      // setFilterValues(values)

      // if (filterValues === prevState)
      dispatch(fetchFilteredAdverts(filters))
        .unwrap()
        .then((adverts) => {
          setSubmitting(false);
          toast.success('Success filtering');
          if (adverts.length < limit) {
            dispatch(hideLoadMore());
          }
          setResetDisabled(false);
        })
        .catch(() => setSubmitting(false));
    },
  });

  const handleReset = () => {
    dispatch(resetFilteredAdverts(1))
      .unwrap()
      .then(() => {
        toast.success('Success reset');
        setResetDisabled(true);
        resetForm();
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className={s.filterWrapper}>
      <form onSubmit={handleSubmit}>
        <label className={s.locationLabel} htmlFor="location">
          Location
        </label>
        <div className={s.inputIconBox}>
          <div className={s.errorMessageBox}>
            <input
              type="text"
              name="location"
              placeholder="Ukraine, Kyiv"
              value={values.location}
              onBlur={handleBlur}
              onChange={handleChange}
              className={`${s.locationInput}  ${
                touched.location && errors.location && s.errorInput
              }`}
            />
            <ErrorMessage
              errorMessage={errors.location}
              touched={touched.location}
              className="locationErrMess"
            />
          </div>
          <Icon id="map-pin" className="location-icon" />

          <p className={s.filtersText}>Filters</p>
          <h3 className={s.filtersSubtitle}>Vehicle equipment</h3>

          <div className={s.checkboxWrapper}>
            <label htmlFor="ac" className={s.customCheckbox}>
              <Icon id="ac" size="32" fill="#101828" />
              <span className={s.checkboxText}>AC</span>
              <input
                type="checkbox"
                name="equipment"
                className={s.visuallyHidden}
                id="ac"
                onBlur={handleBlur}
                onChange={handleChange}
                value="airConditioner"
              />
              <span className={s.checkmark}></span>
            </label>

            <label htmlFor="gearbox" className={s.customCheckbox}>
              <Icon id="gearbox" size="32" />
              <span className={s.checkboxText}>Automatic</span>
              <input
                type="checkbox"
                name="equipment"
                className={s.visuallyHidden}
                id="gearbox"
                onBlur={handleBlur}
                onChange={handleChange}
                value="automatic"
              />
              <span className={s.checkmark}></span>
            </label>

            <label htmlFor="food" className={s.customCheckbox}>
              <Icon id="food" size="32" />
              <span className={s.checkboxText}>Kitchen</span>
              <input
                type="checkbox"
                name="equipment"
                className={s.visuallyHidden}
                id="food"
                onBlur={handleBlur}
                onChange={handleChange}
                value="kitchen"
              />
              <span className={s.checkmark}></span>
            </label>

            <label htmlFor="tv" className={`${s.customCheckbox}`}>
              <Icon id="tv" size="32" />
              <span className={s.checkboxText}>TV</span>
              <input
                type="checkbox"
                name="equipment"
                className={s.visuallyHidden}
                id="tv"
                onBlur={handleBlur}
                onChange={handleChange}
                value="TV"
              />
              <span className={s.checkmark}></span>
            </label>

            <label htmlFor="shower" className={s.customCheckbox}>
              <Icon id="shower" size="32" />
              <span className={s.checkboxText}>Shower/WC</span>
              <input
                type="checkbox"
                name="equipment"
                className={s.visuallyHidden}
                id="shower"
                onBlur={handleBlur}
                onChange={handleChange}
                value="shower"
              />
              <span className={s.checkmark}></span>
            </label>
          </div>

          <h3 className={s.filtersSubtitle}>Vehicle type</h3>
          <div className={s.checkboxTypeWrapper}>
            <label htmlFor="van" className={s.customCheckbox}>
              <Icon id="van" size="32" fill="#101828" />
              <span className={s.checkboxText}>Van</span>
              <input
                type="radio"
                name="type"
                className={s.visuallyHidden}
                id="van"
                onBlur={handleBlur}
                onChange={handleChange}
                value="panelTruck"
              />
              <span className={s.checkmark}></span>
            </label>

            <label htmlFor="fully" className={s.customCheckbox}>
              <Icon id="fully" size="32" fill="#101828" />
              <span className={s.checkboxText}>Fully integrated</span>
              <input
                type="radio"
                name="type"
                className={s.visuallyHidden}
                id="fully"
                onBlur={handleBlur}
                onChange={handleChange}
                value="fullyIntegrated"
              />
              <span className={s.checkmark}></span>
            </label>

            <label htmlFor="alcove" className={s.customCheckbox}>
              <Icon id="alcove" size="32" fill="#101828" />
              <span className={s.checkboxText}>Alcove</span>
              <input
                type="radio"
                name="type"
                className={s.visuallyHidden}
                id="alcove"
                onBlur={handleBlur}
                onChange={handleChange}
                value="alcove"
              />
              <span className={s.checkmark}></span>
            </label>
          </div>
          <div className={s.btnsBox}>
            <Button
              title="Search"
              className="filterSearchBtn"
              type="submit"
              // loading={true}
              loading={isSubmitting}
            />
            <Button
              title="Reset"
              className="filterResetBtn"
              type="button"
              onClick={handleReset}
              // loading={true}
              loading={isLoading && !isSubmitting}
              disabled={resetDisabled}
              loaderColor="rgba(16, 24, 40, 0.6)"
            />
          </div>
        </div>
      </form>
    </div>
  );
};
//

export default Filter;

//зробити ВСІ можливі чекбокси чи тільки ті які на макеті ?
