import { Router } from "express";
import {order} from "controllers";
import { isAdminAny } from "middleware/isAuth";
const router = Router()

router.route('/order')
    .get(order.get)
    .post(
        order.post
    )
    .patch(
        isAdminAny,
        order.patch
    )
export default router