import { Schema, model } from 'mongoose'
import { Upload } from 'interfaces'

const UploadSchema = new Schema<Upload>({
    path: { type: String},
}, {
    timestamps: true
})

const Uploads = model<Upload>('uploads', UploadSchema)
export default Uploads