import { Router } from "express";
import { salvarAvaliacao, listarAvaliacoes } from "../controllers/historicoAvaliacao.controller.js";

const router = Router();

router.post("/", salvarAvaliacao);
router.get("/", listarAvaliacoes);

export default router;