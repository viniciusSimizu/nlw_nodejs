import {Request, Response} from "express";
import ListUserReceiveComplimentsService from "../services/ListUserReceiveComplimentsService";
import ListUserSendComplimentsService from "../services/ListUserSendComplimentsService";

export default class ListUserSendComplimentsController {

    async handle(request: Request, response: Response) {

        const listUserSendService = new ListUserSendComplimentsService()

        const compliments = await listUserSendService.execute(response.locals.id_token)

        return response.json(compliments)

    }

}