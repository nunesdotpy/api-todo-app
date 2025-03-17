import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { Tarefa } from '../../tarefas/entities/tarefa.entity';
import { Tag } from '../../tags/entities/tag.entity';

@Table
export class TarefaTag extends Model<TarefaTag> {
  @ForeignKey(() => Tarefa)
  @Column
  tarefaId: number;

  @ForeignKey(() => Tag)
  @Column
  tagId: number;
}
