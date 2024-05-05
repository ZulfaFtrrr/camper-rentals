import { useSelector } from 'react-redux';
import { useState } from 'react';

import Button from '../../components/Button/Button';
import Cards from '../../components/Cards/Cards';
import Container from '../../components/Container/Container';
import { selectAllAdverts } from '../../redux/adverts/advertsSelectors';
import { POSTS_PER_PAGE } from '../../helpers/constants';

import s from './CatalogPage.module.css';

const CatalogPage = () => {
  const [page, setPage] = useState(1);
  const adverts = useSelector(selectAllAdverts);
  const visibleAdverts = POSTS_PER_PAGE * page;
  const isShowLoadMoreBtn = visibleAdverts < adverts.length;

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <section className={s.catalog}>
      <Container className="catalog-page-container">
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
