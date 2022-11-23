import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatasourceModule } from "../datasource.module";
import { Author } from "./author.entity";

@Module({
  imports: [
    DatasourceModule,
    TypeOrmModule.forFeature([Author])
  ],
  exports: [TypeOrmModule],
})
export class AuthorsModule {
}
