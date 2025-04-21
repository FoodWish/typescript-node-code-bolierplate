import { Request, Response } from "express";
import authService from "../services/auth.service";

const login = async (req: Request, res: Response) => {
    const user = await authService.login();
    res.status(200).json(user);
}

export default { login };

