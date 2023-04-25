import { Router } from "express"; //utilizamos el modulo router para agrupar las rutas bajo un solo nombre
import {
  getMedicamento,
  createMedicamento,
  updateMedicamento,
  deleteMedicamento,
} from "../controllers/medicamento.controller.js";

//especificamos a express los grupos de ruta
const router = Router();

//rutas
router.get("/medicamento", getMedicamento);

router.post("/medicamento", createMedicamento);

router.patch("/medicamento/:id", updateMedicamento);

router.delete("/medicamento/:id", deleteMedicamento);

export default router;
