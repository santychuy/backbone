import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useRouter } from 'next/router';

import { useCronJobsState } from '@/store/cronjobs';

import { createCronJob, editCronJob } from '@/api/cronjobs';

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
    cronJob,
    name,
    description,
    workflowId,
    isEditing,
    setIsEditing,
    cronJobId,
    setCronJobId,
    setWorkflowId,
  } = useCronJobsState();

  const createCronjobMutation = useMutation(createCronJob);
  const editCronjobMutation = useMutation(editCronJob);
  const { push } = useRouter();

  const handleNextStep = async () => {
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
        if (name !== '' && description !== '' && workflowId) {
          setDayWeek(valueCron);
          setCronJob(`${seconds} ${minute} ${hour} ${dayMonth} ${month} ${valueCron}`);
          setValueCron('');
          nextStep();
        } else {
          console.log('Completar toda la información');
        }
        break;
    }
  };

  useEffect(() => {
    if (step === 6) {
      if (isEditing) {
        editCronjobMutation.mutate({
          id: cronJobId!,
          name,
          description,
          scheduling: cronJob,
          workflowId: workflowId!,
        });
      } else {
        createCronjobMutation.mutate({
          name,
          description,
          scheduling: cronJob,
          workflow_id: workflowId!,
        });
      }
      setCronJob('* * * * * *');
      setSeconds('*');
      setMinute('*');
      setHour('*');
      setDayMonth('*');
      setMonth('*');
      setDayWeek('*');
      setName('');
      setDescription('');
      setWorkflowId(undefined);
      setIsEditing(false);
      setCronJobId(undefined);
      resetStep();
      push('/');
    }
  }, [cronJob]);

  return (
    <button type="button" onClick={handleNextStep}>
      {step === 5 ? 'Guardar' : 'Siguiente'}
    </button>
  );
};

export default ButtonNext;
