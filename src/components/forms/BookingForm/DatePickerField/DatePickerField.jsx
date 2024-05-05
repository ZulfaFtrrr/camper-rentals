import DatePicker from 'react-datepicker';
import { forwardRef } from 'react';
import { CustomInput } from '../CustomInput/CustomInput';

import './DatePickerField.css';

export const DatePickerField = forwardRef(function DatePickerField(
  { value, setFieldValue, className },
  ref
) {
  return (
    <label>
      <DatePicker
        ref={ref}
        customInput={<CustomInput className={className} />}
        name="date"
        selected={value}
        value={value}
        onChange={(value) => {
          setFieldValue('date', value);
        }}
        formatWeekDay={(nameOfDay) => nameOfDay.toUpperCase().slice(0, 3)}
        dateFormat="dd/MM/yyyy"
        minDate={new Date()}
        calendarStartDay={1}
      />
    </label>
  );
});
