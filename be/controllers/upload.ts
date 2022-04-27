import { Request, Response } from 'express'
import { Uploads, Users } from 'models'
import { findAndPagin } from 'services'
import fs from 'fs'
import path from 'path'
import { upload } from 'services/bunny'
const user = {

    get: async (req: Request, res: Response) => {
        const { skip, limit } = req.query
        try {
            const result = await findAndPagin({
                model: Uploads,
                skip: Number(skip),
                limit: Number(limit),
                sort: { _id: -1 }
            })
            res.send({ status: 1, ...result })
        } catch (error) {
            res.send(error)
        }
    },
    post: async (req: Request, res: Response) => {
        try {
            const file = req.file
            const ext = path.extname(file.filename)
            const filepath = path.join(__dirname,'../', file.path)
            const data = new Uploads()

            const filename = `${data._id}${ext}`
            console.log(filename);
            
            const readfile = fs.readFileSync(filepath)

            await upload(readfile , filename)

            data.path = `/puzzle/${filename}`
            await data.save()

            res.send({ status: 1, data })
        } catch (error) {
            console.log(error);
            
            res.send(error)
        }
    },
}

export default user