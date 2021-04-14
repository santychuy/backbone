/* eslint-disable react/jsx-props-no-spreading */
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useQuery } from 'react-query';
import { GetStaticProps } from 'next';

import { getWorkflows, Workflow } from '@/api/workflows';
import { useCronJobsState } from '@/store/cronjobs';
import { schema } from '@/validations/cronjobInformationSchema';

import { CronJobInfoContainer, Container } from './styles';

interface CronJobInfoForm {
  name: string;
  description: string;
  workflow_id: number;
}

const CronJobInformation: FC<{ workflows?: Workflow[] }> = ({ workflows }) => {
  const {
    name,
    setName,
    description,
    setDescription,
    setWorkflowId,
    workflowId,
    setStepCron,
  } = useCronJobsState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CronJobInfoForm>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const { data, isLoading } = useQuery('workflows', getWorkflows, {
    initialData: workflows,
  });

  const onSubmit = handleSubmit(dataSubmit => {
    setName(dataSubmit.name);
    setDescription(dataSubmit.description);
    setWorkflowId(dataSubmit.workflow_id);
    setStepCron(1);
  });

  return (
    <Container onSubmit={onSubmit}>
      <CronJobInfoContainer>
        <input placeholder="Name" defaultValue={name} {...register('name')} />
        {errors.name && <p>{errors.name.message}</p>}
        <textarea
          placeholder="Description"
          defaultValue={description}
          {...register('description')}
        />
        {errors.description && <p>{errors.description.message}</p>}
        {!isLoading && (
          <select defaultValue={workflowId} {...register('workflow_id')}>
            {data?.map(workflow => (
              <option key={workflow.id} value={workflow.id}>
                {workflow.name}
              </option>
            ))}
          </select>
        )}
        {errors.workflow_id && <p>{errors.workflow_id.message}</p>}
        <button type="submit">Siguiente</button>
      </CronJobInfoContainer>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const workflows: Workflow[] = await getWorkflows();
  return {
    props: { workflows },
  };
};

export default CronJobInformation;
