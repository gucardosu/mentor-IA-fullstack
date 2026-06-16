import sequelize from '../config/database.js';

import { User } from './usuario.model.js';
import { Trilha } from './trilha.model.js';
import { PlanoEstudo } from './planoEstudo.model.js';
import { HistoricoAvaliacao } from './historicoAvaliacao.model.js';
import { HistoricoChat } from './historicoChat.model.js';

// 2. Definir os Relacionamentos (1:N)

// User 1:N Trilhas
User.hasMany(Trilha, { foreignKey: 'usuarioId', as: 'trilhas' });
Trilha.belongsTo(User, { foreignKey: 'usuarioId', as: 'usuario' });

// Trilha 1:N Planos de Estudo
Trilha.hasMany(PlanoEstudo, { foreignKey: 'trilhaId', as: 'planos' });
PlanoEstudo.belongsTo(Trilha, { foreignKey: 'trilhaId', as: 'trilha' });

// User 1:N Histórico de Avaliação
User.hasMany(HistoricoAvaliacao, { foreignKey: 'usuarioId', as: 'avaliacoes' });
HistoricoAvaliacao.belongsTo(User, { foreignKey: 'usuarioId' });

// Trilha 1:N Histórico de Avaliação
Trilha.hasMany(HistoricoAvaliacao, { foreignKey: 'trilhaId' });
HistoricoAvaliacao.belongsTo(Trilha, { foreignKey: 'trilhaId' });

// User 1:N Histórico de Chat
User.hasMany(HistoricoChat, { foreignKey: 'usuarioId', as: 'conversas' });
HistoricoChat.belongsTo(User, { foreignKey: 'usuarioId' });

export { sequelize, User, Trilha, PlanoEstudo, HistoricoAvaliacao, HistoricoChat };