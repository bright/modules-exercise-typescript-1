import { Post } from "@modules-exercise-1/models";
import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

export class PostDto {
  title: string
  content: string
  authorId: number
}

@Injectable()
export class PostsService {
  constructor(@InjectRepository(Post) private postRepository: Repository<Post>) {
  }

  async create(postData: PostDto): Promise<{ id: number }> {
    return await this.postRepository.save({
      title: postData.title,
      content: postData.content,
      author: { id: postData.authorId },
      publishedAt: new Date()
    })
  }
}
