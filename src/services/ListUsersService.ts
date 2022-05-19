import {UserRepository} from "../repositories/UserRepository";
import {classToPlain} from "class-transformer";

export default class ListUsersService {

    async execute() {
        return classToPlain(await UserRepository.find());
    }

}