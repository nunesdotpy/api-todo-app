
import { TarefaTag } from '../entities/tarefa-tags.entity';

export const tarefaTagsProvider = [
  {
    provide: 'TAREFA_TAGS_REPOSITORY',
    useValue: TarefaTag,
  },
];
