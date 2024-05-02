import Button from '../../components/Button/Button';
import Cards from '../../components/Cards/Cards';
import Container from '../../components/Container/Container';
// import FiltersSearch from '../../components/FiltersSearch/FiltersSearch';
import s from './CatalogPage.module.css';

const CatalogPage = () => {
  return (
    <section className={s.catalog}>
      <Container className="catalog-page-container">
        {/* <FiltersSearch /> */}

        <Cards />
        <Button className="load-more-cards-btn">Load more</Button>
      </Container>
    </section>
  );
};

export default CatalogPage;
