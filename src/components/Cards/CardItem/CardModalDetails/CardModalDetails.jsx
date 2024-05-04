import Icon from '../../../Icon/Icon';
import {
  formatPrice,
  countReviews,
  formatLocation,
} from '../../../../helpers/format-card-info';

import s from './CardModalDetails.module.css';
import { useState } from 'react';
import Features from '../../Features/Features';
import Reviews from '../../Reviews/Reviews';

const CardModalDetails = ({ advert, isAllFeatures }) => {
  const [toggledTab, setToggleTab] = useState(1);

  const handleTabToggle = (index) => {
    setToggleTab(index);
  };

  const { name, price, rating, location, description, gallery, reviews } =
    advert;
  const formatedPrice = formatPrice(price);
  const countedReviews = countReviews(reviews);
  const formatedLocation = formatLocation(location);

  return (
    <div className={s.cardModalDetailBox}>
      <h2 className={s.cardTitle}>{name}</h2>

      <div className={s.scrollContainer}>
        <div className={s.iconsReviewsLocationBox}>
          <Icon id={'star'} size="20" fill="#ffc531" stroke="ffc531" />
          <p className={s.reviewsText}>
            {rating}({countedReviews} Reviews)
          </p>
          <Icon id={'map-pin'} size="16" />
          <p className={s.locationText}>{formatedLocation}</p>
        </div>
        <p className={s.priceText}>{formatedPrice}</p>
        <ul className={s.galleryWrapper}>
          {gallery?.map((image, index) => (
            <li className={s.imagesBox} key={index}>
              <img src={image} alt={name} />
            </li>
          ))}
        </ul>
        <p className={s.detailsText}>{description}</p>
        <ul className={s.tabsList}>
          <li
            className={
              toggledTab === 1 ? `${s.tabItem} ${s.currentTab}` : `${s.tabItem}`
            }
            onClick={() => handleTabToggle(1)}
          >
            Features
          </li>
          <li
            className={
              toggledTab === 2 ? `${s.tabItem} ${s.currentTab}` : `${s.tabItem}`
            }
            onClick={() => handleTabToggle(2)}
          >
            Reviews
          </li>
        </ul>
        {toggledTab === 1 && (
          <Features advert={advert} isAllFeatures={isAllFeatures} />
        )}
        {toggledTab === 2 && <Reviews advert={advert} />}
      </div>
    </div>
  );
};

export default CardModalDetails;
