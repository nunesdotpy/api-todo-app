
import { Tarefa } from './entities/tarefa.entity';

export const tarefasProviders = [
  {
    provide: 'TAREFAS_REPOSITORY',
    useValue: Tarefa,
  },
];
