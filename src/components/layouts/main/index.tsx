import { FC } from 'react';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import { Container, NavBarContainer } from './styles';

interface LayoutProps {
  titleSEO: string;
  descriptionSEO: string;
}

const MainLayout: FC<LayoutProps> = ({ children, titleSEO, descriptionSEO }) => {
  const { push } = useRouter();

  return (
    <>
      <NextSeo
        titleTemplate="%s - Backbone Santiago"
        title={titleSEO}
        description={descriptionSEO}
        openGraph={{
          type: 'website',
          title: titleSEO,
          description: descriptionSEO,
        }}
      />
      <NavBarContainer>
        <button type="button" onClick={() => push('/')}>
          Prueba
        </button>
        <button type="button" onClick={() => push('/add')}>
          Agregar Cronjob
        </button>
      </NavBarContainer>
      <Container>{children}</Container>
    </>
  );
};

export default MainLayout;
