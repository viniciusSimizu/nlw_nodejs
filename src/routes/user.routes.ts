import {Router} from "express";
import CreateUserController from "../controllers/CreateUserController";
import ListUserReceiveComplimentsController from "../controllers/ListUserReceiveComplimentsController";
import ListUserSendComplimentsController from "../controllers/ListUserSendComplimentsController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import ListUsersController from "../controllers/ListUsersController";

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();

const userRouter = Router();
const userComplimentsRouter = Router();

userComplimentsRouter.get(
    '/send',
    listUserSendComplimentsController.handle
)

userComplimentsRouter.get(
    '/receive',
    listUserReceiveComplimentsController.handle
)

userRouter.post(
    '',
    createUserController.handle
);

userRouter.get(
    '',
    // [ensureAuthenticated],
    listUsersController.handle
)

userRouter.use('/compliments', [ensureAuthenticated], userComplimentsRouter)

export default userRouter