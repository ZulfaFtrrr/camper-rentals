import s from './Button.module.css';

const Button = ({
  type = 'button',
  title,
  children,
  className = 'load-more-cards-btn',
  onClick,
  loading,

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
      {children}
      {!loading && title}
    </button>
  );
};

export default Button;
