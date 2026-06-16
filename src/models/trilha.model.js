const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Trilha = sequelize.define('Trilha', {
  nome: { type: DataTypes.STRING, allowNull: false },
  area: { type: DataTypes.STRING, allowNull: false },
  nivelAtual: { type: DataTypes.STRING, allowNull: false },
  nivelObjetivo: { type: DataTypes.STRING, allowNull: false },
  status: {
    type: DataTypes.ENUM('NAO_INICIADA', 'EM_ANDAMENTO', 'CONCLUIDA', 'PAUSADA'),
    defaultValue: 'NAO_INICIADA'
  }
});

module.exports = Trilha;