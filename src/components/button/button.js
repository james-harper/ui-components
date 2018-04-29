import React from 'react';
import PropTypes from 'prop-types';
import Theme from '../../utils/theme';

const types = Object.keys(Theme).map(type => type);
const sizes = {
  small: 'f6 ph3 pv1',
  medium: 'f5 ph4 pv2',
  large: 'f4 ph5 pv3'
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
    `${colours.background} ${colours.text} ${colours.border}`,
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