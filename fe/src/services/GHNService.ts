import axios from "axios"

const GHN_DATA = Object.freeze({
    BASE_URL: 'https://dev-online-gateway.ghn.vn/shiip/public-api',
    TOKEN: '2bf996ce-638c-11ec-ac64-422c37c6de1b',
    CLIENT_ID: '2501985',
    SHOP_ID: 84536,
    SHOP_DISTRICT_ID: 1454,
    SHOP_WARD_CODE: 21211
})

const callAPI = axios.create({
    baseURL: GHN_DATA.BASE_URL,
    headers: {
        'Token': GHN_DATA.TOKEN,
        'Content-Type': 'application/json'
    }
})

export const fetchShops = async () => {
    return await callAPI.post('/v2/shop/all')
        .then(data => data && data.status === 200 ? data.data : null)
}

export const fetchProvinces = async () => {
    return await callAPI.get('/master-data/province')
        .then(data => data && data.status === 200 ? data.data : null)
}

export const fetchDistricts = async (provinceId) => {
    return await callAPI.get(`/master-data/district?province_id=${provinceId}`)
        .then(data => data && data.status === 200 ? data.data : null)
}

export const fetchWards = async (districtId) => {
    return await callAPI.get(`/master-data/ward?district_id=${districtId}`)
        .then(data => data && data.status === 200 ? data.data : null)
}

export const fetchServices = async (toDistrictId) => {
    return await callAPI.post('/v2/shipping-order/available-services', {
        shop_id: GHN_DATA.SHOP_ID,
        from_district: GHN_DATA.SHOP_DISTRICT_ID,
        to_district: toDistrictId
    })
        .then(data => data && data.status === 200 ? data.data : null)
}

export const calculateFee = async (districtId, service, wardCode) => {
    return await callAPI.post('/v2/shipping-order/fee', {
        from_district_id: GHN_DATA.SHOP_DISTRICT_ID,
        service_id: service.service_id,
        service_type_id: service.service_type_id,
        to_district_id: districtId,
        to_ward_code: wardCode.toString(),
        height: 50,
        length: 20,
        weight: 200,
        width: 20,
        insurance_value: null,
        coupon: null
    })
        .then(data => data && data.status === 200 ? data.data : null)
}
