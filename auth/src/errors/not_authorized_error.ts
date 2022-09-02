import { CustomError } from "./custom_errors";

export class NotAuhorizedError extends CustomError {
  statusCode = 401

  constructor() {
    super('Not authorized')

    Object.setPrototypeOf(this, NotAuhorizedError.prototype)
  }

  serializeErrors() {
    return [{ message: 'Not authorized' }]
  }
}