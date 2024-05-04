import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Button from '../../Button/Button';

import { bookingFormSchema } from '../../../schemas/bookingFormSchema';

import s from './BookingForm.module.css';
import { useState } from 'react';
import Icon from '../../Icon/Icon';
import CustomInput from './CustomInput/CustomInput';

//{onClose}
const BookingForm = () => {
  //   const dispatch = useDispatch();

  const [selectedDate, setSelectedDate] = useState(null);

  const [toggleCalendar, setToggleCalendar] = useState(false);

  const handleToggleCalendar = () => {
    setToggleCalendar(!toggleCalendar);
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setSubmitting,
    resetForm,
  } = useFormik({
    initialValues: {
      username: '',
      email: '',
      date: selectedDate,
      comment: '',
    },
    validationSchema: bookingFormSchema,
    onSubmit: () => {
      // dispatch(updateUserData(values))
      //   .unwrap()
      //   .then(() => {
      //     setSubmitting(false);
      //     resetForm();
      //     onClose();
      //   })
      //   .catch((error) => console.error(error));
    },
  });

  return (
    <div className={s.bookingFormContainer}>
      <h3 className={s.bookingFormTitle}>Book your campervan now</h3>
      <p className={s.bookingFormText}>
        Stay connected! We are always ready to help you.
      </p>

      <form className={s.bookingForm} onSubmit={handleSubmit}>
        <div className={s.inputWrapper}>
          <input
            type="text"
            placeholder="Name"
            name="username"
            value={values.username}
            onBlur={handleBlur}
            onChange={handleChange}
            className={`${s.input}  ${
              touched.username && errors.username && s.errorInput
            }`}
          />
          <ErrorMessage
            errorMessage={errors.username}
            touched={touched.username}
          />
        </div>

        <div className={s.inputWrapper}>
          <input
            type="email"
            placeholder="Email"
            value={values.email}
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            className={`${s.input} ${
              touched.email && errors.email && s.errorInput
            }`}
          />
          <ErrorMessage errorMessage={errors.email} touched={touched.email} />
        </div>

        <div className={s.inputWrapper}>
          {/* <input
            type="text"
            name="date"
            placeholder="Booking date"
            onBlur={handleBlur}
            onChange={handleChange}
            className={`${s.input} ${
              touched.date && errors.date && s.errorInput
            }`}
          /> */}

          {/* <div className={s.datePicker}></div> */}
          <label>
            <DatePicker
              customInput={
                <CustomInput
                // onClick={handleToggleCalendar}
                // value={values.date}
                // handleBlur={handleBlur}
                // handleChange={handleChange}
                // touched={touched}
                // errors={errors}
                />
              }
              // value={values.date}
              // selected={values.date}
              // onChange={handleChange}
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              // onClick={handleToggleCalendar}
              calendarStartDay={1}
              className={s.bookingCalendar}
              // closeOnScroll={true}
            />
          </label>
          {/* <ErrorMessage
            errorMessage={errors.date}
            touched={touched.date}
          /> */}
        </div>
        <div className={s.inputWrapper}>
          <input
            type="text"
            name="comment"
            value={values.comment}
            placeholder="Comment"
            onBlur={handleBlur}
            onChange={handleChange}
            className={`${s.input} ${
              touched.comment && errors.comment && s.errorInput
            }`}
          />
          <ErrorMessage
            errorMessage={errors.comment}
            touched={touched.comment}
          />
        </div>
        <Button type="submit" className="booking-submit-btn">
          Send
        </Button>
      </form>
    </div>
  );
};

export default BookingForm;
