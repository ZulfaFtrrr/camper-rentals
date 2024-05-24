import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import Button from '../../components/Button/Button';
import Cards from '../../components/Cards/Cards';
import Container from '../../components/Container/Container';
import {
  selectAllAdverts,
  selectIsLoadMore,
  selectIsLoading,
  selectPage,
} from '../../redux/adverts/advertsSelectors';
import {
  increasePage,
  resetAdverts,
  resetFavsPage,
} from '../../redux/adverts/advertsSlice';
import { fetchAdverts } from '../../redux/adverts/advertsOperations';
import { limit } from '../../helpers/constants';

import s from './CatalogPage.module.css';
import { scrollDownOnLoadMore } from '../../helpers/scrollDownOnLoadMore';
import { useLocation } from 'react-use';
import Filter from '../../components/Filter/Filter';

const CatalogPage = () => {
  const dispatch = useDispatch();

  const page = useSelector(selectPage);
  const adverts = useSelector(selectAllAdverts);

  const isLoadMore = useSelector(selectIsLoadMore);
  const isLoading = useSelector(selectIsLoading);

  const advertsListRef = useRef(null);

  useEffect(() => {
    dispatch(resetAdverts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAdverts(page))
      .unwrap()
      .then()
      .catch((error) => console.error(error));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    dispatch(increasePage());
    const setScrollDown = (ref) => {
      console.log('scroll');
      setTimeout(() => {
        if (!ref.current) return;
        scrollDownOnLoadMore(ref);
      }, 500);
    };
    setScrollDown(advertsListRef);
  };

  return (
    <section className={s.catalog}>
      <Container className="catalog-page-container">
        <div className={s.filterCardsWrapper}>
          <Filter page={page} />
          <div>
            <Cards adverts={adverts} advertsListRef={advertsListRef} />
            {isLoadMore && !isLoading && (
              <Button onClick={handleLoadMore}>Load more</Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CatalogPage;
