import {Request, Response} from "express";
import CreateComplimentService from "../services/CreateComplimentService";

export default class CreateComplimentController {

    async handle(request: Request, response: Response) {
        const { id_tag, user_receiver, message } = request.body
        const user_sender = response.locals.id_token

        const createComplimentService = new CreateComplimentService();

        const compliment = await createComplimentService.execute({
            id_tag,
            user_sender,
            user_receiver,
            message
        })

        return response.json(compliment)
    }

}