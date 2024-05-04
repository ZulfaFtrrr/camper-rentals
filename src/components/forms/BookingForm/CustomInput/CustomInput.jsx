import Icon from '../../../Icon/Icon';
import s from './CustomInput.module.css';

const CustomInput = ({
  value,
  onClick,
  //   handleBlur,
  //   handleChange,
  //   touched,
  //   errors,
}) => {
  return (
    <div className={s.inputWrapper}>
      <input
        type="text"
        name="date"
        value={value}
        placeholder="Booking date"
        // onBlur={handleBlur}
        // onChange={handleChange}
        // className={`${s.input} ${touched.date && errors.date && s.errorInput}`}
        className={s.input}
        onClick={onClick}
        readOnly
      />
      <div className={s.iconBox}>
        <Icon id={'schedule'} />
      </div>
    </div>
  );
};

export default CustomInput;
