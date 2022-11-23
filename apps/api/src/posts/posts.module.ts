import { Module } from '@nestjs/common';

import { PostsModule as PostServiceModule } from "@modules-exercise-1/services";
import { PostsController } from './posts.controller';

@Module({
  imports: [PostServiceModule],
  controllers: [PostsController],
})
export class PostsModule {
}
