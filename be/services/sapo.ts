import axios from "axios"

const callAPI = axios.create({
    baseURL : 'https://0c9badff75884a74badf1b0c440d3990:d8c1ab5bccda4b13bb298979180d0d5d@test-36.mysapo.net/admin/',
})

export const postOrder = async (order) => {
    return await callAPI.post('/orders.json' , {
        order : {
            billing_address : {
                address1 : `${order.ward} ${order.district} ${order.province}`,
                address2 : order.address,
                province : order.province,
                city : order.district,
                first_name : order.name,
                phone : order.phone,
            },
            shipping_address : {
                address1 : `${order.ward} ${order.district} ${order.province}`,
                address2 : order.address,
                province : order.province,
                city : order.district,
                first_name : order.name,
                phone : order.phone,
            },

            line_items : order.items.map(o => ({
                price : o.price,
                grams : '500',
                quantity : o.quantity,
                title : o._id
            }))
        }
    })
}