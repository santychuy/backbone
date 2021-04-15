import Layout from '@/layouts/index';

import { Container } from './styles';

const Content404 = () => (
  <Layout
    titleSEO="Página no encontrada"
    descriptionSEO="La página que intentas buscar no existe, intenta ir a la pagina principal para seguir navegando"
  >
    <Container>
      <h1 style={{ textAlign: 'center' }}>¿Estás perdido? Esta página no existe 😳</h1>
    </Container>
  </Layout>
);

export default Content404;
