import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Author } from "../authors/author.entity";

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Author, { nullable: false })
  author: Author;

  @Column()
  title: string;

  @Column()
  publishedAt: Date;

  @Column()
  content: string;
}
