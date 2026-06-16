import { Router } from "express";
import {
  criarPlano,
  listarPlanos,
  atualizarPlano,
  deletarPlano
} from "../controllers/planoEstudo.controller.js";

const router = Router();

router.post("/", criarPlano);
router.get("/", listarPlanos);
router.put("/:id", atualizarPlano);
router.delete("/:id", deletarPlano);

export default router;