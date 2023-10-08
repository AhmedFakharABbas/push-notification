import { Module } from '@nestjs/common';
import { NotificationService } from './push-notification/notification.service';
import { NotificationController } from './push-notification/notification.controller';

@Module({
  providers: [NotificationService],
  controllers: [NotificationController]
})
export class PushNotificationModule {}
