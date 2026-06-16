import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

export const HistoricoChat = sequelize.define('HistoricoChat', {
  pergunta: { type: DataTypes.TEXT, allowNull: false },
  resposta: { type: DataTypes.TEXT, allowNull: false },
  dataHora: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});
