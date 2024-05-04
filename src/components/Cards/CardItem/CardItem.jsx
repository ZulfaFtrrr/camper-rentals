import Icon from '../../Icon/Icon';
import Button from '../../Button/Button';

import s from './CardItem.module.css';
import { useEffect, useState } from 'react';
import Modal from '../../Modal/Modal';

import {
  formatPrice,
  countReviews,
  formatLocation,
} from '../../../helpers/format-card-info';
import CardModalDetails from './CardModalDetails/CardModalDetails';
import Services from '../Services/Services';

import {
  addToFavorites,
  removeFromFavorites,
} from '../../../redux/adverts/advertsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../../redux/adverts/advertsSelectors';

const CardItem = ({ advert, isFavoritesPage }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isAllFeatures, setIsAllFeatures] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const favorites = useSelector(selectFavorites);

  useEffect(() => {
    if (isFavoritesPage) {
      return setIsFavorite(true);
    }
    const isAdvertInFavorites = favorites?.some(
      (favorite) => favorite._id === advert._id
    );
    setIsFavorite(isAdvertInFavorites);
  }, [favorites, advert, isFavoritesPage]);

  const { name, price, rating, location, description, gallery, reviews } =
    advert;

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setIsAllFeatures(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsAllFeatures(false);
  };

  const handleToggleFavorite = () => {
    setIsFavorite((prevState) => !prevState);

    if (!isFavorite) {
      dispatch(addToFavorites(advert));
    } else {
      dispatch(removeFromFavorites(advert._id));
    }
  };

  const formatedPrice = formatPrice(price);
  const countedReviews = countReviews(reviews);
  const formatedLocation = formatLocation(location);

  return (
    <>
      <li className={s.cardsItem}>
        {/* <div className={s.cardBox}> */}
        <div className={s.imageContainer}>
          <img src={gallery[0]} alt={name} />
        </div>
        <div className={s.cardInfo}>
          <div className={s.titlePriceIconBox}>
            <h2 className={s.cardTitle}>{name}</h2>
            <div className={s.priceHeartBox}>
              <p className={s.priceText}>{formatedPrice}</p>
              <button
                type="button"
                className={s.favoriteBtn}
                onClick={handleToggleFavorite}
              >
                <Icon
                  id={'heart'}
                  size="24"
                  fill={isFavorite ? '#E44848' : 'none'}
                  stroke={isFavorite ? '#E44848' : '#101828'}
                />
              </button>
            </div>
          </div>

          <div className={s.iconsReviewsLocationBox}>
            <Icon id={'star'} size="20" fill="#ffc531" stroke="ffc531" />
            <p className={s.reviewsText}>
              {rating}({countedReviews} Reviews)
            </p>
            <Icon id={'map-pin'} size="16" />
            <p className={s.locationText}>{formatedLocation}</p>
          </div>
          <p className={s.detailsText}>{description}</p>
          <Services advert={advert} isAllFeatures={isAllFeatures} />
          <Button className="showMoreCardBtn" onClick={handleOpenModal}>
            Show more
          </Button>
        </div>
        {/* </div> */}
      </li>
      {isModalOpen && (
        <Modal className="card-modal" onClose={handleCloseModal}>
          <CardModalDetails
            advert={advert}
            onClose={handleCloseModal}
            isAllFeatures={isAllFeatures}
          />
        </Modal>
      )}
    </>
  );
};

export default CardItem;

{
  /* {form === 'van' && (
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
          )} */
}

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
