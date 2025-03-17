import { Module } from '@nestjs/common';
import { TarefasService } from './tarefas.service';
import { TarefasController } from './tarefas.controller';
import { DatabaseModule } from 'src/database.module';
import { tarefasProviders } from './tarefas.providers';
import { TagsModule } from 'src/tags/tags.module';
import { TagsService } from 'src/tags/tags.service';
import { tagsProvider } from 'src/tags/tags.providers';

@Module({
  imports: [DatabaseModule, TagsModule],
  controllers: [TarefasController],
  providers: [TarefasService, ...tarefasProviders, TagsService, ...tagsProvider],
})
export class TarefasModule {}
