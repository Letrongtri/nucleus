export interface TextfieldProps {
  label?: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  type?: 'text' | 'password';
}
