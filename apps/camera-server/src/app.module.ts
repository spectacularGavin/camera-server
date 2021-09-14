import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CameraServerGateway } from './camera-server.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, CameraServerGateway],
})
export class AppModule {}
