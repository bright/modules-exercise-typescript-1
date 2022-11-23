import { Module } from '@nestjs/common';

import { AuthorsModule as AuthorsServiceModule } from "@modules-exercise-1/services";
import { AuthorsController } from './authors.controller';

@Module({
  imports: [AuthorsServiceModule],
  controllers: [AuthorsController],
})
export class AuthorsModule {
}
