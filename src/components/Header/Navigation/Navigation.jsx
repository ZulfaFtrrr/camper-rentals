import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <div className={s.navWrapper}>
      <NavLink
        className={({ isActive }) => `${s.navLink} ${isActive ? s.active : ''}`}
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        className={({ isActive }) => `${s.navLink} ${isActive ? s.active : ''}`}
        to="/catalog"
      >
        Catalog
      </NavLink>

      <NavLink
        className={({ isActive }) => `${s.navLink} ${isActive ? s.active : ''}`}
        to="/favorites"
      >
        Favorites
      </NavLink>
    </div>
  );
};

export default Navigation;
