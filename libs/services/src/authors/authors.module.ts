import { Module } from '@nestjs/common';
import { AuthorsModule as AuthorsModelsModule } from '@modules-exercise-1/models'
import { AuthorsService } from './authors.service';

@Module({
  imports: [AuthorsModelsModule],
  providers: [AuthorsService],
  exports: [AuthorsService],
})
export class AuthorsModule {
}
