import { Injectable, Inject } from '@nestjs/common';
import { Tarefa } from './entities/tarefa.entity';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';
import { TagsService } from 'src/tags/tags.service';

@Injectable()
export class TarefasService {
  constructor(
    @Inject('TAREFAS_REPOSITORY')
    private tarefasRepository: typeof Tarefa,
    //injeta o tagService
    private tagsService: TagsService,
  ) {}

  async create(tarefa: CreateTarefaDto): Promise<Tarefa> {
    const response = await this.tarefasRepository.create<Tarefa>({...tarefa});

    if (tarefa.tags && tarefa.tags.length) {
      const tags = await this.tagsService.findMany(tarefa.tags);
      await response.$set('tags', tags);
    }

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

  async update(id: number, tarefa: UpdateTarefaDto) {
    return await this.tarefasRepository.update(
      {
        titulo: tarefa.titulo,
        status: tarefa.status,
        prioridade: tarefa.prioridade,
        descricao: tarefa.descricao,
      },
      { where: { id } },
    );
  }

  async remove(id: number) {
    return await this.tarefasRepository.destroy({ where: { id } });
  }
}
