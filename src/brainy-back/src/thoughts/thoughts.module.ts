import { Module } from '@nestjs/common';
import { ThoughtsService } from './thoughts.service';
import { ThoughtsController } from './thoughts.controller';

@Module({
  controllers: [ThoughtsController],
  providers: [ThoughtsService]
})
export class ThoughtsModule {}
