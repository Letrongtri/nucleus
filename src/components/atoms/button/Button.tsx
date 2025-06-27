import styles from './Button.module.css';

import { type ButtonPropsTypes } from './Button.types';
const Button: React.FC<ButtonPropsTypes> = ({
  children,
  onClick,
  className = '',
  disabled = false,
  variant = 'primary',
}) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.defaultButtonStyles} ${styles[`buttonVariant_${variant}`]} ${disabled ? styles.isDisabled : ''} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
export default Button;
