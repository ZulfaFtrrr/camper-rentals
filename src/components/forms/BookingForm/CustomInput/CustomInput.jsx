import { forwardRef } from 'react';
import Icon from '../../../Icon/Icon';

import s from './CustomInput.module.css';

export const CustomInput = forwardRef(function CustomInput(
  {
    value,
    onClick,
    className,
  },
  ref
) {
  return (
    <div className={s.inputWrapper}>
      <input
        ref={ref}
        type="text"
        name="date"
        value={value}
        placeholder="Booking date"
        className={`${s.input} ${className}`}
        onClick={onClick}
        readOnly
      />
      <div className={s.iconBox}>
        <Icon id={'schedule'} />
      </div>
    </div>
  );
});

