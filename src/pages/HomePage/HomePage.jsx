import Container from '../../components/Container/Container';
// import Meta from '../../components/Meta/Meta';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import s from './HomePage.module.css';
import Button from '../../components/Button/Button';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(apiGetWaterPortionToday());
  // }, [dispatch]);

  return (
    <section className={s.hero}>
      <Container className="home-page-container">
        {/* <Meta title="Home Page" /> */}

        {/* <div className={s.heroContainer}> */}
        <h1 className={s.heroTitle}>Rent a Campervan</h1>
        <p className={s.heroSubTitle}>
          Explore Ukraine in one of our custom-built campervans
        </p>
        <p className={s.heroText}>
          Our company offers a wide range of camper rental services throughout
          Ukraine. Explore our diverse catalog of campers, each equipped with
          various amenities to suit your needs. From compact vans for solo
          travelers to spacious RVs for families, we have options for every type
          of journey. <br />
          <span className={s.spanText}>
            Start your next adventure with us today!
          </span>
        </p>
        <NavLink
          className={({ isActive }) =>
            `${s.heroBtn} ${isActive ? s.activeHeroBtn : ''}`
          }
          to="/catalog"
        >
          Go to catalog
        </NavLink>
        {/* <Button className="hero-btn">Go to catalog</Button> */}
        {/* </div> */}
        {/* <div className={s.homePageWidgetWrapper}>
  
          </div> */}
      </Container>
    </section>
  );
};

export default HomePage;
