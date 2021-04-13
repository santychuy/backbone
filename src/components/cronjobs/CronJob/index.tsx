import { useCronJobsState } from '@/store/cronjobs';

import CronJobPreview from './CronJobPreview';
import LabelDate from './LabelDate';
import ButtonPrev from './Buttons/ButtonPrev';
import ButtonNext from './Buttons/ButtonNext';
import { ButtonContainer, CronJobContainer } from './styles';

const CronJob = () => {
  const { valueCron, setValueCron } = useCronJobsState();

  return (
    <CronJobContainer>
      <CronJobPreview />
      <input
        placeholder="*"
        value={valueCron}
        onChange={e => setValueCron(e.target.value)}
      />
      <LabelDate />
      <ButtonContainer>
        <ButtonPrev />
        <ButtonNext />
      </ButtonContainer>
    </CronJobContainer>
  );
};

export default CronJob;
