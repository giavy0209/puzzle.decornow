import { Schema, model } from 'mongoose'
import { Categories } from 'interfaces'

const CategoriesSchema = new Schema<Categories>({
    name : {type : String, default : ''},
    nameSeo : {type : String, default : ''},
    description : {type : String, default : ''},
    type : {type : Number, default : 1},
    category : {type : Schema.Types.ObjectId, ref : 'categories'},
    slug : {type : String},
    thumbnail : {type : String},
}, {
    timestamps: true
})

const Categories = model<Categories>('categories', CategoriesSchema)
export default Categories