import {ComplimentRepository} from "../repositories/ComplimentRepository";
import {UserRepository} from "../repositories/UserRepository";
import {TagRepository} from "../repositories/TagRepository";

interface IComplimentRequest {
    id_tag: string;
    user_sender: string;
    user_receiver: string;
    message: string;
}

export default class CreateComplimentService {

    async execute({ id_tag, user_sender, user_receiver, message }: IComplimentRequest) {

        if(user_sender == user_receiver) {
            throw new Error("Can't compliment yourself")
        }

        const complimentRepository = ComplimentRepository

        const userReceiverExist = await UserRepository.findOne({
            where: {
                id_user: user_receiver
            }
        })

        if(!userReceiverExist) {
            throw new Error("User receiver doesn't exist")
        }

        const tagExist = await TagRepository.findOne({
            where: {
                id_tag
            }
        })

        if(!tagExist) {
            throw new Error("Tag doesn't exist")
        }

        const compliment = complimentRepository.create({
            id_tag,
            user_receiver,
            user_sender,
            message
        })

        await complimentRepository.save(compliment);

        return compliment;
    }

}