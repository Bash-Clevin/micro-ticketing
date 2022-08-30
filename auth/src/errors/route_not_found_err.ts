import { CustomError } from "./custom_errors";

export class NotFoundError extends CustomError {
  statusCode = 400

  constructor() {
    super('Rout not found')

    Object.setPrototypeOf(this, NotFoundError.prototype)
  }

  serializeErrors() { 
    return [{ message: 'Route not found'}]    
  }
}