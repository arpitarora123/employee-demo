export class EmployeeDetails {
    _id?: String;
    name: String;
    age: Number;
    addresses: {
        currentaddress: String,
        permanentaddress: String
    };
}