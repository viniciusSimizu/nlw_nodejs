import {UserRepository} from "../repositories/UserRepository";
import {compare} from "bcryptjs";
import {sign} from "jsonwebtoken";

interface IAuthenticateRequest {
    email: string
    password: string
}

export default class AuthenticateUserService {

    async execute({ email, password }: IAuthenticateRequest) {
        const user = await UserRepository.findOne({
            where: {
                email
            }
        })

        if(!await compare(password, user.password)) {
            throw new Error('email/password incorrect')
        }

        return {
            token: sign(
                {
                    email
                },
                process.env.PRIVATE_KEY,
                {
                    subject: user.id_user,
                    expiresIn: process.env.TOKEN_DURATION
                })
        }

    }

}