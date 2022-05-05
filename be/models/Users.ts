import { Schema, model } from 'mongoose'
import { User } from 'interfaces'

const UsersSchema = new Schema<User>({
    email : {type : String, required : true,unique : true},
    password : {type : String},
    dob : {type : Date,},
    name : {type : String},
    phone : {type : String},
    gender : {type : String},
    province : {
        name : {type : String},
        id : {type : String},
    },
    district : {
        name : {type : String},
        id : {type : String},
    },
    ward : {
        name : {type : String},
        id : {type : String},
    },
    address : {type : String},
    isFB : {type : Boolean, default : false},
    isGoogle : {type : Boolean, default : false},
    fbId : {type : String},
    ggId : {type : String},
}, {
    timestamps: true
})

const Users = model<User>('users', UsersSchema)

export default Users