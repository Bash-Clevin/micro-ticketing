import { CustomError } from "./custom_errors"

export class DatabaseConnectionError extends CustomError {
  statusCode = 500
  reason = 'Error Connecting to database'

  constructor () {
    super('Error connecting to db')

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype)
  }

  serializeErrors() {
    return [
      {
        message: this.reason
      }
    ]
  }
}