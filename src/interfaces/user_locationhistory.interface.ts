
export interface IUserLocationHistory {
    _id?: string;
    userId: string;
    latitude: number;
    longitude: number;
    timestamp: Date;
    createdAt?: Date;
    updatedAt?: Date;
  }
  