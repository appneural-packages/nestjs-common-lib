export interface IUserVerification {
    _id?: string;
    userId: string;
    documentType?: string;
    documentUrl?: string;
    status?: 'pending' | 'verified' | 'rejected';
    notes?: string;
    createdAt?: Date;
    updatedAt?: Date;
  }
  