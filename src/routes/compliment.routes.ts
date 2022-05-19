import CreateTagController from "../controllers/CreateTagController";
import {Router} from "express";
import CreateComplimentController from "../controllers/CreateComplimentController";

const createComplimentController = new CreateComplimentController();

const complimentRouter = Router()

complimentRouter.post(
    '',
    createComplimentController.handle
)

export default complimentRouter