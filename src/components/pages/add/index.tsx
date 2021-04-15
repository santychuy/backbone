import { useEffect } from 'react';

import Layout from '@/components/layouts';
import CronjobInformation from '@/components/pages/add/CronjobInformation';
import CreateCronjob from '@/components/pages/add/CreateCronjob';
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
      {stepCron === 0 ? <CronjobInformation /> : <CreateCronjob />}
    </Layout>
  );
};

export default CronJobAddContent;
