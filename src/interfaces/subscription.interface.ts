
export interface ISubscription {
    _id?: string;
    userId: string;
    planId: string;
    startDate: Date;
    endDate: Date;
    status?: string;
    createdAt?: Date;
    updatedAt?: Date;
  }
  