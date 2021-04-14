import create, { State } from 'zustand';

interface CronJobsStateType extends State {
  name: string;
  setName: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
  workflowId?: number;
  setWorkflowId: (value: number | undefined) => void;
  step: number;
  nextStep: () => void;
  prevStep: () => void;
  resetStep: () => void;
  setStep: (step: number) => void;
  valueCron: string;
  setValueCron: (value: string) => void;
  seconds: string;
  minute: string;
  hour: string;
  dayMonth: string;
  month: string;
  dayWeek: string;
  cronJob: string;
  setSeconds: (value: string) => void;
  setMinute: (value: string) => void;
  setHour: (value: string) => void;
  setDayMonth: (value: string) => void;
  setMonth: (value: string) => void;
  setDayWeek: (value: string) => void;
  setCronJob: (value: string) => void;
  isEditing: boolean;
  setIsEditing: (isEditing: boolean) => void;
  cronJobId?: number;
  setCronJobId: (id: number | undefined) => void;
}

export const useCronJobsState = create<CronJobsStateType>(set => ({
  name: '',
  setName: name => set({ name }),
  description: '',
  setDescription: description => set({ description }),
  workflowId: undefined,
  setWorkflowId: workflowId => set({ workflowId }),
  step: 0,
  nextStep: () => set(state => ({ step: state.step + 1 })),
  prevStep: () => set(state => ({ step: state.step - 1 })),
  resetStep: () => set({ step: 0 }),
  setStep: step => set({ step }),
  valueCron: '',
  setValueCron: value => set({ valueCron: value }),
  seconds: '*',
  setSeconds: seconds => set({ seconds }),
  minute: '*',
  setMinute: minute => set({ minute }),
  hour: '*',
  setHour: hour => set({ hour }),
  dayMonth: '*',
  setDayMonth: dayMonth => set({ dayMonth }),
  month: '*',
  setMonth: month => set({ month }),
  dayWeek: '*',
  setDayWeek: dayWeek => set({ dayWeek }),
  cronJob: '* * * * * *',
  setCronJob: cronJob => set({ cronJob }),
  isEditing: false,
  setIsEditing: isEditing => set({ isEditing }),
  cronJobId: undefined,
  setCronJobId: id => set({ cronJobId: id }),
}));
