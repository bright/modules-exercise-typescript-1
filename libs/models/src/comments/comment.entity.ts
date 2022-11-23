import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Author } from "../authors/author.entity";
import { Post } from "../posts/post.entity";

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  publishedAt: Date;

  @ManyToOne(() => Author, { nullable: false })
  publishedByAuthor: Author;

  @ManyToOne(() => Post, { nullable: false })
  post: Post;
}
