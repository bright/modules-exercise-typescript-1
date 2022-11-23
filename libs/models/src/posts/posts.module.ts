import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatasourceModule } from "../datasource.module";
import { Post } from "./post.entity";

@Module({
  imports: [
    DatasourceModule,
    TypeOrmModule.forFeature([Post])
  ],
  exports: [TypeOrmModule],
})
export class PostsModule {
}
