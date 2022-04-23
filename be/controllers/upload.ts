import { Request, Response } from 'express'
import { Uploads, Users } from 'models'
import { findAndPagin } from 'services'
const user = {

    get: async (req: Request, res: Response) => {
        const {skip, limit} = req.query
        try {
            const result = await findAndPagin({
                model : Uploads,
                skip : Number(skip),
                limit : Number(limit),
                sort : {_id : -1}
            })
            res.send({status : 1 , ...result})
        } catch (error) {
            res.send(error)
        }
    },
    post: async (req: Request, res: Response) => {
        try {
            const file = req.file
            const data = await Uploads.create({path : `/upload/${file.filename}`})
            res.send({status : 1,data})
        } catch (error) {
            res.send(error)
        }
    },
}

export default user