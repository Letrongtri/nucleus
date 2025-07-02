import styles from './Textfield.module.css';
import { TextfieldProps } from './Textfield.types';
const Textfield: React.FC<TextfieldProps> = ({
  disabled = false,
  value = '',
  onChange,
  placeholder,
  type = 'text'
}) => {
  return (
    <input
      type={type}
      disabled={disabled}
      value={value}
      onChange={onChange}
      className={`${styles.textfield} ${disabled && styles.disabled}`}
      placeholder={placeholder}
    />
  );
};
export default Textfield;
