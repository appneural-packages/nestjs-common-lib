
export interface IUserSettings {
    _id?: string;
    userId: string;
    emailNotifications?: boolean;
    smsNotifications?: boolean;
    pushNotifications?: boolean;
    privacySettings?: Record<string, any>;
    createdAt?: Date;
    updatedAt?: Date;
  }
  