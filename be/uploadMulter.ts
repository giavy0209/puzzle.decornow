import multer from 'multer'
import path from 'path'
import fs from 'fs'


const diskStorage = multer.diskStorage({
    destination: (req, file, callback) => {
        const isHavePublic = fs.existsSync('public')
        if(!isHavePublic) fs.mkdirSync('public')
        const isHaveUpload = fs.existsSync('public/upload')
        if(!isHaveUpload) fs.mkdirSync('public/upload')

        callback(null, 'public/upload')
    },
    filename : (req,file , callback) => {
        const ext = path.extname(file.originalname)
        callback(null, Date.now()+(ext || '.jpg'))
    }
})

const upload = multer({storage : diskStorage}).single('file')

export default upload