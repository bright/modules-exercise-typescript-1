import { Comment } from "@modules-exercise-1/models";
import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

export class CommentDto {
  content: string
  postId: number
  publishedByAuthorId: number
}

@Injectable()
export class CommentsService {
  constructor(@InjectRepository(Comment) private repository: Repository<Comment>) {
  }

  async create(commentData: CommentDto): Promise<{ id: number }> {
    return await this.repository.save({
      content: commentData.content,
      publishedByAuthor: { id: commentData.publishedByAuthorId },
      post: { id: commentData.postId },
      publishedAt: new Date()
    })
  }
}
