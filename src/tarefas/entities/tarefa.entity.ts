import { DataTypes } from 'sequelize';
import { BelongsToMany, Column, Model, Table } from 'sequelize-typescript';
import { TarefaTag } from 'src/shared/entities/tarefa-tags.entity';
import { Tag } from 'src/tags/entities/tag.entity';

@Table
export class Tarefa extends Model {
  @Column({
    type: DataTypes.STRING,
    allowNull: false,
  })
  titulo: string;

  @Column({
    type: DataTypes.INTEGER,
    allowNull: false,
  })
  status: number; // perguntar se é pra ser ums string "andamento" e "finalizado" ou boolean

  @Column({
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 10,
    },
  })
  prioridade: number;

  @Column({
    type: DataTypes.TEXT,
    allowNull: true,
  })
  descricao: string;

  @BelongsToMany(() => Tag, () => TarefaTag)
  tags: Tag[];
}
