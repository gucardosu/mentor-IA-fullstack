import { HistoricoAvaliacao, Trilha, User } from "../models/index.js";

// 1. Salvar resultado de uma nova avaliação (POST)
export const salvarAvaliacao = async (req, res) => {
  try {
    const { pontuacao, nivelAnterior, nivelAtual, usuarioId, trilhaId } =
      req.body;

    const novaAvaliacao = await HistoricoAvaliacao.create({
      pontuacao,
      nivelAnterior,
      nivelAtual,
      usuarioId,
      trilhaId,
    });

    if (trilhaId && nivelAtual) {
      await Trilha.update({ nivelAtual }, { where: { id: trilhaId } });
    }

    return res.status(201).json(novaAvaliacao);
  } catch (error) {
    console.error("Erro ao salvar avaliação:", error);
    return res.status(500).json({ erro: "Erro interno ao salvar avaliação." });
  }
};

// 2. Listar histórico de avaliações de um usuário (GET)
export const listarAvaliacoes = async (req, res) => {
  try {
    const { usuarioId } = req.query;
    const filtro = usuarioId ? { usuarioId } : {};

    const avaliacoes = await HistoricoAvaliacao.findAll({
      where: filtro,
      order: [["createdAt", "DESC"]],
      include: [{ model: Trilha, attributes: ["nome"] }],
    });

    return res.status(200).json(avaliacoes);
  } catch (error) {
    return res
      .status(500)
      .json({ erro: "Erro ao buscar histórico de avaliações." });
  }
};
