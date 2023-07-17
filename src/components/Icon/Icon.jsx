import icons from '../../assets/icons.svg';
export const Icon = ({ icon, width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href={icons + `#${icon}`} />
    </svg>
  );
};
