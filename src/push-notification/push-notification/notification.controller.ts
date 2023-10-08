import { Body, Controller, Post } from '@nestjs/common';
import { PushNotification } from '../dto/push-notification.dto';
import { NotificationService } from './notification.service';

@Controller('notification')
export class NotificationController {
  constructor(private readonly pushNotificationService: NotificationService) {}
  @Post('questions')
  async createQuestion(@Body() notification: PushNotification) {
    await this.pushNotificationService.sendPush(notification);
    return {
      success: true,
      message: 'Message sent successfully',
    };
  }
}
