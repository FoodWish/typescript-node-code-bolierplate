import { Router } from "express";
import AuthRoutes from "./auth.route";

const router = Router();

const routes =[
    {
        path: "/auth",
        component: AuthRoutes
    }
]

routes.forEach((route) => {
    router.use(route.path, route.component);
});

export default router;
