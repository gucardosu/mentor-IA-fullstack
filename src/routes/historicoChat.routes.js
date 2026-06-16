import { Router } from "express";
import { salvarChat, listarChat } from "../controllers/historicoChat.controller.js";

const router = Router();

router.post("/", salvarChat);
router.get("/", listarChat);

export default router;