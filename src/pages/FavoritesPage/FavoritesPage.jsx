import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Cards from '../../components/Cards/Cards';
import Container from '../../components/Container/Container';
import Icon from '../../components/Icon/Icon';
import Button from '../../components/Button/Button';
import {
  selectFavorites,
  selectIsLoadMore,
  selectIsLoading,
  selectPage,
} from '../../redux/adverts/advertsSelectors';
import {  limit } from '../../helpers/constants';

import s from './FavoritesPage.module.css';
import {
  hideLoadMoreFavs,
  increasePage,
  resetAdverts,
  resetAdvertsFavs,
} from '../../redux/adverts/advertsSlice';
import { scrollDownOnLoadMore } from '../../helpers/scrollDownOnLoadMore';
import { useLocation } from 'react-use';
import Filter from '../../components/Filter/Filter';

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const advertsListRef = useRef(null);
  const location = useLocation();

  const page = useSelector(selectPage);
  // const [page, setPage] = useState(1); //

  const [isShowBtn, setIsShowBtn] = useState(true); //

  const favorites = useSelector(selectFavorites);

  const isLoadMore = useSelector(selectIsLoadMore); //

  const isLoading = useSelector(selectIsLoading);

  // useEffect(() => {
  //   dispatch(resetAdvertsFavs());
  // }, [dispatch]);

  useEffect(() => {
    dispatch(resetAdverts());
  }, [dispatch, location.pathname]);

  // useEffect(() => {
  //   // console.log('location.pathname reset');
  //   dispatch(resetAdverts());
  // }, [dispatch, location.pathname]);

  const handleLoadMore = () => {
    const setScrollDown = (ref) => {
      setTimeout(() => {
        if (!ref.current) return;
        scrollDownOnLoadMore(ref);
      }, 500);
    };
    setScrollDown(advertsListRef);

    dispatch(increasePage());

    if (page < Math.ceil(favorites.length / limit)) {
      setIsShowBtn(false);
      // dispatch(hideLoadMoreFavs());
    }
  };

  return (
    <section className={s.favoritesSection}>
      <Container className="favorites-page-container">
        <div className={s.filterCardsWrapper}>
          <Filter />

          {favorites.length > 0 && <Cards advertsListRef={advertsListRef} />}
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
        </div>
        {!isLoading && isShowBtn && (
          <Button onClick={handleLoadMore}>Load more</Button>
        )}
      </Container>
    </section>
  );
};

export default FavoritesPage;

// isLoadMore &&
