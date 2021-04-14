import { FC } from 'react';
import { useQuery } from 'react-query';
import { GetStaticProps } from 'next';

import { getCronJobs, Cronjob } from '@/api/cronjobs';
import Layout from '@/layout/main';
import CardCronjob from '@/components/main/CardCronjob';

import { Container } from './styles';

const CronJobs: FC<{ cronjobs?: Cronjob[] }> = ({ cronjobs }) => {
  const { data, isLoading, error } = useQuery('cronjobs', getCronJobs, {
    initialData: cronjobs,
  });

  const handleRenderContent = () => {
    if (isLoading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;

    return data?.map(cronjob => (
      <CardCronjob
        id={cronjob.id}
        name={cronjob.name}
        description={cronjob.description}
        cronjob={cronjob.scheduling}
        workflowId={cronjob.workflow_id}
      />
    ));
  };

  return (
    <Layout titleSEO="CronJobs" descriptionSEO="Ver CronJobs">
      <Container>{handleRenderContent()}</Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const cronjobs: Cronjob[] = await getCronJobs();
  return {
    props: { cronjobs },
  };
};

export default CronJobs;
