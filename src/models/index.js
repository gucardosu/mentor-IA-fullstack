const sequelize = require('../config/database');

const Usuario = require('./usuario.model');
const Trilha = require('./trilha.model');
const PlanoEstudo = require('./planoEstudo.model');
const HistoricoAvaliacao = require('./historicoAvaliacao.model');
const HistoricoChat = require('./historicoChat.model');


// Usuário 1:N Trilhas
Usuario.hasMany(Trilha, { foreignKey: 'usuarioId', as: 'trilhas' });
Trilha.belongsTo(Usuario, { foreignKey: 'usuarioId', as: 'usuario' });

// Trilha 1:N Planos de Estudo
Trilha.hasMany(PlanoEstudo, { foreignKey: 'trilhaId', as: 'planos' });
PlanoEstudo.belongsTo(Trilha, { foreignKey: 'trilhaId', as: 'trilha' });

// Usuário 1:N Histórico de Avaliação
Usuario.hasMany(HistoricoAvaliacao, { foreignKey: 'usuarioId', as: 'avaliacoes' });
HistoricoAvaliacao.belongsTo(Usuario, { foreignKey: 'usuarioId' });

// Trilha 1:N Histórico de Avaliação (Para saber de qual trilha foi a prova)
Trilha.hasMany(HistoricoAvaliacao, { foreignKey: 'trilhaId' });
HistoricoAvaliacao.belongsTo(Trilha, { foreignKey: 'trilhaId' });

// Usuário 1:N Histórico de Chat
Usuario.hasMany(HistoricoChat, { foreignKey: 'usuarioId', as: 'conversas' });
HistoricoChat.belongsTo(Usuario, { foreignKey: 'usuarioId' });

module.exports = {
  sequelize,
  Usuario,
  Trilha,
  PlanoEstudo,
  HistoricoAvaliacao,
  HistoricoChat
};