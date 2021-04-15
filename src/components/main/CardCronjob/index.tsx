import { FC } from 'react';
import { useMutation } from 'react-query';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

import { deleteCronJob } from '@/api/cronjobs';
import { useCronJobsState } from '@/store/cronjobs';

import {
  CardContainer,
  LabelsContainer,
  Description,
  ButtonsContainer,
  ButtonIcon,
  Cronjob,
} from './styles';

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
    setCronjob,
    setIsEditing,
    setCronJobId,
  } = useCronJobsState();
  const { mutate } = useMutation(deleteCronJob);
  const { push } = useRouter();

  const handleEditCronjob = () => {
    setName(name);
    setDescription(description);
    setWorkflowId(workflowId);
    setCronjob(cronjob);
    setCronJobId(id);
    setIsEditing(true);
    push('/add');
  };

  const handleDeleteCronjob = () => {
    mutate(id);
    toast.info('👁 Se eliminó el Cronjob correctamente');
  };

  return (
    <CardContainer>
      <LabelsContainer>
        <h2>{name}</h2>
        <Description>{description}</Description>
        <Cronjob>Cron: {cronjob}</Cronjob>
      </LabelsContainer>
      <ButtonsContainer>
        <ButtonIcon icon="pencil" onClick={handleEditCronjob} hoverColor="7CB86E">
          Editar
        </ButtonIcon>
        <ButtonIcon icon="trash" onClick={handleDeleteCronjob} hoverColor="D64D4D">
          Eliminar
        </ButtonIcon>
      </ButtonsContainer>
    </CardContainer>
  );
};

export default CardCronjob;
