import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.css';

const Input = ({ autoComplete, isDisabled, ...props }, ref) => (
  <input
    className={styles.input}
    ref={ref}
    disabled={isDisabled}
    autoComplete={autoComplete || 'off'} // 'off' need to be here because forwardRef is not support defaultProps
    maxLength={256}
    {...props}
  />
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  autoComplete: PropTypes.string,
  isDisabled: PropTypes.bool
};

export default forwardRef(Input);
