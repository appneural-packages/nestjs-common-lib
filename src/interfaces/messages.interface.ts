
export interface IMessage {
    _id?: string;
    chatId: string;
    senderId: string;
    content: string;
    read?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
  }
  