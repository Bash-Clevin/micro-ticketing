import { Request, Response, NextFunction } from 'express'
import { NotAuhorizedError } from '../errors/not_authorized_error'

export const requireAuth = (req: Request, res: Response, next: NextFunction ) => {
  if (!req.currentUser) {
    throw new NotAuhorizedError()
  }

  next()
}