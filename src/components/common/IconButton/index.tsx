import { FC } from 'react';

import { Button, Icon } from './styles';

interface IconButtonProps {
  icon: 'pencil' | 'trash' | 'home';
  onClick: () => void;
  hoverColor?: string;
  className?: string;
}

const IconButton: FC<IconButtonProps> = ({ icon, onClick, hoverColor, className }) => (
  <Button
    type="button"
    onClick={onClick}
    hoverColor={`#${hoverColor}`}
    className={className}
  >
    <Icon src={`/icons/${icon}.svg`} alt={icon} />
  </Button>
);

export default IconButton;
