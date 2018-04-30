import React from 'react';
import PropTypes from 'prop-types';
import Theme from '../../utils/theme';

const types = Object.keys(Theme).map(type => type);
const sizes = {
  small: 'w3 f6 ph1 pv1',
  medium: 'w4 f5 ph4 pv2',
  large: 'w5 f3 ph5 pv3'
};

const Button = ({ type, size, onClick, children }) => {
  const colours = Theme[type];
  const classes = [
    'btn',
    'ba',
    'dib',
    'br3',
    'b',
    'tc',
    `${colours.background} ${colours.text} ${colours.border} ${colours.hover}`,
    sizes[size],
    'pointer',
  ];

  return (
    <button
      className={classes.join(' ')}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(types),
  size: PropTypes.oneOf([
    'small',
    'medium',
    'large',
  ]),
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
};

Button.defaultProps = {
  type: 'default',
  size: 'medium',
  onClick: () => {}
};

export default Button;
