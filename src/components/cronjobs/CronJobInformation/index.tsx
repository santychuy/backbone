import { FC } from 'react';
import { useQuery } from 'react-query';
import { GetStaticProps } from 'next';

import { getWorkflows, Workflow } from '@/api/workflows';
import { useCronJobsState } from '@/store/cronjobs';

import { CronJobInfoContainer } from './styles';

const CronJobInformation: FC<{ workflows: Workflow[] }> = ({ workflows }) => {
  const {
    name,
    setName,
    description,
    setDescription,
    setWorkflowId,
    workflowId,
  } = useCronJobsState();

  const { data, isLoading } = useQuery('workflows', getWorkflows, {
    initialData: workflows,
  });

  return (
    <CronJobInfoContainer>
      <input
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        name="name"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        name="description"
      />
      {!isLoading && (
        <select
          name="workflow"
          onChange={e => setWorkflowId(Number(e.target.value))}
          value={workflowId}
        >
          <option disabled selected>
            Seleccionar Workflow
          </option>
          {data?.map(workflow => (
            <option key={workflow.id} value={workflow.id}>
              {workflow.name}
            </option>
          ))}
        </select>
      )}
    </CronJobInfoContainer>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const workflows: Workflow[] = await getWorkflows();
  return {
    props: { workflows },
  };
};

export default CronJobInformation;
