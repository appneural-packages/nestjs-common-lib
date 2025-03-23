// interfaces/report.interface.ts

export interface IReport {
  _id?: string;
  reporterUserId: string;
  reportedUserId: string;
  reason: string;
  description?: string;
  isResolved?: boolean;
  reportType: "report" | "block";
  createdAt?: Date;
  updatedAt?: Date;
}
