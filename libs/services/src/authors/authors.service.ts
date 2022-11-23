import { Author } from "@modules-exercise-1/models";
import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

export class AuthorDto {
  firstName: string
  lastName: string
}

@Injectable()
export class AuthorsService {
  constructor(@InjectRepository(Author) private repository: Repository<Author>) {
  }

  async create(authorData: AuthorDto): Promise<{ id: number }> {
    return await this.repository.save({
      ...authorData
    })
  }
}
