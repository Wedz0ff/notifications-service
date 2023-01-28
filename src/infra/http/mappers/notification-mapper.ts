import { Notification } from '@app/entities/notification';

export class NotificationMapper {
  static toHTTP(notification: Notification) {
    return {
      id: notification.id,
      content: notification.content.value,
      category: notification.content,
      recipientId: notification.recipientId,
    };
  }
}
