import { Router } from "express";
import {
  criarTrilha,
  listarTrilhas,
  buscarTrilhaPorId,
  atualizarTrilha,
  deletarTrilha,
} from "../controllers/trilha.controller.js";

const router = Router();
router.post("/", criarTrilha);
router.get("/", listarTrilhas);
router.get("/:id", buscarTrilhaPorId);
router.put("/:id", atualizarTrilha);
router.delete("/:id", deletarTrilha);

export default router;
