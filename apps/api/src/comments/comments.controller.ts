import { Body, Controller, Post } from '@nestjs/common';

import { CommentsService, CommentDto } from '@modules-exercise-1/services';

@Controller('/comments')
export class CommentsController {
  constructor(private readonly appService: CommentsService) {
  }

  @Post()
  async createComment(@Body() commentData: CommentDto) {
    return await this.appService.create(commentData);
  }
}
