import { useCronJobsState } from '@/store/cronjobs';

const CronJobPreview = () => {
  const { cronJob } = useCronJobsState();
  return <p>{cronJob}</p>;
};

export default CronJobPreview;
