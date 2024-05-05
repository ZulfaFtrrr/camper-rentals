import IconsSprite from '../../assets/sprite.svg';

const Icon = ({
  id,
  className = '#',
  size = '20',
  fill = 'none',
  stroke = '#101828',
}) => (
  <svg
    className={className}
    width={size}
    height={size}
    fill={fill}
    stroke={stroke}
  >
    <use href={`${IconsSprite}#icon-${id}`} />
  </svg>
);

export default Icon;
