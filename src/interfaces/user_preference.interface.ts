
export interface IUserPreferences {
    _id?: string;
    userId: string;
    ageRange?: { min: number; max: number };
    genderPreference?: string;
    location?: string;
    interests?: string[];
    createdAt?: Date;
    updatedAt?: Date;
  }
  