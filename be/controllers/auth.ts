import { compareSync } from 'bcrypt'
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { Users } from 'models'
const auth = {
    adminAuth: async (req: Request, res: Response) => {
        try {
            const { username, password, } = req.body
            const validPassword = compareSync(password, username.password)
            if (!validPassword) return res.send({ status: 100 })
            const token = jwt.sign({ _id: username._id, role: username.role }, 'adminToken')
            res.send({ status: 1, token })
        } catch (error) {
            res.send(error)
        }
    },
    userAuth: async (req: Request, res: Response) => {
        try {
            const { email, password, isFB, name, id ,isGoogle} = req.body
            let findUser = await Users.findOne({ email })
            let token;
            if (isFB) {
                if (!findUser) {
                    findUser = await Users.create({ email, name, isFB, fbId: id })
                }
                token = jwt.sign({ _id: findUser._id }, 'userToken')
            } else if(isGoogle) {
                if (!findUser) {
                    findUser = await Users.create({ email, name, isGoogle, ggId: id })
                }
                token = jwt.sign({ _id: findUser._id }, 'userToken')
            }else {
                if (!findUser) return res.send({ status: 100 })
                const validPassword = compareSync(password, email.password)
                if (!validPassword) return res.send({ status: 100 })
                token = jwt.sign({ _id: findUser._id }, 'userToken')
            }
            res.send({ status: 1, token })
        } catch (error) {
            res.send(error)
        }
    },
}

export default auth