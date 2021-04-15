import { FC } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

import { Btn } from './styles';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type: 'button' | 'submit';
  className?: string;
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({ label, onClick, type, className, isLoading }) => (
  <Btn type={type} onClick={onClick} className={className}>
    {isLoading ? <BeatLoader loading={isLoading} color="#ffffff" size={10} /> : label}
  </Btn>
);

export default Button;
