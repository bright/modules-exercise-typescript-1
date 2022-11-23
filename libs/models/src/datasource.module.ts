import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Author } from "./authors/author.entity";
import { Post } from "./posts/post.entity";
import { Comment } from "./comments/comment.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      synchronize: true,
      database: './dist/database.db',
      entities: [ Post, Author, Comment ],
      logging: ['query']
    })
  ],
  exports: [TypeOrmModule],
})
export class DatasourceModule {
}
