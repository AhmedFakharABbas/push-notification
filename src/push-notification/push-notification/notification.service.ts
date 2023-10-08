import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { PushNotification } from '../dto/push-notification.dto';
import * as firebase from 'firebase-admin';

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.PROJECT_ID,
    clientEmail: process.env.CLIENT_EMAIL,
    privateKey: process.env.PRIVATE_KEY?.replace(/\\n/g, '\n'),
  }),
  // other Firebase configuration options
});
@Injectable()
export class NotificationService {
  sendPush = async (notification: PushNotification): Promise<void> => {
    // console.log(JSON.parse(notification.data));
    try {
      const parsedData = JSON.parse(notification.data);
      await firebase
        .messaging()
        .send({
          notification: { title: notification.title, body: notification.body },
          token: notification.token,
          data: parsedData,
          android: { priority: 'high' },
          apns: {
            headers: {
              'apns-priority': '10',
            },
          },
        })
        .catch((error: any) => {
          console.log(error);

          console.error(error);
        });
    } catch (error) {
      console.log(error);
      return error;
    }
  };
}
