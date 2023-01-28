import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { GetRecipientNotifications } from './get-recipient-notifications';

describe('Get recipients notifications', () => {
  it('should get recipient notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const getRecipientNotifications = new GetRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'example-id-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'example-id-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'example-id-2' }),
    );

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'example-id-1',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'example-id-1' }),
        expect.objectContaining({ recipientId: 'example-id-1' }),
      ]),
    );
  });
});
