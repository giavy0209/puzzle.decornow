import {Types} from 'mongoose'
export default interface Categories {
    name : string,
    nameSeo : string,
    description : string,
    type : number,
    category : Types.ObjectId,
    slug : string,
    thumbnail : string,
}