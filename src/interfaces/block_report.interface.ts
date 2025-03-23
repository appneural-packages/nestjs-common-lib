
export interface IBlockReport {
    _id?: string;
    reporterId: string;
    reportedId: string;
    reportType: 'block' | 'report';
    reason?: string;
    isReviewed?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
  }
  