import { useEffect } from 'react';

import Layout from '@/components/layouts';
import CronJobInformation from '@/components/cronjobs/CronJobInformation';
import CronJob from '@/components/cronjobs/CronJob';
import { useCronJobsState } from '@/store/cronjobs';

const CronJobAddContent = () => {
  const {
    setStepCron,
    stepCron,
    setName,
    setDescription,
    setWorkflowId,
    setCronjob,
    setIsEditing,
  } = useCronJobsState();

  useEffect(() => {
    return () => {
      setName('');
      setDescription('');
      setWorkflowId(undefined);
      setCronjob('');
      setStepCron(0);
      setIsEditing(false);
    };
  }, []);

  return (
    <Layout
      titleSEO="Agregar CronJob"
      descriptionSEO="Esta parte nos dedicamos a crear y llenar la información necesaria para agregar un cronjob nuevo a la base de datos"
    >
      {stepCron === 0 ? <CronJobInformation /> : <CronJob />}
    </Layout>
  );
};

export default CronJobAddContent;
