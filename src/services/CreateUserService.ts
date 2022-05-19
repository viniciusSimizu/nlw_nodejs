import {UserRepository} from "../repositories/UserRepository";
import {hash} from "bcryptjs";

interface IUserRequest {
    name: string
    email: string
    password: string
    admin?: boolean
}

export default class CreateUserService {

    async execute({ name, email, password, admin }: IUserRequest) {
        const userRepository = UserRepository;

        if(!email) {
            throw new Error('Email required');
        }

        const userAlreadyExist = await userRepository.findOne({
            where: {
                email
            }
        });

        if(userAlreadyExist) {
            throw new Error('User already exist');
        }

        const user = userRepository.create({
            name,
            email,
            admin,
            password: await hash(password, 9)
        });

        await userRepository.save(user);

        return user;
    };

};