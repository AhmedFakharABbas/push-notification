import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PushNotificationModule } from './push-notification/push-notification.module';

@Module({
  imports: [PushNotificationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
