import { useState } from 'react';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import s from './Filter.module.css';

const Filter = () => {
//   const handleChange = (e) => {};
  return (
    <div className={s.filterWrapper}>
      <form action="">
        <label className={s.locationLabel} htmlFor="location">
          Location
        </label>
        <div className={s.inputIconBox}>
          <input
            type="text"
            name="location"
            placeholder="Kyiv, Ukraine"
            className={s.locationInput}
          />
          <Icon id="map-pin" className="location-icon" />

          <p className={s.filtersText}>Filters</p>
          <h3 className={s.filtersSubtitle}>Vehicle equipment</h3>

          <div className={s.checkboxWrapper}>
            <label htmlFor="ac" className={s.customCheckbox}>
              <Icon id="ac" size="32" fill="#101828" />
              <span className={s.checkboxText}>AC</span>
              <input
                type="checkbox"
                // name="equipment"
                className={s.visuallyHidden}
                id="ac"
                // onChange={handleChange}
              />
              <span className={s.checkmark}></span>
            </label>

            <label htmlFor="gearbox" className={s.customCheckbox}>
              <Icon id="gearbox" size="32" />
              <span className={s.checkboxText}>AC</span>
              <input
                type="checkbox"
                // name="equipment"
                className={s.visuallyHidden}
                id="gearbox"
                // onChange={handleChange}
              />
              <span className={s.checkmark}></span>
            </label>

            <label htmlFor="food" className={s.customCheckbox}>
              <Icon id="food" size="32" />
              <span className={s.checkboxText}>Kitchen</span>
              <input
                type="checkbox"
                // name="equipment"
                className={s.visuallyHidden}
                id="food"
                // onChange={handleChange}
              />
              <span className={s.checkmark}></span>
            </label>

            <label htmlFor="tv" className={`${s.customCheckbox}`}>
              <Icon id="tv" size="32" />
              <span className={s.checkboxText}>TV</span>
              <input
                type="checkbox"
                name="equipment"
                //   name??
                className={s.visuallyHidden}
                id="tv"
                // value="tv"
                // onChange={handleChange}
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
                // onChange={handleChange}
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
                name="vehicle"
                className={s.visuallyHidden}
                id="van"
                // onChange={handleChange}
              />
              <span className={s.checkmark}></span>
            </label>

            <label htmlFor="fully" className={s.customCheckbox}>
              <Icon id="fully" size="32" fill="#101828" />
              <span className={s.checkboxText}>Fully integrated</span>
              <input
                type="radio"
                name="vehicle"
                className={s.visuallyHidden}
                id="fully"
                // onChange={handleChange}
              />
              <span className={s.checkmark}></span>
            </label>

            <label htmlFor="alcove" className={s.customCheckbox}>
              <Icon id="alcove" size="32" fill="#101828" />
              <span className={s.checkboxText}>Alcove</span>
              <input
                type="radio"
                name="vehicle"
                className={s.visuallyHidden}
                id="alcove"
                // onChange={handleChange}
              />
              <span className={s.checkmark}></span>
            </label>
          </div>
          <Button title="Search" className="filterSearchBtn" />
        </div>
      </form>
    </div>
  );
};

export default Filter;

//зробити ВСІ можливі чекбокси чи тільки ті які на макеті ?
