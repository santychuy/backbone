import { useQuery } from 'react-query';

import { getWorkflows } from '@/api/workflows';
import { useCronJobsState } from '@/store/cronjobs';

import { CronJobInfoContainer } from './styles';

const CronJobInformation = () => {
  const {
    name,
    setName,
    description,
    setDescription,
    setWorkflowId,
  } = useCronJobsState();

  const { data, isLoading } = useQuery('workflows', getWorkflows);

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
        <select name="workflow" onChange={e => setWorkflowId(Number(e.target.value))}>
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

export default CronJobInformation;
