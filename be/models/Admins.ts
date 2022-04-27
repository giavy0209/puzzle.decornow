import { Schema, model } from 'mongoose'
import { Admin } from 'interfaces'
import { hashSync } from 'bcrypt'

const AdminSchema = new Schema<Admin>({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String },
    role : [{type : Number}],
}, {
    timestamps: true
})

const Admins = model<Admin>('admins', AdminSchema)

export default Admins