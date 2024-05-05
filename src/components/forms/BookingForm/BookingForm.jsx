import { useFormik } from 'formik';
import 'react-datepicker/dist/react-datepicker.css';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Button from '../../Button/Button';
import { DatePickerField } from './DatePickerField/DatePickerField';
import { bookingFormSchema } from '../../../schemas/bookingFormSchema';

import s from './BookingForm.module.css';
import { toast } from 'react-toastify';

const BookingForm = () => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setSubmitting,
    resetForm,
    setFieldValue,
  } = useFormik({
    initialValues: {
      username: '',
      email: '',
      date: '',
      comment: '',
    },
    validationSchema: bookingFormSchema,
    onSubmit: () => {
      // console.log(values);
      toast.success('Success booking');
      resetForm();
      setSubmitting(false);
      window.location.reload(); //reload page on success
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
          <DatePickerField
            value={values.date}
            setFieldValue={setFieldValue}
            className={`${s.input} ${touched.comment && errors.comment}`}
          />
          <ErrorMessage errorMessage={errors.date} touched={touched.date} />
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
