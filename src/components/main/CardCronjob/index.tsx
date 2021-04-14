import { FC } from 'react';
import { useMutation } from 'react-query';
import { useRouter } from 'next/router';

import { deleteCronJob } from '@/api/cronjobs';
import { useCronJobsState } from '@/store/cronjobs';

import { ButtonsContainer, CardContainer } from './styles';

interface CardCronjobProps {
  id: number;
  name: string;
  description: string;
  workflowId: number;
  cronjob: string;
}

const CardCronjob: FC<CardCronjobProps> = ({
  id,
  name,
  description,
  workflowId,
  cronjob,
}) => {
  const {
    setName,
    setDescription,
    setWorkflowId,
    setCronJob,
    setStep,
    setIsEditing,
    setCronJobId,
  } = useCronJobsState();
  const { mutate } = useMutation(deleteCronJob);
  const { push } = useRouter();

  const handleEditCronjob = () => {
    setName(name);
    setDescription(description);
    setWorkflowId(workflowId);
    setCronJob(cronjob);
    setStep(5);
    setCronJobId(id);
    setIsEditing(true);
    push('/add');
  };

  return (
    <CardContainer>
      <h2>{name}</h2>
      <p>{description}</p>
      <ButtonsContainer>
        <button type="button" onClick={handleEditCronjob}>
          Editar
        </button>
        <button type="button" onClick={() => mutate(id)}>
          Eliminar
        </button>
      </ButtonsContainer>
    </CardContainer>
  );
};

export default CardCronjob;
