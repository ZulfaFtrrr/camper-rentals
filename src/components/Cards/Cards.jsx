import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useLocation } from 'react-use';
import CardItem from './CardItem/CardItem';
import {
  selectAllAdverts,
  selectFavorites,
} from '../../redux/adverts/advertsSelectors';
import { fetchAdverts } from '../../redux/adverts/advertsOperations';

import s from './Cards.module.css';

const Cards = ({ visibleAdverts }) => {
  const location = useLocation();
  const isFavoritesPage = location.pathname === '/camper-rentals/favorites';

  const favorites = useSelector(selectFavorites);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdverts())
      .unwrap()
      .then()
      .catch((error) => console.error(error));
  }, [dispatch]);

  const adverts = useSelector(selectAllAdverts);

  return (
    <ul className={s.cardsList}>
      {!isFavoritesPage &&
        adverts
          ?.slice(0, visibleAdverts)
          .map((advert) => <CardItem key={advert._id} advert={advert} />)}

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
  );
};

export default Cards;
