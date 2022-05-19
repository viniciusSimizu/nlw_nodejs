import {NextFunction, Request, Response} from "express";
import {verify} from "jsonwebtoken";

export function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {

    const bearerToken = request.headers.authorization

    if(!bearerToken) {
        return response.status(401).json({
            message: 'Token required'
        })
    }

    const [, token ] = bearerToken.split(' ')

    try {

        const { sub } = verify(token, process.env.PRIVATE_KEY)
        response.locals.id_token = sub
        return next()

    } catch {
        return response.status(401).json({
            message: 'Login required'
        })
    }
}