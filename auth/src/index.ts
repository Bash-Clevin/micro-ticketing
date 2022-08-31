import express from 'express'
import { json } from 'body-parser'
import 'express-async-errors'

import { currentUserRouter } from './routes/current_user'
import { signinRouter } from './routes/signin'
import { signoutRouter } from './routes/signout'
import { signupRouter } from './routes/signup'
import { errorHandler } from './middlewares/error_handler'
import { NotFoundError } from './errors/route_not_found_err'

const app = express()
app.use(json())

const port = 3000

app.use(currentUserRouter)
app.use(signinRouter)
app.use(signoutRouter)
app.use(signupRouter)

app.all('*', async (req, res) => {
    throw new NotFoundError()
})

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})