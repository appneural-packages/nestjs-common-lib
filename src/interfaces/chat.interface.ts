
export interface IChat {
    _id?: string;
    participants: string[];
    lastMessage?: string;
    isGroupChat?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
  }
  