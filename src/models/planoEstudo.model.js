import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

export const PlanoEstudo = sequelize.define("PlanoEstudo", {
  titulo: { type: DataTypes.STRING, allowNull: false },
  descricao: { type: DataTypes.TEXT },
  tempoEstimado: { type: DataTypes.INTEGER, allowNull: false }, // Em horas
  ordem: { type: DataTypes.INTEGER, allowNull: false },
  status: {
    type: DataTypes.ENUM("PENDENTE", "EM_ANDAMENTO", "CONCLUIDO"),
    defaultValue: "PENDENTE",
  },
});
