import { Module } from '@nestjs/common';
import { CommentsModule as CommentsModelsModule } from '@modules-exercise-1/models'
import { CommentsService } from './comments.service';

@Module({
  imports: [CommentsModelsModule],
  providers: [CommentsService],
  exports: [CommentsService],
})
export class CommentsModule {
}
