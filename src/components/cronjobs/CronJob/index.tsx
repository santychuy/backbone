/* eslint-disable react/jsx-props-no-spreading */
import { useMutation } from 'react-query';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { createCronJob, editCronJob } from '@/api/cronjobs';
import { useCronJobsState } from '@/store/cronjobs';
import { schema } from '@/validations/cronjobSchema';

import { Container, CronJobContainer } from './styles';

const CronJob = () => {
  const {
    cronjob,
    isEditing,
    cronJobId,
    name,
    description,
    workflowId,
  } = useCronJobsState();
  const createCronjobMutation = useMutation(createCronJob);
  const editCronjobMutation = useMutation(editCronJob);
  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ cronjob: string }>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(data => {
    if (isEditing) {
      editCronjobMutation.mutate({
        id: cronJobId!,
        name,
        description,
        scheduling: data.cronjob,
        workflowId: workflowId!,
      });
    } else {
      createCronjobMutation.mutate({
        name,
        description,
        scheduling: data.cronjob,
        workflow_id: workflowId!,
      });
    }
    push('/');
  });

  return (
    <Container onSubmit={onSubmit}>
      <CronJobContainer>
        <p>{cronjob || '* * * * * *'}</p>
        <input defaultValue={cronjob} {...register('cronjob')} />
        {errors.cronjob && <p>{errors.cronjob.message}</p>}
        <button type="submit">Guardar</button>
      </CronJobContainer>
    </Container>
  );
};

export default CronJob;
