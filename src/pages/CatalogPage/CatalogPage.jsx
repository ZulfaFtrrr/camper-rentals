import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button/Button';
import Cards from '../../components/Cards/Cards';
import Container from '../../components/Container/Container';
// import FiltersSearch from '../../components/FiltersSearch/FiltersSearch';
import s from './CatalogPage.module.css';
import {
  selectAllAdverts,
  selectFavorites,
  selectPage,
} from '../../redux/adverts/advertsSelectors';
import { incrementPage, resetPage } from '../../redux/adverts/advertsSlice';
import { POSTS_PER_PAGE } from '../../helpers/constants';
import { useEffect, useState } from 'react';

const CatalogPage = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  // const page = useSelector(selectPage);

  const adverts = useSelector(selectAllAdverts);

  const visibleAdverts = POSTS_PER_PAGE * page;

  const isShowLoadMoreBtn = visibleAdverts < adverts.length;

  const handleLoadMore = () => {
    setPage(page + 1);
    // dispatch(incrementPage());
  };

  // useEffect(() => {
  //   // dispatch(resetPage());
  // }, [dispatch]);

  return (
    <section className={s.catalog}>
      <Container className="catalog-page-container">
        {/* <FiltersSearch /> */}

        <Cards visibleAdverts={visibleAdverts} />

        {isShowLoadMoreBtn && (
          <Button onClick={handleLoadMore} className="load-more-cards-btn">
            Load more
          </Button>
        )}
      </Container>
    </section>
  );
};

export default CatalogPage;
