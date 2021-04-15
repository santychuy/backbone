/* eslint-disable @typescript-eslint/naming-convention */
import { CronJobEdit, CronjobData, CronjobRes } from '@/interfaces/';

import axios from '../libs/axios';

export const getCronJobs = async () => {
  try {
    const res = await axios.get('/cronjob');
    const cronjobs: CronjobRes[] = res.data;
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
  const { id, description, name, scheduling, workflow_id } = cronjob;
  try {
    await axios.put(`/cronjob/${id}`, {
      name,
      description,
      scheduling,
      workflow_id,
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
