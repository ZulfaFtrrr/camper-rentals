import { useEffect, useState } from 'react';
import Cards from '../../components/Cards/Cards';
import Container from '../../components/Container/Container';
import s from './FavoritesPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAllAdverts,
  selectFavorites,
  selectPage,
} from '../../redux/adverts/advertsSelectors';
import Icon from '../../components/Icon/Icon';
import Button from '../../components/Button/Button';
import { incrementPage } from '../../redux/adverts/advertsSlice';
import { POSTS_PER_PAGE } from '../../helpers/constants';

const FavoritesPage = () => {
  const [page, setPage] = useState(1);

  // const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  // const adverts = useSelector(selectAllAdverts);

  const dispatch = useDispatch();
  // const page = useSelector(selectPage);

  const visibleAdverts = POSTS_PER_PAGE * page;

  const isShowLoadMoreBtn = visibleAdverts < favorites.length;

  const handleLoadMore = () => {
    // dispatch(incrementPage());
    setPage(page + 1);
  };

  // useEffect(() => {
  //   dispatch(fetchAdverts())
  //     .unwrap()
  //     .then()
  //     .catch(
  //       () => console.eror('Error')
  //       // toast.error('Something went wrong. Please try again later!')
  //     );
  // }, [dispatch, favorites]);

  // const [favorites, setFavorites] = useState([]);
  // const [showFavorites, setShowFAvorites] = useState(false);
  // console.log(favorites);

  // const handleToggleFavorites = (carId, isFavorite) => {
  //   if (isFavorite) {
  //     setFavorites([...favorites, carId]);
  //   } else {
  //     setFavorites(favorites.filter((_id) => _id !== carId));
  //   }
  // };

  return (
    <section className={s.favoritesSection}>
      <Container className="favorites-page-container">
        {favorites.length > 0 && <Cards visibleAdverts={visibleAdverts} />}
        {favorites.length === 0 && (
          <div className={s.noFavsBox}>
            <div className={s.noFavsContainer}>
              <span className={s.noFavsText}>
                You don`t have any favorites yet
              </span>
              <Icon
                id={'heart'}
                size="120"
                fill={'#E44848'}
                stroke={'#E44848'}
              />
            </div>
          </div>
        )}
        {isShowLoadMoreBtn && (
          <Button onClick={handleLoadMore} className="load-more-cards-btn">
            Load more
          </Button>
        )}
      </Container>
    </section>
  );
};

export default FavoritesPage;
