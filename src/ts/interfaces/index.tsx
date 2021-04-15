export interface CronjobData {
  name: string;
  description: string;
  scheduling: string;
  workflow_id: number;
}

export interface CronjobRes extends CronjobData {
  id: number;
  oauth_client_id: number | null;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date | null;
}

export interface CronJobEdit extends CronjobData {
  id: number;
}

export interface Workflow {
  id: number;
  name: string;
  description: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date | null;
}
