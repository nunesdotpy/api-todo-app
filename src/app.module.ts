import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TarefasModule } from './tarefas/tarefas.module';
import { DatabaseModule } from './database.module';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [TarefasModule, DatabaseModule, TagsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
