/* eslint-disable react/jsx-props-no-spreading */
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useQuery } from 'react-query';
import { GetStaticProps } from 'next';
import HashLoader from 'react-spinners/HashLoader';

import { getWorkflows, Workflow } from '@/api/workflows';
import Button from '@/components/common/Button';
import { useCronJobsState } from '@/store/cronjobs';
import { schema } from '@/validations/cronjobInformationSchema';

import {
  CronJobInfoContainer,
  Container,
  ErrorMessage,
  Input,
  InputContainer,
  LabelInput,
  InputErrorContainer,
  InputDescription,
  InputSelect,
} from './styles';

interface CronJobInfoForm {
  name: string;
  description: string;
  workflow_id: number;
}

const CronJobInformation: FC<{ workflows?: Workflow[] }> = ({ workflows }) => {
  const {
    name,
    setName,
    description,
    setDescription,
    setWorkflowId,
    workflowId,
    setStepCron,
  } = useCronJobsState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CronJobInfoForm>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const { data, isLoading, error } = useQuery('workflows', getWorkflows, {
    initialData: workflows,
  });

  const onSubmit = handleSubmit(dataSubmit => {
    setName(dataSubmit.name);
    setDescription(dataSubmit.description);
    setWorkflowId(dataSubmit.workflow_id);
    setStepCron(1);
  });

  const handleRenderContent = () => {
    if (isLoading) return <HashLoader loading={isLoading} />;
    if (error) return <ErrorMessage>Error: {error}</ErrorMessage>;

    return (
      <CronJobInfoContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <InputContainer>
          <LabelInput>Nombre Cronjob</LabelInput>
          <InputErrorContainer>
            <Input
              placeholder="ej. Respaldo BD"
              defaultValue={name}
              {...register('name')}
            />
            {errors.name && <p>{errors.name.message}</p>}
          </InputErrorContainer>
        </InputContainer>
        <InputContainer>
          <LabelInput>Descripción</LabelInput>
          <InputErrorContainer>
            <InputDescription
              placeholder="eg. Se correrá cada Viernes"
              defaultValue={description}
              {...register('description')}
            />
            {errors.description && <p>{errors.description.message}</p>}
          </InputErrorContainer>
        </InputContainer>
        {!isLoading && (
          <InputSelect defaultValue={workflowId} {...register('workflow_id')}>
            {data?.map(workflow => (
              <option key={workflow.id} value={workflow.id}>
                {workflow.name}
              </option>
            ))}
          </InputSelect>
        )}
        {errors.workflow_id && <p>{errors.workflow_id.message}</p>}
        <Button label="Siguiente" type="submit" />
      </CronJobInfoContainer>
    );
  };

  return <Container onSubmit={onSubmit}>{handleRenderContent()}</Container>;
};

export const getStaticProps: GetStaticProps = async () => {
  const workflows: Workflow[] = await getWorkflows();
  return {
    props: { workflows },
  };
};

export default CronJobInformation;
