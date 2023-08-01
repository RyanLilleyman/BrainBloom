import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ThoughtsModule } from './thoughts/thoughts.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ThoughtsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
