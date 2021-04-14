import { useRouter } from 'next/router';

import { NavBarContainer } from './styles';

const NavBar = () => {
  const { push } = useRouter();

  return (
    <NavBarContainer>
      <button type="button" onClick={() => push('/')}>
        Prueba
      </button>
      <button type="button" onClick={() => push('/add')}>
        Agregar Cronjob
      </button>
    </NavBarContainer>
  );
};

export default NavBar;
