import {Router} from "express";
import AuthenticateUserController from "../controllers/AuthenticateUserController";

const authenticaticaUserController = new AuthenticateUserController();

const router = Router()

router.post(
    '',
    authenticaticaUserController.handle
)

export default router