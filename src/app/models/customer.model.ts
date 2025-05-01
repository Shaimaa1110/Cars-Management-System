<<<<<<< HEAD
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
=======
export interface Customer {
    id: number;   
    name: string;
    phone: string;
    email: string;
    address: string;
  }
  
>>>>>>> 8614823595ec1cad9289d30b814be829103ff806
