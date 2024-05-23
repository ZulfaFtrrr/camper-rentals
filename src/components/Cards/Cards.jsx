import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-use';
import CardItem from './CardItem/CardItem';
import {
  selectAllAdverts,
  selectFavorites,
  selectIsLoadMore,
  selectIsLoading,
  selectPage,
} from '../../redux/adverts/advertsSelectors';
import { fetchAdverts } from '../../redux/adverts/advertsOperations';

import s from './Cards.module.css';
import Button from '../Button/Button';
import {
  hideLoadMoreFavs,
  increasePage,
  resetAdverts,
} from '../../redux/adverts/advertsSlice';
import { limit } from '../../helpers/constants';

const Cards = ({ adverts, advertsListRef }) => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(resetAdverts());
  // }, [dispatch]);

  // const advertsListRef = useRef(null);

  // const isLoadMore = useSelector(selectIsLoadMore);
  // const isLoading = useSelector(selectIsLoading);

  const location = useLocation();
  const isFavoritesPage = location.pathname === '/camper-rentals/favorites';

  const favorites = useSelector(selectFavorites);
  const page = useSelector(selectPage);

  const visibleAdverts = page * limit;

  return (
    <>
      <ul className={s.cardsList} ref={advertsListRef}>
        {!isFavoritesPage &&
          adverts.map((advert) => (
            <CardItem key={advert._id} advert={advert} />
          ))}

        {isFavoritesPage &&
          favorites
            .slice(0, visibleAdverts)
            .map((advert) => (
              <CardItem
                key={advert._id}
                advert={advert}
                isFavoritesPage={isFavoritesPage}
              />
            ))}
      </ul>

      {/* {isLoadMore && !isLoading && (
        <Button onClick={handleLoadMore}>Load more</Button>
      )} */}
    </>
  );
};

export default Cards;
