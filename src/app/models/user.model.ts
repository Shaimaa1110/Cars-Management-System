import { UserType } from "../enums/user.enum";

export interface User {
  fullName: string;
  email: string;
  password: string;
  type: UserType;
  address?: {  // اجعلها اختيارية
    country: string;
    city: string;
  };
}
