import { isValidObjectId } from "mongoose"
import { Categories, Products } from "models"
import { Request, Response } from 'express'
import { findAndPagin } from "services"
import slug from 'slug'
const category = {
    get: async (req: Request, res: Response) => {
        const { skip, limit, category,type } = req.query
        
        const query: { [k: string]: any } = {}
        if(Number(type)) query.type = Number(type)
        if (isValidObjectId(category)) {
            const findChildCategory = (await Categories.find({category})).map(o => o._id.toString())
            findChildCategory.push(category.toString())
            query.category = {$in : findChildCategory}
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
        console.log(slug);
        
        const data = await Products.findOne({slug})
        res.send({status : 1 , data})
    }
}

export default category