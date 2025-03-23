export interface IActivityLog {
    _id?: string;
    userId: string;
    action: string;
    meta?: Record<string, any>;
    createdAt?: Date;
    updatedAt?: Date;
  }
  