import { useQuery } from 'react-query';

import { getCronJobs } from '@/api/cronjobs';
import Layout from '@/layout/main';

import { Container } from './styles';

const CronJobs = () => {
  const { data, isLoading, error } = useQuery('cronjobs', getCronJobs);

  const handleRenderContent = () => {
    if (isLoading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;

    return data?.map(cronjob => <p>{cronjob.name}</p>);
  };

  return (
    <Layout titleSEO="CronJobs" descriptionSEO="Ver CronJobs">
      <Container>{handleRenderContent()}</Container>
    </Layout>
  );
};

export default CronJobs;
