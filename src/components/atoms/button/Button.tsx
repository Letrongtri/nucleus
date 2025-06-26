import styles from './Button.module.css';


const Button = ({
  children,
  onClick,
  className = '',
  disabled = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}) => {     
    return (
        <button
        onClick={onClick}
        className={`${styles.defaultButtonStyles} ${className}`}
        disabled={disabled}
        >
        {children}
        </button>
    );
    }
    export default Button