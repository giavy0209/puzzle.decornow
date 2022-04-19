import { Router } from "express";
import { category } from "controllers";
import { isAdminAny } from "middleware/isAuth";
const router = Router()

router.route('/categories')
    .get(
        category.get
    )
    .post(
        isAdminAny,
        category.post
    )
    .put(
        isAdminAny,
        category.put
    )
    .delete(
        isAdminAny,
        category.delete
    )

router.route('/categories_nested')
    .get(
        category.getNested
    )

router.route('/categories/:slug')
    .get(
        category.detail
    )
export default router