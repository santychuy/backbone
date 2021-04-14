import axios from '../libs/axios';

// TODO: Unir Interfaces
export interface CronjobData {
  name: string;
  description: string;
  scheduling: string;
  workflow_id: number;
}

export interface Cronjob {
  id: number;
  name: string;
  description: string;
  scheduling: string;
  workflow_id: number;
  oauth_client_id: number | null;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date | null;
}

interface CronJobEdit {
  id: number;
  name: string;
  description: string;
  scheduling: string;
  workflowId: number;
}

export const getCronJobs = async () => {
  try {
    const res = await axios.get('/cronjob');
    const cronjobs: Cronjob[] = res.data;
    return cronjobs;
  } catch (e) {
    throw new Error(e.message);
  }
};

export const createCronJob = async (cronjob: CronjobData) => {
  try {
    await axios.post('/cronjob', { ...cronjob });
  } catch (e) {
    throw new Error(e.message);
  }
};

export const editCronJob = async (cronjob: CronJobEdit) => {
  const { id, description, name, scheduling, workflowId } = cronjob;
  try {
    await axios.put(`/cronjob/${id}`, {
      name,
      description,
      scheduling,
      workflow_id: workflowId,
    });
  } catch (e) {
    throw new Error(e.message);
  }
};

export const deleteCronJob = async (id: number) => {
  try {
    await axios.delete(`/cronjob/${id}`);
  } catch (e) {
    throw new Error(e.message);
  }
};
