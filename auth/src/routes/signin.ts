import express, { Request, Response } from 'express'
import { body } from 'express-validator'

import { validateRequest } from '../middlewares/validate_requests'

const router = express.Router()

router.post('/api/users/signin',
[
    body('email')
    .isEmail()
    .withMessage('Email is invalid'),
    body('password')
    .trim()
    .notEmpty()
    .withMessage('Apply a password')
], 
validateRequest,
(req: Request, res: Response) => {      
})

export { router as signinRouter }