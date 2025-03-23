export interface IUser {
  _id?: string;
  fullName: string;
  email: string;
  password: string;
  phoneNumber?: string;
  isVerified?: boolean;
  profilePic?: string;
  gender?: string;
  birthdate?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}
