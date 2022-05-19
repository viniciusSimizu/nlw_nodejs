import {ComplimentRepository} from "../repositories/ComplimentRepository";

export default class ListUserReceiveComplimentsService {

    async execute(id_user: string) {

        return await ComplimentRepository.find({
            where: {
                user_receiver: id_user
            },
            relations: [
                'userSender',
                'userReceiver',
                'tag'
            ]
        });

    }

}