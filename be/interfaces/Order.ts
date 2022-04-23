import {Types} from 'mongoose'

interface Items {
    name : string,
    price : number,
    quantity : number,
    thumbnail : string,
    sum : number,
    product : Types.ObjectId
}

export default interface Order {
    user : Types.ObjectId,
    
    isPay : boolean,
    payBy : string,
    payAt : Date | number,

    name : string,
    phone : string,

    address : string,
    province : string,
    district : string,
    ward : string,

    orderPrice : number,
    shippingFee : number,
    sum : number,
    
    items : Items[],
    status : number
}