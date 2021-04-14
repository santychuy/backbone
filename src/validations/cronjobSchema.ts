import { object, string } from 'yup';

export const schema = object().shape({
  cronjob: string().required('Es requerido agregar un cronjob'),
});
