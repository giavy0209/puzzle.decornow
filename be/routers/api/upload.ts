import { Router } from "express";
import {upload} from "controllers";
import { isAdminAny } from "middleware/isAuth";
import uploadFile from "../../uploadMulter";
const router = Router()

router.route('/upload')
    .get(
        isAdminAny,
        upload.get
    )
    .post(
        uploadFile,
        upload.post, 
    )

export default router