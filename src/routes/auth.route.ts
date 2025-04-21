import { Router } from "express";
import authController from "../controllers/auth.controller";

const AuthRouter = Router();

AuthRouter.post("/login", authController.login);

export default AuthRouter;
