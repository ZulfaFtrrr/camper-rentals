import { formatForm } from '../../../helpers/format-card-info';
import BookingForm from '../../forms/BookingForm/BookingForm';
import Services from '../Services/Services';
import s from './Features.module.css';

const Features = ({ advert, isAllFeatures }) => {
  const { form, length, width, height, tank, consumption } = advert;
  const formatedForm = formatForm(form);
  // console.log(formatedForm);
  return (
    <div className={s.featuresWrapper}>
      <div>
        <Services
          advert={advert}
          className="modal-services"
          isAllFeatures={isAllFeatures}
        />
        <h2 className={s.vehicleDetailsTitle}>Vehicle details</h2>
        <ul className={s.vehicleDetailsList}>
          <li className={s.vehicleDetailsItem}>
            <h3 className={s.vehicleDetailsSubTitle}>Form</h3>
            <p>{formatedForm}</p>
          </li>
          <li className={s.vehicleDetailsItem}>
            <h3 className={s.vehicleDetailsSubTitle}>Length</h3>
            <p>{length}</p>
          </li>
          <li className={s.vehicleDetailsItem}>
            <h3 className={s.vehicleDetailsSubTitle}>Width</h3>
            <p>{width}</p>
          </li>
          <li className={s.vehicleDetailsItem}>
            <h3 className={s.vehicleDetailsSubTitle}>Height</h3>
            <p>{height}</p>
          </li>
          <li className={s.vehicleDetailsItem}>
            <h3 className={s.vehicleDetailsSubTitle}>Tank</h3>
            <p>{tank}</p>
          </li>
          <li className={s.vehicleDetailsItem}>
            <h3 className={s.vehicleDetailsSubTitle}>Consumption</h3>
            <p>{consumption}</p>
          </li>
        </ul>
      </div>
      <BookingForm />
    </div>
  );
};

export default Features;
