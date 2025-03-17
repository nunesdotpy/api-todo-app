import { Module } from '@nestjs/common';
import { TagsService } from './tags.service';
import { TagsController } from './tags.controller';
import { tagsProvider } from './tags.providers';


@Module({
  controllers: [TagsController],
  providers: [TagsService, ...tagsProvider],
})
export class TagsModule {}
