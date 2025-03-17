import { Module } from '@nestjs/common';
import { TarefasService } from './tarefas.service';
import { TarefasController } from './tarefas.controller';
import { DatabaseModule } from 'src/database.module';
import { tarefasProviders } from './tarefas.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [TarefasController],
  providers: [TarefasService, ...tarefasProviders],
})
export class TarefasModule {}
