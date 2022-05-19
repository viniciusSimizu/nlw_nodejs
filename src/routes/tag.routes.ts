import CreateTagController from "../controllers/CreateTagController";
import {Router} from "express";
import ListTagsController from "../controllers/ListTagsController";

const createTagController = new CreateTagController();
const listTagsController = new ListTagsController();

const tagRouter = Router()

tagRouter.post(
    '',
    createTagController.handle
)

tagRouter.get(
    '',
    listTagsController.handle
)

export default tagRouter