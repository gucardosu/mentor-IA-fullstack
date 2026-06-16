import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

export const HistoricoAvaliacao = sequelize.define("HistoricoAvaliacao", {
  pontuacao: { type: DataTypes.STRING, allowNull: false }, // Ex: "4/10"
  nivelAnterior: { type: DataTypes.STRING, allowNull: false },
  nivelAtual: { type: DataTypes.STRING, allowNull: false },
  dataAvaliacao: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});
