import React from "react";
import Icons from "../icons/icons.svg"; 
import PropTypes from 'prop-types';

const Icon = ({ name, color, size,onClick }) => (
  <svg onClick={onClick} className={`icon icon-${name}`} fill={color} width={size} height={size}>
    <use xlinkHref={`${Icons}#icon-${name}`} />
  </svg>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number
};

export default Icon;