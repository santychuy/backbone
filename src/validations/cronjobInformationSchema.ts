import { object, string, number } from 'yup';

export const schema = object().shape({
  name: string()
    .required('Es requerido ponerle nombre')
    .max(50, 'Son 50 el límite de caracteres'),
  description: string()
    .required('Es requerido agregarle descripción')
    .max(500, 'Son 500 el límite de caracteres'),
  workflow_id: number().required('Necesitas seleccionar un Workflow'),
});
