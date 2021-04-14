import create, { State } from 'zustand';

interface CronJobsStateType extends State {
  name: string;
  setName: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
  workflowId?: number;
  setWorkflowId: (value?: number) => void;
  cronjob: string;
  setCronjob: (value: string) => void;
  isEditing: boolean;
  setIsEditing: (isEditing: boolean) => void;
  cronJobId?: number;
  setCronJobId: (id?: number) => void;
  stepCron: number;
  setStepCron: (index: number) => void;
}

export const useCronJobsState = create<CronJobsStateType>(set => ({
  name: '',
  setName: name => set({ name }),
  description: '',
  setDescription: description => set({ description }),
  workflowId: undefined,
  setWorkflowId: workflowId => set({ workflowId }),
  cronjob: '',
  setCronjob: cronjob => set({ cronjob }),
  isEditing: false,
  setIsEditing: isEditing => set({ isEditing }),
  cronJobId: undefined,
  setCronJobId: cronJobId => set({ cronJobId }),
  stepCron: 0,
  setStepCron: stepCron => set({ stepCron }),
}));
