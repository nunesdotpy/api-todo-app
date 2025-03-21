import { Sequelize } from 'sequelize-typescript';
import { Tarefa } from './tarefas/entities/tarefa.entity';
import * as dotenv from 'dotenv';
import { Tag } from './tags/entities/tag.entity';
import { TarefaTag } from './shared/entities/tarefa-tags.entity';

dotenv.config();

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: process.env.DB_DIALECT as any,
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
      });
      sequelize.addModels([Tarefa, Tag, TarefaTag]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
