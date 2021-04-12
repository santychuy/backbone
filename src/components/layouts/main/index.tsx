import { FC } from 'react';
import { NextSeo } from 'next-seo';

import { Container } from './styles';

interface LayoutProps {
  titleSEO: string;
  descriptionSEO: string;
}

const MainLayout: FC<LayoutProps> = ({ children, titleSEO, descriptionSEO }) => (
  <>
    <NextSeo
      titleTemplate="%s - Backbone"
      title={titleSEO}
      description={descriptionSEO}
      openGraph={{
        type: 'website',
        title: titleSEO,
        description: descriptionSEO,
      }}
    />
    <Container>{children}</Container>
  </>
);

export default MainLayout;
