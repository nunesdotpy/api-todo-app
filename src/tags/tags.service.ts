import { Inject, Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { Op } from 'sequelize';
import { UpdateTagDto } from './dto/update-tag.dto';
import { Tag } from './entities/tag.entity';
import { TarefaTag } from 'src/shared/entities/tarefa-tags.entity';
import { Tarefa } from 'src/tarefas/entities/tarefa.entity';

@Injectable()
export class TagsService {
  constructor(
      @Inject('TAGS_REPOSITORY')
      private tagsRepository: typeof Tag,
      @Inject('TAREFA_TAGS_REPOSITORY')
      private tarefaTagsRepository: typeof TarefaTag,
    ) {}

  async create(tag: CreateTagDto): Promise<Tag> {
    const response = await this.tagsRepository.create<Tag>({...tag});

    // retorna um json com a tag criada
    return response;
  }

  async findAll() {
    const response = await this.tagsRepository.findAll<Tag>();
    
    return response;
  }

  async findOne(id: number) {
    const response = await this.tagsRepository.findOne<Tag>({
      where: { id },
    });

    return response;
  }

  async findMany(id: number[]) {
    const response = await this.tagsRepository.findAll<Tag>({
      where: { id },
    });

    return response;
  }

  async filterByTarefaId(tarefaId: number) {
    const response = await this.tarefaTagsRepository.findAll<TarefaTag>({
      where: { tarefaId },
    });

    return response;
  }

  async filterByTagIds(tagIds: number[]) {
    if (!tagIds || tagIds.length === 0) {
      return [];
    }
    
    const response = await this.tarefaTagsRepository.findAll<TarefaTag>({
      where: { tagId: { [Op.in]: tagIds } },
    });

    return response;
  }

  async update(id: number, updateTagDto: UpdateTagDto) {
    const response = await this.tagsRepository.update(
      {
        nome: updateTagDto.nome,
        cor: updateTagDto.cor,
      },
      { where: { id } },
    );
  }

  async remove(id: number) {
    const response = await this.tagsRepository.destroy({ where: { id } });

    return response;
  }
}
