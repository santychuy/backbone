import { ChangeEvent } from 'react';
import { useCronJobsState } from '@/store/cronjobs';

import CronJobPreview from './CronJobPreview';
import LabelDate from './LabelDate';
import ButtonPrev from './Buttons/ButtonPrev';
import ButtonNext from './Buttons/ButtonNext';
import { ButtonContainer, CronJobContainer } from './styles';

const CronJob = () => {
  const {
    valueCron,
    setValueCron,
    step,
    setSeconds,
    setMinute,
    setHour,
    setDayMonth,
    setMonth,
    setDayWeek,
  } = useCronJobsState();

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    switch (step) {
      case 0:
        setSeconds(value);
        break;
      case 1:
        setMinute(value);
        break;
      case 2:
        setHour(value);
        break;
      case 3:
        setDayMonth(value);
        break;
      case 4:
        setMonth(value);
        break;
      case 5:
        setDayWeek(value);
        break;
      default:
        break;
    }

    setValueCron(value);
  };

  return (
    <CronJobContainer>
      <CronJobPreview />
      <input placeholder="*" value={valueCron} onChange={handleChangeValue} />
      <LabelDate />
      <ButtonContainer>
        <ButtonPrev />
        <ButtonNext />
      </ButtonContainer>
    </CronJobContainer>
  );
};

export default CronJob;
