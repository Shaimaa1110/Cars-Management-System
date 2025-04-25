


interface Customer{
    id?:string,
    fullName:string,
    email:string,
    password:string,
    conferm_password:string,
    phone:number|null,
    registrationDate:Date|null,
    gender:string,
    terms:boolean|null,
    country:string,
    city:string,
    street:string
}
export default Customer;