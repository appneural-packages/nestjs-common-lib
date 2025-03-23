
export interface ISubscriptionPlan {
    _id?: string;
    planName: string;
    price: number;
    durationInDays: number;
    isActive?: boolean;
  }
  