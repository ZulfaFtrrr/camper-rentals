import Container from '../Container/Container';
import s from './Header.module.css';
import Navigation from './Navigation/Navigation';

const Header = () => {
  return (
    <header>
      {/* <p>Camper Rentals</p> */}
      <Container className="header-container">
        {/* <div className={s.headerContainer}> */}
        <Navigation />
        {/* </div> */}
      </Container>
    </header>

    // <HeaderContainer>
    //   <Navigation>
    //     <StyledLink to="/first">First</StyledLink>
    //     <StyledLink to="/second">Second</StyledLink>
    //   </Navigation>
    // </HeaderContainer>
  );
};

export default Header;
