import {Request, Response} from "express";
import ListUserReceiveComplimentsService from "../services/ListUserReceiveComplimentsService";

export default class ListUserReceiveComplimentsController {

    async handle(request: Request, response: Response) {

        const listUserReceiveService = new ListUserReceiveComplimentsService()

        const compliments = await listUserReceiveService.execute(response.locals.id_token)

        return response.json(compliments)

    }

}