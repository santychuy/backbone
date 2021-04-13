import { useCronJobsState } from '@/store/cronjobs';

const ButtonPrev = () => {
  const { prevStep, step } = useCronJobsState();

  return (
    <button type="button" onClick={prevStep} disabled={step === 0}>
      Atras
    </button>
  );
};

export default ButtonPrev;
