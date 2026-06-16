import { HistoricoChat, User } from "../models/index.js";

// 1. Salvar uma nova conversa com a IA (POST)
export const salvarChat = async (req, res) => {
  try {
    const { pergunta, resposta, usuarioId } = req.body;

    const novoChat = await HistoricoChat.create({
      pergunta,
      resposta,
      usuarioId,
    });

    return res.status(201).json(novoChat);
  } catch (error) {
    console.error("Erro ao salvar chat:", error);
    return res
      .status(500)
      .json({ erro: "Erro interno ao salvar conversa no chat." });
  }
};

// 2. Listar histórico do chat de um usuário (GET)
export const listarChat = async (req, res) => {
  try {
    const { usuarioId } = req.query;
    const filtro = usuarioId ? { usuarioId } : {};

    const conversas = await HistoricoChat.findAll({
      where: filtro,
      order: [["createdAt", "ASC"]],
    });

    return res.status(200).json(conversas);
  } catch (error) {
    return res.status(500).json({ erro: "Erro ao buscar histórico do chat." });
  }
};
