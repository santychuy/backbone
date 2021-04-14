import axios from '../libs/axios';

export interface Workflow {
  id: number;
  name: string;
  description: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date | null;
}

export const getWorkflows = async () => {
  try {
    const res = await axios.get('/workflow');
    const workflows: Workflow[] = res.data;
    return workflows;
  } catch (e) {
    throw new Error(e.message);
  }
};
