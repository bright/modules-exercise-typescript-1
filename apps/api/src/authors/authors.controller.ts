import { Body, Controller, Post } from '@nestjs/common';

import { AuthorsService, AuthorDto } from '@modules-exercise-1/services';

@Controller('/authors')
export class AuthorsController {
  constructor(private readonly appService: AuthorsService) {
  }

  @Post()
  async createAuthor(@Body() authorData: AuthorDto) {
    return await this.appService.create(authorData);
  }
}
