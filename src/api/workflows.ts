import { Workflow } from '@/interfaces/';

import axios from '../libs/axios';

export const getWorkflows = async () => {
  try {
    const res = await axios.get('/workflow');
    const workflows: Workflow[] = res.data;
    return workflows;
  } catch (e) {
    throw new Error(e.message);
  }
};
