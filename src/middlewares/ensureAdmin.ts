import {NextFunction, Request, Response} from "express";
import {UserRepository} from "../repositories/UserRepository";

export default async function ensureAdmin(request: Request, response: Response, next: NextFunction) {

    const { admin } = await UserRepository.findOne({
        where: {
            id_user: response.locals.id_token
        }
    });

    if(admin) {
        return next()
    }

    return response.status(401).json({
        error: 'Unauthorized'
    })

}