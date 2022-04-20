import { Router } from "express";
import { product } from "controllers";
import { isAdminAny } from "middleware/isAuth";
const router = Router()

router.route('/product')
    .get(
        product.get
    )
    .post(
        isAdminAny,
        product.post
    )
    .put(
        isAdminAny,
        product.put
    )
    .delete(
        isAdminAny,
        product.delete
    )
router.route('/product/:slug')
    .get(
        product.detail
    )
export default router