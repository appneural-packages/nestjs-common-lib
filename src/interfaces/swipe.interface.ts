
export interface ISwipe {
    _id?: string;
    swiperId: string;
    swipeeId: string;
    type: 'like' | 'dislike';
    createdAt?: Date;
    updatedAt?: Date;
  }
  