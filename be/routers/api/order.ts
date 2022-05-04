import { Router } from "express";
import {order} from "controllers";
import { isAdminAny, isUserOrNot } from "middleware/isAuth";
const router = Router()

router.route('/order')
    .get(
        isUserOrNot,
        order.get,
    )
    .post(
        isUserOrNot,
        order.post
    )
    .patch(
        isAdminAny,
        order.patch
    )
export default router