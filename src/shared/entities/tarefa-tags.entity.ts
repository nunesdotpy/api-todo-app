import { Table, Column, Model, ForeignKey, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
import { Tarefa } from '../../tarefas/entities/tarefa.entity';
import { Tag } from '../../tags/entities/tag.entity';
import { DataTypes } from 'sequelize';

@Table
export class TarefaTag extends Model<TarefaTag> {
  @PrimaryKey
  @AutoIncrement
  @Column
  declare id: number
  
  @ForeignKey(() => Tarefa)
  @Column({
    type: DataTypes.INTEGER,
    allowNull: false,
  })
  tarefaId: number;

  @ForeignKey(() => Tag)
  @Column({
    type: DataTypes.INTEGER,
    allowNull: false,
  })
  tagId: number;
}
