import callAPI from "call"

export const CHANGE_CART = 'CHANGE_CART'

export const actionChangeCart = function (cart) {
    return {
        type: CHANGE_CART,
        payload: { cart }
    }
}