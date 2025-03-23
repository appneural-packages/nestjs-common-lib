
export interface IUserEducation {
    _id?: string;
    userId: string;
    institution: string;
    degree: string;
    fieldOfStudy?: string;
    startDate?: Date;
    endDate?: Date;
    grade?: string;
    description?: string;
    createdAt?: Date;
    updatedAt?: Date;
  }
  