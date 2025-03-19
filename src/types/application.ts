export interface Application {
  id?: string;
  companyName: string;
  position: string;
  applyDate: Date;
  status: "applied" | "interview" | "offer" | "rejected" | "withdrawn";
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type ApplicationFormData = Omit<
  Application,
  "id" | "createdAt" | "updatedAt"
>;
