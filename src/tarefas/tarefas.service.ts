import { Injectable, Inject } from '@nestjs/common';
import { Tarefa } from './entities/tarefa.entity';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';

@Injectable()
export class TarefasService {
  constructor(
    @Inject('TAREFAS_REPOSITORY')
    private tarefasRepository: typeof Tarefa,
  ) {}

  async create(tarefa: CreateTarefaDto): Promise<Tarefa> {
    const response = await this.tarefasRepository.create<Tarefa>({
      titulo: tarefa.titulo,
      status: tarefa.status,
      prioridade: tarefa.prioridade,
      descricao: tarefa.descricao,
    });

    // retorna um json com a tarefa criada
    return response;
  }

  async findAll() {
    return await this.tarefasRepository.findAll<Tarefa>();
  }

  async findOne(id: number) {
    return await this.tarefasRepository.findOne<Tarefa>({
      where: { id },
    });
  }

  async update(id: number, updateTarefaDto: UpdateTarefaDto) {
    return await this.tarefasRepository.update(
      {
        titulo: updateTarefaDto.titulo,
        status: updateTarefaDto.status,
        prioridade: updateTarefaDto.prioridade,
        descricao: updateTarefaDto.descricao,
      },
      { where: { id } },
    );
  }

  async remove(id: number) {
    return await this.tarefasRepository.destroy({ where: { id } });
  }
}
