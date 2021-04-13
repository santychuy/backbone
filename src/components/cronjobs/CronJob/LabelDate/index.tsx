import { useCronJobsState } from '@/store/cronjobs';

const LabelDate = () => {
  const { step } = useCronJobsState();

  const renderLabel = () => {
    switch (step) {
      case 0:
        return 'Segundo/s';
      case 1:
        return 'Minuto/s';
      case 2:
        return 'Hora/s';
      case 3:
        return 'Día del Mes';
      case 4:
        return 'Mes';
      case 5:
        return 'Día de la semana';
      default:
        return '';
    }
  };

  return <h2>{renderLabel()}</h2>;
};

export default LabelDate;
