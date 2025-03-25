export enum ApplicationStatus {
  APPLIED = "applied",
  INTERVIEWING = "interviewing",
  OFFERED = "offered",
  REJECTED = "rejected",
}

export interface Application {
  id?: string;
  companyName: string;
  position: string;
  applyDate: string;
  status: ApplicationStatus;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type ApplicationFormData = Omit<
  Application,
  "id" | "createdAt" | "updatedAt"
>;
