import { Body, Controller, Post } from '@nestjs/common';

import { PostDto, PostsService } from '@modules-exercise-1/services';

@Controller('/posts')
export class PostsController {
  constructor(private readonly appService: PostsService) {
  }

  @Post()
  async createPost(@Body() postData: PostDto) {
    return await this.appService.create(postData);
  }
}
