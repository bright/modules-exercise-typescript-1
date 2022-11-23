import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatasourceModule } from "../datasource.module";
import { Comment } from "./comment.entity";

@Module({
  imports: [
    DatasourceModule,
    TypeOrmModule.forFeature([Comment])
  ],
  exports: [TypeOrmModule],
})
export class CommentsModule {
}
