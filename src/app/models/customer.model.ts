import { UserType } from "../enums/user.enum";
import { User } from "./user.model";



export interface Customer extends User {
  confirm_password: string;
  phone: number | null;
  registrationDate: Date | null;
  gender: string;
  terms: boolean | null;
  country: string;
  city: string;
  street: string;
  role: UserType.customer;
}
export default Customer;
