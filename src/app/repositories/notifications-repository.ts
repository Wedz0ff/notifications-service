import { Notification } from '../entities/notification';

export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
  abstract findById(notificationId: string): Promise<Notification | null>;
  abstract update(notification: Notification): Promise<void>;
  abstract countAmountByRecipientId(recipientId: string): Promise<number>;
  abstract findAmountByRecipientId(
    recipientId: string,
  ): Promise<Notification[]>;
}
