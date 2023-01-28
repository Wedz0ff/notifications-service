import { Content } from '@app/entities/content';
import { Notification, NotificationProps } from '@app/entities/notification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'any',
    content: new Content('Notificação teste'),
    recipientId: 'example-id',
    ...override,
  });
}
