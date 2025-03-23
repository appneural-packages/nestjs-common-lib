export interface IDeviceToken {
    _id?: string;
    userId: string;
    deviceToken: string;
    deviceType?: string;
    createdAt?: Date;
    updatedAt?: Date;
  }
  