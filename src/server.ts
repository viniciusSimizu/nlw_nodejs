import 'dotenv/config'
import 'reflect-metadata'
import 'express-async-errors'

import express, {NextFunction, Request, Response} from 'express'
import sqliteDataSource from "./database";
import tagRouter from "./routes/tag.routes";
import ensureAdmin from "./middlewares/ensureAdmin";
import authenticateUserRouter from "./routes/authenticateUser.router";
import complimentRouter from "./routes/compliment.routes";
import {ensureAuthenticated} from "./middlewares/ensureAuthenticated";
import userRouter from "./routes/user.routes";

sqliteDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

const app = express();
app.use(express.json());

app.use('/users', userRouter);
app.use('/auth', authenticateUserRouter);
app.use('/tags', [ensureAuthenticated, ensureAdmin], tagRouter);
app.use('/compliments', [ensureAuthenticated, ensureAdmin], complimentRouter)

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof Error) {
        return response.status(400).json({
            error: err.message
        })
    }
    return response.status(500).json({
        status: 'error',
        message: 'Internal Server Error'
    })
})

app.listen(3000, () => console.log('Server is running'))

export { app }
