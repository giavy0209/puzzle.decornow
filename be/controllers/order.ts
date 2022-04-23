import { Request, Response } from 'express'
import Order from 'models/Order'
import { calculateFee, fetchDistricts, fetchProvinces, fetchWards } from 'services/GHN'
import { Admins, Products } from '../models'
import { isValidObjectId } from 'mongoose'
import { findAndPagin } from 'services'
import { postOrder } from 'services/sapo'
const order = {
    get: async (req: Request, res: Response) => {
        const { skip, limit, status ,sort} = req.query
        const query: { [k: string]: any } = {}
        if (status && status !== '-1') {
            query.status = Number(status)
        }
        const _sort: { [k: string]: any } = { createdAt: -1 }
        if(sort === '2') {
            _sort.createdAt = 1
        }
        if(sort === '3') {
            delete _sort.createdAt
            _sort.sum = -1
        }
        if(sort === '4') {
            delete _sort.createdAt
            _sort.sum = 1
        }

        const result = await findAndPagin({
            model: Order,
            skip: Number(skip),
            limit: Number(limit),
            query,
            sort : _sort,
        })
        res.send({ status: 1, ...result })
    },
    post: async (req: Request, res: Response) => {
        const {
            payload,
            address,
            province,
            district,
            ward,
            name,
            phone,
            items
        } = req.body

        try {
            const provinces = (await fetchProvinces()).data

            const findProvince = provinces.find(o => o.ProvinceID === province)?.ProvinceName
            if (!findProvince) return res.send({ status: 100 })

            const districts = (await fetchDistricts(province)).data
            const findDistricts = districts.find(o => o.DistrictID === district)?.DistrictName
            if (!findDistricts) return res.send({ status: 100 })

            const wards = (await fetchWards(district)).data
            const findWard = await wards.find(o => o.WardCode === ward)?.WardName
            if (!findWard) return res.send({ status: 100 })

            const shippingFee = (await calculateFee(district, ward)).data.total

            let orderPrice = 0

            for (let index = 0; index < items.length; index++) {
                const item = items[index];
                if (isValidObjectId(item.product)) {
                    const findProduct = await Products.findById(item.product)
                    if (!findProduct) return res.send({ status: 100 })
                    item.price = findProduct.price
                    item.name = findProduct.name
                    item.thumbnail = findProduct.thumbnail
                } else {
                    delete item.product
                    item.price = 500000
                    item.name = 'Tranh ghép'
                }
                item.sum = item.price * item.quantity
                orderPrice += item.sum
            }

            const order = await Order.create({
                user: payload?._id || null,
                province: findProvince,
                district: findDistricts,
                ward: findWard,
                address,
                name,
                phone,

                orderPrice,
                shippingFee,
                sum: orderPrice + shippingFee,

                items,
            })

            const data = await postOrder(order)
            console.log(data);
            console.log(123);
            

            res.send({ status: 1 })
        } catch (error) {
            res.send(error)
        }
    },
    patch: async (req: Request, res: Response) => {
        const {status} = req.body
        const _id = req.query._id
        if(!isValidObjectId(_id)) return
        await Order.findByIdAndUpdate(_id , {status})
        res.send({status : 1})
    }
}

export default order