
import { Tag } from './entities/tag.entity';

export const tagsProvider = [
  {
    provide: 'TAGS_REPOSITORY',
    useValue: Tag,
  },
];
