import { Module } from "@nestjs/common";
import { AuthorsModule } from "./authors/authors.module";
import { CommentsModule } from "./comments/comments.module";
import { PostsModule } from "./posts/posts.module";

@Module({
  imports: [PostsModule, AuthorsModule, CommentsModule]
})
export class ApiModule {
}
