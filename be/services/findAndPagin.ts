import {Model} from 'mongoose'
export default async function findAndPagin({
    model,
    query = {},
    sort = {},
    skip = 0,
    limit = 10,
    populate = ''
}: {
    model : Model<any>,
    query? : {[k:string] : any},
    sort? : {[k:string] : any},
    skip? : number | string,
    limit? : number | string,
    populate? : string
}) {
    skip = skip || 0
    limit = limit || 10
    const [data, total] = await Promise.all([
        model.find(query)
        .sort(sort)
        .skip(Number(skip))
        .limit(Number(limit))
        .populate(populate),
        model.countDocuments(query)
    ])

    return {data,total}
}