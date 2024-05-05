import { useState } from 'react';
import { useSelector } from 'react-redux';

import Cards from '../../components/Cards/Cards';
import Container from '../../components/Container/Container';
import Icon from '../../components/Icon/Icon';
import Button from '../../components/Button/Button';
import { selectFavorites } from '../../redux/adverts/advertsSelectors';
import { POSTS_PER_PAGE } from '../../helpers/constants';

import s from './FavoritesPage.module.css';

const FavoritesPage = () => {
  const [page, setPage] = useState(1);
  const favorites = useSelector(selectFavorites);
  const visibleAdverts = POSTS_PER_PAGE * page;
  const isShowLoadMoreBtn = visibleAdverts < favorites.length;

  const handleLoadMore = () => {
    setPage(page + 1);
  };

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
