import { object, string } from 'yup';

export const schema = object().shape({
  name: string().max(50),
  description: string().max(500),
});
