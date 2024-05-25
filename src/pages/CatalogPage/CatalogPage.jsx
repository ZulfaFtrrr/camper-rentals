import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import Button from '../../components/Button/Button';
import Cards from '../../components/Cards/Cards';
import Container from '../../components/Container/Container';
import {
  selectAllAdverts,
  selectFilteredAdverts,
  selectFilters,
  selectFiltersPage,
  selectIsLoadMore,
  selectIsLoading,
  selectPage,
} from '../../redux/adverts/advertsSelectors';
import {
  hideLoadMore,
  increasePage,
  resetAdverts,
  resetFavsPage,
  resetFilteredAdverts,
} from '../../redux/adverts/advertsSlice';
import {
  fetchAdverts,
  fetchFilteredAdverts,
} from '../../redux/adverts/advertsOperations';
import { limit } from '../../helpers/constants';

import s from './CatalogPage.module.css';
import { scrollDownOnLoadMore } from '../../helpers/scrollDownOnLoadMore';
import { useLocation } from 'react-use';
import Filter from '../../components/Filter/Filter';
import { toast } from 'react-toastify';

const CatalogPage = () => {
  const dispatch = useDispatch();

  const page = useSelector(selectPage);
  const adverts = useSelector(selectAllAdverts);

  const filtersPage = useSelector(selectFiltersPage);
  const filteredAdverts = useSelector(selectFilteredAdverts);
  const filters = useSelector(selectFilters);

  const isLoadMore = useSelector(selectIsLoadMore);
  const isLoading = useSelector(selectIsLoading);

  const advertsListRef = useRef(null);

  useEffect(() => {
    dispatch(resetAdverts());
    dispatch(resetFilteredAdverts());
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

    if (filteredAdverts.length > 0) {
      dispatch(
        fetchFilteredAdverts({ ...filters, filtersPage: filtersPage + 1 })
      )
        .unwrap()
        .then((filteredAdverts) => {
          toast.success('Success filtering pagination');
          if (filteredAdverts.length < limit) {
            dispatch(hideLoadMore());
          }
          // setResetDisabled(false);
        })
        .catch((error) => console.log(error?.message));
    }
  };

  return (
    <section className={s.catalog}>
      <Container className="catalog-page-container">
        <div className={s.filterCardsWrapper}>
          <Filter filtersPage={filtersPage} />
          <div>
            <Cards
              adverts={filteredAdverts.length > 0 ? filteredAdverts : adverts}
              advertsListRef={advertsListRef}
            />
            {isLoadMore &&
              !isLoading &&
              (filteredAdverts.length > 0 || adverts.length > 0) && (
                <Button onClick={handleLoadMore}>Load more</Button>
              )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CatalogPage;
