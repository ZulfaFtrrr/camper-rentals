import CommonLoader from '../Loader/CommonLoader/CommonLoader';
import s from './Button.module.css';

const Button = ({
  type = 'button',
  title,
  children,
  className = 'load-more-cards-btn',
  onClick,
  loading,
  loaderColor = '#fff',

  ...rest
}) => {
  const buttonClasses = `${s.button} ${s[className]}`;

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      disabled={loading}
      {...rest}
    >
      {loading && <CommonLoader loaderColor={loaderColor} />}

      {children}
      {!loading && title}
    </button>
  );
};

export default Button;
