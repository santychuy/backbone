import { useRouter } from 'next/router';

import IconButton from '@/components/common/IconButton';
import Button from '@/components/common/Button';

import { NavBarContainer } from './styles';

const NavBar = () => {
  const { push } = useRouter();

  return (
    <NavBarContainer>
      <IconButton icon="home" onClick={() => push('/')} hoverColor="505050" />
      <Button label="Agregar Cronjob" type="button" onClick={() => push('/add')} />
    </NavBarContainer>
  );
};

export default NavBar;
