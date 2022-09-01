import express, { Request, Response} from 'express'
import { body } from 'express-validator'
import jwt from 'jsonwebtoken'

import { User } from '../models/user'
import { BadRequestError } from '../errors/bad_req_error'
import { validateRequest } from '../middlewares/validate_requests'

const router = express.Router()

router.post('/api/users/signup', [
    body('email')
    .isEmail()
    .withMessage('Email must be valid'),
    body('password')
    .trim()
    .isLength({ min: 4, max:20 })
    .withMessage('Password should be between 4 and 20 characters')
],
validateRequest, 
async (req: Request, res: Response) => {  
    const { email, password } = req.body 
    
    const existingUser = await User.findOne({ email })

    if (existingUser) {
        throw new BadRequestError('Email is in use')
    } 

    const user = User.build({ email, password })
    await user.save()

    // Generate JWT
    const userJwt = jwt.sign(
        {
            id: user.id,
            email: user.email
        }, process.env.JWT_KEY!
    )

    // Store token in session
    req.session = {
        jwt: userJwt
    }

    res.status(201).send(user)
})

export { router as signupRouter }