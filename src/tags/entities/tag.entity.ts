import { DataTypes } from 'sequelize';
import { BelongsToMany, Column, Model, Table } from 'sequelize-typescript';
import { TarefaTag } from 'src/shared/entities/tarefa-tags.entity';
import { Tarefa } from 'src/tarefas/entities/tarefa.entity';

@Table
export class Tag extends Model {
  @Column({
    type: DataTypes.STRING,
    allowNull: false,
  })
  nome: string;

  @Column({
    type: DataTypes.STRING,
    allowNull: false,
  })
  cor: string;

  @BelongsToMany(() => Tarefa, () => TarefaTag)
  tarefas: Tarefa[];
}
