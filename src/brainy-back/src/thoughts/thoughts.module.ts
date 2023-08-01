import { Module } from '@nestjs/common';
import { ThoughtsController } from './thoughts.controller';

@Module({
  controllers: [ThoughtsController],
})
export class ThoughtsModule {}
