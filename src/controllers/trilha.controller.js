import { Trilha, User } from "../models/index.js";

// 1. Criar uma nova trilha (POST)
export const criarTrilha = async (req, res) => {
  try {
    const { nome, area, nivelAtual, nivelObjetivo, usuarioId } = req.body;

    const novaTrilha = await Trilha.create({
      nome,
      area,
      nivelAtual,
      nivelObjetivo,
      usuarioId,
    });

    return res.status(201).json(novaTrilha);
  } catch (error) {
    console.error("Erro ao criar trilha:", error);
    return res.status(500).json({ erro: "Erro interno ao criar trilha." });
  }
};

// 2. Listar todas as trilhas (GET)
export const listarTrilhas = async (req, res) => {
  try {
    const trilhas = await Trilha.findAll({
      include: [{ model: User, as: "usuario", attributes: ["id", "nome"] }],
    });
    return res.status(200).json(trilhas);
  } catch (error) {
    console.error("Erro ao listar trilhas:", error);
    return res.status(500).json({ erro: "Erro interno ao buscar trilhas." });
  }
};

// 3. Buscar uma trilha específica (GET por ID)
export const buscarTrilhaPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const trilha = await Trilha.findByPk(id, {
      include: [{ model: User, as: "usuario", attributes: ["id", "nome"] }],
    });

    if (!trilha) {
      return res.status(404).json({ erro: "Trilha não encontrada." });
    }

    return res.status(200).json(trilha);
  } catch (error) {
    return res.status(500).json({ erro: "Erro interno ao buscar trilha." });
  }
};

// 4. Atualizar uma trilha (PUT)
export const atualizarTrilha = async (req, res) => {
  try {
    const { id } = req.params;
    const dadosAtualizados = req.body;

    const trilha = await Trilha.findByPk(id);
    if (!trilha) {
      return res.status(404).json({ erro: "Trilha não encontrada." });
    }

    await trilha.update(dadosAtualizados);
    return res.status(200).json(trilha);
  } catch (error) {
    return res.status(500).json({ erro: "Erro interno ao atualizar trilha." });
  }
};

// 5. Deletar uma trilha (DELETE)
export const deletarTrilha = async (req, res) => {
  try {
    const { id } = req.params;
    const trilha = await Trilha.findByPk(id);

    if (!trilha) {
      return res.status(404).json({ erro: "Trilha não encontrada." });
    }

    await trilha.destroy();
    return res.status(200).json({ mensagem: "Trilha deletada com sucesso." });
  } catch (error) {
    return res.status(500).json({ erro: "Erro interno ao deletar trilha." });
  }
};
