import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import Icon from '../../Icon/Icon';
import logo from '../../../assets/static/logo-sun.png';

const Navigation = () => {
  return (
    <div className={s.navLogoWrapper}>
      <div className={s.navWrapper}>
        <NavLink
          className={({ isActive }) =>
            `${s.navLink} ${isActive ? s.active : ''}`
          }
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `${s.navLink} ${isActive ? s.active : ''}`
          }
          to="/catalog"
        >
          Catalog
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `${s.navLink} ${isActive ? s.active : ''}`
          }
          to="/favorites"
        >
          Favorites
        </NavLink>
      </div>

      <NavLink className={s.logoText} to="/">
        <img src={logo} alt="logo" width="50" />

        {/* <Icon id={'alcove'} size="38" fill="#ffc531" stroke="none" /> */}
        <p>
          <span> {'Camper'.toUpperCase()}</span>
          <br />
          <span> {'rentals'.toUpperCase()}</span>
        </p>
      </NavLink>
    </div>
  );
};

export default Navigation;
