import { useCronJobsState } from '@/store/cronjobs';

import { CronJobInfoContainer } from './styles';

const CronJobInformation = () => {
  const { name, setName, description, setDescription } = useCronJobsState();

  return (
    <CronJobInfoContainer>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <textarea
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
    </CronJobInfoContainer>
  );
};

export default CronJobInformation;
