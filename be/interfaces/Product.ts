import {Types} from 'mongoose'
export default interface Product {
    name : string,
    nameSeo : string,
    description : string,
    content : string,
    category : Types.ObjectId,
    slug : string,
    thumbnail : string,
    images : string[],
    price : number
}