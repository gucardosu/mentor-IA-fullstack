import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

export const Trilha = sequelize.define('Trilha', {
  nome: { type: DataTypes.STRING, allowNull: false },
  area: { type: DataTypes.STRING, allowNull: false },
  nivelAtual: { type: DataTypes.STRING, allowNull: false },
  nivelObjetivo: { type: DataTypes.STRING, allowNull: false },
  status: {
    type: DataTypes.ENUM('NAO_INICIADA', 'EM_ANDAMENTO', 'CONCLUIDA', 'PAUSADA'),
    defaultValue: 'NAO_INICIADA'
  }
});
