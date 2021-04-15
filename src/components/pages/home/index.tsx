import { FC } from 'react';
import { useQuery } from 'react-query';
import { GetStaticProps } from 'next';
import HashLoader from 'react-spinners/HashLoader';

import { getCronJobs } from '@/api/cronjobs';
import Layout from '@/components/layouts';
import CardCronjob from '@/components/pages/home/CardCronjob';
import { CronjobRes } from '@/interfaces/';

import { Container, LoadingContainer, ErrorMessage } from './styles';

const CronJobs: FC<{ cronjobs?: CronjobRes[] }> = ({ cronjobs }) => {
  const { data, isLoading, error } = useQuery('cronjobs', getCronJobs, {
    initialData: cronjobs,
  });

  const handleRenderContent = () => {
    if (isLoading) {
      return (
        <LoadingContainer>
          <HashLoader loading={isLoading} />
        </LoadingContainer>
      );
    }

    if (error) {
      return (
        <LoadingContainer>
          <ErrorMessage>Error: {error}</ErrorMessage>
        </LoadingContainer>
      );
    }

    if (data?.length === 0) {
      return (
        <LoadingContainer>
          <ErrorMessage>No hay cronjobs creados 👻</ErrorMessage>
        </LoadingContainer>
      );
    }

    return (
      <Container
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {data?.map(cronjob => (
          <CardCronjob
            key={cronjob.id}
            id={cronjob.id}
            name={cronjob.name}
            description={cronjob.description}
            cronjob={cronjob.scheduling}
            workflowId={cronjob.workflow_id}
          />
        ))}
      </Container>
    );
  };

  return (
    <Layout
      titleSEO="Cronjobs"
      descriptionSEO="Nos muestran el listado de los cronjobs guardados para poder ver y visualizarlos para tomar alguna acción"
    >
      {handleRenderContent()}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const cronjobs: CronjobRes[] = await getCronJobs();
  return {
    props: { cronjobs },
  };
};

export default CronJobs;
