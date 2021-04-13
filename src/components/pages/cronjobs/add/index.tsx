import Layout from '@/layout/main';
import CronJobInformation from '@/components/cronjobs/CronJobInformation';
import CronJob from '@/components/cronjobs/CronJob';

import { Container } from './styles';

const CronJobAddContent = () => (
  <Layout titleSEO="Agregar CronJob" descriptionSEO="Aqui agregaremos un nuevo cronjob">
    <Container>
      <CronJobInformation />
      <CronJob />
    </Container>
  </Layout>
);

export default CronJobAddContent;
