import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { musicModule } from './music/music.module';

@Module({
  imports: [musicModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
