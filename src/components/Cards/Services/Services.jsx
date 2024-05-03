import Icon from '../../Icon/Icon';
import s from './Services.module.css';
import {
  formatEngine,
  formatTransmission,
} from '../../../helpers/format-card-info';

const Services = ({ advert, className, isAllFeatures }) => {
  const commonfiltersWrapper = `${s.filtersWrapper} ${s[className]}`;
  const {
    adults,
    engine,
    transmission,
    details: {
      kitchen,
      beds,
      shower,
      TV,
      CD,
      airConditioner,
      radio,
      hob,
      freezer,
      microwave,
      water,
      gas,
      toilet,
    },
  } = advert;
  const formatedEngine = formatEngine(engine);
  const formatedTransmission = formatTransmission(transmission);

  // console.log('render');
  return (
    <ul className={commonfiltersWrapper}>
      {adults && (
        <li className={s.filtersBox}>
          <Icon id={'people'} fill="#101828" stroke="none" />
          <p>{adults} adults</p>
        </li>
      )}
      {transmission && (
        <li className={s.filtersBox}>
          <Icon id={'gearbox'} />
          <p>{formatedTransmission}</p>
        </li>
      )}
      {engine && (
        <li className={s.filtersBox}>
          <Icon id={'fuel'} fill="#101828" stroke="none" />
          <p>{formatedEngine}</p>
        </li>
      )}
      {kitchen && (
        <li className={s.filtersBox}>
          <Icon id={'food'} stroke="#101828" />
          <p>Kitchen</p>
        </li>
      )}
      {beds && (
        <li className={s.filtersBox}>
          <Icon id={'bed'} />
          <p>{beds} beds</p>
        </li>
      )}
      {airConditioner && (
        <li className={s.filtersBox}>
          <Icon id={'ac'} fill="#101828" stroke="none" />
          <p>AC</p>
        </li>
      )}
      {shower !== 0 && (
        <li className={s.filtersBox}>
          <Icon id={'shower'} />
          <p>Shower/WC</p>
        </li>
      )}
      {freezer !== 0 && isAllFeatures && (
        <li className={s.filtersBox}>
          <Icon id={'freezer'} />
          <p>Freezer</p>
        </li>
      )}
      {microwave !== 0 && isAllFeatures && (
        <li className={s.filtersBox}>
          <Icon id={'microwave'} />
          <p>Microwave</p>
        </li>
      )}
      {gas !== 0 && isAllFeatures && (
        <li className={s.filtersBox}>
          <Icon id={'gas'} fill="#101828" stroke="none" />
          <p>Gas</p>
        </li>
      )}
      {water !== 0 && isAllFeatures && (
        <li className={s.filtersBox}>
          <Icon id={'water'} />
          <p>Water</p>
        </li>
      )}
      {toilet !== 0 && isAllFeatures && (
        <li className={s.filtersBox}>
          <Icon id={'toilet'} fill="#101828" stroke="none" />
          <p>Toilet</p>
        </li>
      )}
      {TV !== 0 && isAllFeatures && (
        <li className={s.filtersBox}>
          <Icon id={'tv'} />
          <p>TV</p>
        </li>
      )}
      {radio !== 0 && isAllFeatures && (
        <li className={s.filtersBox}>
          <Icon id={'radio'} />
          <p>Radio</p>
        </li>
      )}
      {CD !== 0 && isAllFeatures && (
        <li className={s.filtersBox}>
          <Icon id={'cd'} />
          <p>CD</p>
        </li>
      )}
      {hob !== 0 && isAllFeatures && (
        <li className={s.filtersBox}>
          <Icon id={'plate'} />
          <p>{hob} hob</p>
        </li>
      )}
      {airConditioner !== 0 && isAllFeatures && (
        <li className={s.filtersBox}>
          <Icon id={'conditioner'} />
          <p>{airConditioner} air conditioner</p>
        </li>
      )}
    </ul>
  );
};

export default Services;
