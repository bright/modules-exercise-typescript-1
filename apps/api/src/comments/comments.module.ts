import { Module } from '@nestjs/common';

import { CommentsModule as CommentsServiceModule } from "@modules-exercise-1/services";
import { CommentsController } from './comments.controller';

@Module({
  imports: [CommentsServiceModule],
  controllers: [CommentsController],
})
export class CommentsModule {
}
