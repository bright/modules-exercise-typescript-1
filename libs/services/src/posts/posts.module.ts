import { Module } from '@nestjs/common';
import { PostsModule as PostsModelsModule } from '@modules-exercise-1/models'
import { PostsService } from './posts.service';

@Module({
  imports: [PostsModelsModule],
  providers: [PostsService],
  exports: [PostsService],
})
export class PostsModule {
}
