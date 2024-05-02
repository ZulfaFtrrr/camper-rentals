import Icon from '../../Icon/Icon';
import image from '../../../assets/static/images/car-test.png';
import Button from '../../Button/Button';

import s from './CardItem.module.css';

const CardItem = ({ advert }) => {
  //   console.log(advert);
  const {
    name,
    price,
    rating,
    location,
    adults,
    children,
    engine,
    transmission,
    form,
    description,
    details: { kitchen, beds, shower, TV },
    gallery,
    reviews,
  } = advert;

  const formatedPrice = price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'EUR',
  });
  //?

  const reviewsNumber = reviews?.reduce((total) => {
    return total + 1;
  }, 0);

  const formatedLocation = location?.split(',').reverse().join(', ');
  const formatedEngine = engine?.charAt(0).toUpperCase() + engine?.slice(1);
  //   const formatedTransmission =
  //     transmission?.charAt(0).toUpperCase() + transmission?.slice(1);

  return (
    <li className={s.cardsItem}>
      {/* <div className={s.cardBox}> */}
      <div className={s.imageContainer}>
        <img src={gallery[0]} alt="car" />
      </div>
      <div className={s.cardInfo}>
        <div className={s.titlePriceIconBox}>
          <h2 className={s.cardTitle}>{name}</h2>
          <div className={s.priceHeartBox}>
            <p className={s.priceText}>{formatedPrice}</p>
            <Icon id={'heart'} size="24" />
          </div>
        </div>

        <div className={s.iconsReviewsLocationBox}>
          <Icon id={'star'} size="16" />
          <p className={s.reviewsText}>
            {rating}({reviewsNumber} Reviews)
          </p>
          <Icon id={'map-pin'} size="16" />
          <p className={s.locationText}>{formatedLocation}</p>
        </div>
        <p className={s.detailsText}>{description}</p>

        <div className={s.filtersWrapper}>
          <div className={s.filtersBox}>
            <Icon id={'people'} fill="#101828" stroke="none" />
            <p>{adults} adults</p>
          </div>
          {transmission === 'automatic' && (
            <div className={s.filtersBox}>
              <Icon id={'gearbox'} />
              <p>Automatic</p>
            </div>
          )}
          <div className={s.filtersBox}>
            <Icon id={'fuel'} fill="#101828" stroke="none" />
            <p>{formatedEngine}</p>
          </div>
          {kitchen && (
            <div className={s.filtersBox}>
              <Icon id={'food'} stroke="#101828" />
              <p>Kitchen</p>
            </div>
          )}
          <div className={s.filtersBox}>
            <Icon id={'bed'} />
            <p>{beds} beds</p>
          </div>
          <div className={s.filtersBox}>
            <Icon id={'ac'} fill="#101828" stroke="none" />
            <p>AC</p>
          </div>
          {shower !== 0 && (
            <div className={s.filtersBox}>
              <Icon id={'shower'} />
              <p>Shower/WC</p>
            </div>
          )}
          {TV !== 0 && (
            <div className={s.filtersBox}>
              <Icon id={'tv'} />
              <p>TV</p>
            </div>
          )}
          {/* {form === 'van' && (
            <div className={s.filtersBox}>
              <Icon id={'fuvanlvanly'} />
              <p>Van</p>
            </div>
          )}
          {form === 'fully integrated' && (
            <div className={s.filtersBox}>
              <Icon id={'fully'} />
              <p>Fully Integrated</p>
            </div>
          )}
          {form === 'alcove' && (
            <div className={s.filtersBox}>
              <Icon id={'alcove'} size="40" />
              <p>Alcove</p>
            </div>
          )} */}
        </div>
        <Button className="showMoreCardBtn">Show more</Button>
      </div>
      {/* </div> */}
    </li>
  );
};

export default CardItem;

// <svg
//   xmlns="http://www.w3.org/2000/svg"
//   width="32"
//   height="33"
//   viewBox="0 0 32 33"
//   fill="none"
// >
//   <path
//     d="M24 26.5H8C5.784 26.5 4 24.716 4 22.5V12.5C4 10.284 5.784 8.5 8 8.5H24C26.216 8.5 28 10.284 28 12.5V22.5C28 24.716 26.216 26.5 24 26.5Z"
//     stroke="#101828"
//     stroke-width="1.8"
//     stroke-linecap="round"
//     stroke-linejoin="round"
//   />
//   <path
//     d="M12 30.5H20"
//     stroke="#101828"
//     stroke-width="1.8"
//     stroke-linecap="round"
//     stroke-linejoin="round"
//   />
//   <path
//     d="M16 8.5L22 2.5"
//     stroke="#101828"
//     stroke-width="1.8"
//     stroke-linecap="round"
//     stroke-linejoin="round"
//   />
//   <path
//     d="M16 8.5L10 2.5"
//     stroke="#101828"
//     stroke-width="1.8"
//     stroke-linecap="round"
//     stroke-linejoin="round"
//   />
// </svg>;
