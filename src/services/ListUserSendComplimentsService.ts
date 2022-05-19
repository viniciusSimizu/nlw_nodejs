import {ComplimentRepository} from "../repositories/ComplimentRepository";

export default class ListUserSendComplimentsService {

    async execute(id_user: string) {

        return await ComplimentRepository.find({
            where: {
                user_sender: id_user
            }
        });

    }

}