const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const PlanoEstudo = sequelize.define("PlanoEstudo", {
  titulo: { type: DataTypes.STRING, allowNull: false },
  descricao: { type: DataTypes.TEXT },
  tempoEstimado: { type: DataTypes.INTEGER, allowNull: false }, // Em horas
  ordem: { type: DataTypes.INTEGER, allowNull: false },
  status: {
    type: DataTypes.ENUM("PENDENTE", "EM_ANDAMENTO", "CONCLUIDO"),
    defaultValue: "PENDENTE",
  },
});

module.exports = PlanoEstudo;
