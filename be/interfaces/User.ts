export default interface User {
    email : string,
    password : string,
    name : string,
    address: string,
    phone : string,
    dob: Date | number,
    createdAt : Date| number,
    gender : string,
    province : {
        id : string,
        name : string,
    },
    district : {
        id : string,
        name : string,
    } , 
    ward : {
        id : string,
        name : string,
    },
}