import { useCronJobsState } from '@/store/cronjobs';

const ButtonNext = () => {
  const {
    setCronJob,
    resetStep,
    step,
    nextStep,
    valueCron,
    setValueCron,
    minute,
    setMinute,
    hour,
    setHour,
    dayMonth,
    setDayMonth,
    month,
    setMonth,
    setDayWeek,
    seconds,
    setSeconds,
    setName,
    setDescription,
  } = useCronJobsState();

  const handleNextStep = () => {
    switch (step) {
      case 0:
        setSeconds(valueCron);
        setCronJob(`${valueCron} * * * * *`);
        setValueCron('');
        nextStep();
        break;
      case 1:
        setMinute(valueCron);
        setCronJob(`${seconds} ${valueCron} * * * *`);
        setValueCron('');
        nextStep();
        break;
      case 2:
        setHour(valueCron);
        setCronJob(`${seconds} ${minute} ${valueCron} * * *`);
        setValueCron('');
        nextStep();
        break;
      case 3:
        setDayMonth(valueCron);
        setCronJob(`${seconds} ${minute} ${hour} ${valueCron} * *`);
        setValueCron('');
        nextStep();
        break;
      case 4:
        setMonth(valueCron);
        setCronJob(`${seconds} ${minute} ${hour} ${dayMonth} ${valueCron} *`);
        setValueCron('');
        nextStep();
        break;
      default:
        setDayWeek(valueCron);
        setCronJob(`${seconds} ${minute} ${hour} ${dayMonth} ${month} ${valueCron}`);
        setValueCron('');
        resetStep();
        setName('');
        setDescription('');
        setCronJob('');
        break;
    }
  };

  return (
    <button type="button" onClick={handleNextStep}>
      {step === 5 ? 'Guardar' : 'Siguiente'}
    </button>
  );
};

export default ButtonNext;
