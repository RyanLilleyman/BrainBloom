import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ThoughtsModule } from './thoughts/thoughts.module';

@Module({
  imports: [AuthModule, ThoughtsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
