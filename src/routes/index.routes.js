import { Router } from "express";
import { ping } from "../controllers/index.controller.js";
const router = Router();

//ruta utilizada para probar la coneccion a DB
router.get("/ping", ping);

export default router;
