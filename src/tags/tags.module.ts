import { Module } from '@nestjs/common';
import { TagsService } from './tags.service';
import { TagsController } from './tags.controller';
import { tagsProvider } from './tags.providers';
import { tarefaTagsProvider } from 'src/shared/providers/tarefa-tag.providers';


@Module({
  controllers: [TagsController],
  providers: [TagsService, ...tagsProvider, ...tarefaTagsProvider],
})
export class TagsModule {}
