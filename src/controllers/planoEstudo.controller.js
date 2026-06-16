import { PlanoEstudo, Trilha } from "../models/index.js";

// 1. Criar um novo plano de estudo (POST)
export const criarPlano = async (req, res) => {
  try {
    const { titulo, descricao, tempoEstimado, ordem, trilhaId } = req.body;

    // Verifica se a trilha existe antes de criar o plano
    const trilha = await Trilha.findByPk(trilhaId);
    if (!trilha) {
      return res.status(404).json({ erro: "Trilha não encontrada." });
    }

    const novoPlano = await PlanoEstudo.create({
      titulo,
      descricao,
      tempoEstimado,
      ordem,
      trilhaId,
    });

    // Se a trilha estava "NAO_INICIADA", podemos mudar para "EM_ANDAMENTO"
    if (trilha.status === "NAO_INICIADA") {
      await trilha.update({ status: "EM_ANDAMENTO" });
    }

    return res.status(201).json(novoPlano);
  } catch (error) {
    console.error("Erro ao criar plano:", error);
    return res
      .status(500)
      .json({ erro: "Erro interno ao criar plano de estudo." });
  }
};

// 2. Listar planos de uma trilha específica ou todos (GET)
export const listarPlanos = async (req, res) => {
  try {
    const { trilhaId } = req.query;

    const filtro = trilhaId ? { trilhaId } : {};

    const planos = await PlanoEstudo.findAll({
      where: filtro,
      order: [["ordem", "ASC"]],
    });

    return res.status(200).json(planos);
  } catch (error) {
    return res.status(500).json({ erro: "Erro ao buscar planos de estudo." });
  }
};

// 3. Atualizar plano e calcular progresso da Trilha (PUT) - A MÁGICA ACONTECE AQUI
export const atualizarPlano = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, titulo, descricao, tempoEstimado, ordem } = req.body;

    const plano = await PlanoEstudo.findByPk(id);
    if (!plano) {
      return res.status(404).json({ erro: "Plano de estudo não encontrado." });
    }

    // Atualiza os dados do plano
    await plano.update({ status, titulo, descricao, tempoEstimado, ordem });

    if (status) {
      const todosPlanos = await PlanoEstudo.findAll({
        where: { trilhaId: plano.trilhaId },
      });

      const totalPlanos = todosPlanos.length;
      const planosConcluidos = todosPlanos.filter(
        (p) => p.status === "CONCLUIDO",
      ).length;

      const progresso = Math.round((planosConcluidos / totalPlanos) * 100);

      if (progresso === 100) {
        await Trilha.update(
          { status: "CONCLUIDA" },
          { where: { id: plano.trilhaId } },
        );
      } else if (progresso > 0) {
        await Trilha.update(
          { status: "EM_ANDAMENTO" },
          { where: { id: plano.trilhaId } },
        );
      }
    }

    return res
      .status(200)
      .json({ mensagem: "Plano atualizado com sucesso.", plano });
  } catch (error) {
    console.error("Erro ao atualizar plano:", error);
    return res.status(500).json({ erro: "Erro ao atualizar plano de estudo." });
  }
};

// 4. Deletar plano de estudo (DELETE)
export const deletarPlano = async (req, res) => {
  try {
    const { id } = req.params;
    const plano = await PlanoEstudo.findByPk(id);

    if (!plano) {
      return res.status(404).json({ erro: "Plano não encontrado." });
    }

    await plano.destroy();
    return res.status(200).json({ mensagem: "Plano deletado com sucesso." });
  } catch (error) {
    return res.status(500).json({ erro: "Erro ao deletar plano." });
  }
};
