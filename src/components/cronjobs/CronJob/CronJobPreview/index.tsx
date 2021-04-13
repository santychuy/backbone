import { useCronJobsState } from '@/store/cronjobs';

const CronJobPreview = () => {
  const { seconds, minute, hour, dayMonth, month, dayWeek } = useCronJobsState();

  return (
    <p>
      {seconds} {minute} {hour} {dayMonth} {month} {dayWeek}
    </p>
  );
};

export default CronJobPreview;
