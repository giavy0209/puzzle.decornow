import { Schema, model } from 'mongoose'
import { Product } from 'interfaces'

const ProductSchema = new Schema<Product>({
    name : {type : String, default : ''},
    nameSeo : {type : String, default : ''},
    description : {type : String, default : ''},
    category : {type : Schema.Types.ObjectId, ref : 'categories'},
    content : {type : String },
    slug : {type : String},
    thumbnail : {type : String},
    images : [{type : String}],
}, {
    timestamps: true
})

const Products = model<Product>('products', ProductSchema)
export default Products