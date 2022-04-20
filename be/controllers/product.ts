import { isValidObjectId } from "mongoose"
import { Products } from "models"
import { Request, Response } from 'express'
import { findAndPagin } from "services"
import slug from 'slug'
const category = {
    get: async (req: Request, res: Response) => {
        const { skip, limit, category } = req.query
        const query: { [k: string]: any } = {}
        if (isValidObjectId(category)) {
            query.category = category
        }
        const result = await findAndPagin({ model: Products, query, sort: { _id: -1 }, skip: Number(skip), limit: Number(limit), populate: 'category' })

        res.send({ status: 1, ...result })
    },
    post: async (req: Request, res: Response) => {
        await Products.create({ ...req.body, slug :slug(req.body.name) + Date.now() })
        res.send({ status: 1 })
    },
    put: async (req: Request, res: Response) => {
        const { _id } = req.query
        await Products.findByIdAndUpdate(_id, req.body)
        res.send({ status: 1 })
    },
    delete: async (req: Request, res: Response) => {
        const { _id } = req.query

        await Products.findByIdAndDelete(_id)
        res.send({ status: 1 })
    },
    detail : async (req: Request, res: Response) => {
        const {slug} = req.params
        const data = await Products.findOne({slug})
        res.send({status : 1 , data})
    }
}

export default category