import axios from '../libs/axios';

// TODO: Unir Interfaces
interface CronjobData {
  name: string;
  description: string;
  scheduling: string;
  workflow_id: number;
}

interface Cronjob {
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
