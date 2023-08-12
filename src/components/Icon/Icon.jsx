import styled from 'styled-components';
import icons from '../../assets/icons/icons.svg';
import PropTypes from 'prop-types';

export const IconBase = ({ className, icon, width, height }) => {
  return (
    <svg className={className} width={width} height={height}>
      <use href={icons + `#${icon}`} />
    </svg>
  );
};

export const Icon = styled(IconBase)`
  max-width: 435px;
  max-height: 420px;
`;

Icon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
