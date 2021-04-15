import { useMutation } from 'react-query';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

import { createCronJob, editCronJob } from '@/api/cronjobs';
import ButtonSave from '@/components/common/Button';
import { useCronJobsState } from '@/store/cronjobs';

import {
  Container,
  CronJobContainer,
  CronPreview,
  InputCron,
  ButtonBack,
  ButtonsContainer,
} from './styles';

const CronJob = () => {
  const {
    cronjob,
    isEditing,
    cronJobId,
    name,
    description,
    workflowId,
    setCronjob,
    setStepCron,
  } = useCronJobsState();
  const createCronjobMutation = useMutation(createCronJob);
  const editCronjobMutation = useMutation(editCronJob);
  const { push } = useRouter();

  const handleSaveCron = () => {
    let msgToast: string;
    if (isEditing) {
      editCronjobMutation.mutate({
        id: cronJobId!,
        name,
        description,
        scheduling: cronjob || '* * * * * *',
        workflowId: workflowId!,
      });
      msgToast = '✏️ Cronjob editado correctamente';
    } else {
      createCronjobMutation.mutate({
        name,
        description,
        scheduling: cronjob || '* * * * * *',
        workflow_id: workflowId!,
      });
      msgToast = '😎 Cronjob creado correctamente';
    }
    toast.success(msgToast);
    push('/');
  };

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <CronJobContainer>
        <CronPreview>{cronjob || '* * * * * *'}</CronPreview>
        <InputCron value={cronjob} onChange={e => setCronjob(e.target.value)} />
        <ButtonsContainer>
          <ButtonBack label="Atras" type="button" onClick={() => setStepCron(0)} />
          <ButtonSave
            label="Guardar"
            type="button"
            onClick={handleSaveCron}
            isLoading={createCronjobMutation.isLoading || editCronjobMutation.isLoading}
          />
        </ButtonsContainer>
      </CronJobContainer>
    </Container>
  );
};

export default CronJob;
