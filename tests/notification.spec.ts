import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Notification Message Tests', () => {
  test.beforeEach(async ({ notificationPage }) => {
    await notificationPage.navigateToNotification();
  });

  test('should display notification message', async ({ notificationPage }) => {
    await test.step('Trigger notification', async () => {
      await notificationPage.clickNotificationLink();
    });

    await test.step('Verify notification is visible', async () => {
      const isVisible = await notificationPage.isNotificationVisible();
      expect(isVisible).toBeTruthy();
    });
  });

  test('should get notification message text', async ({ notificationPage }) => {
    await test.step('Trigger and get message', async () => {
      await notificationPage.clickNotificationLink();
      const message = await notificationPage.getNotificationMessage();
      expect(message.length).toBeGreaterThan(0);
    });
  });

  test('should close notification', async ({ notificationPage }) => {
    await test.step('Trigger notification', async () => {
      await notificationPage.clickNotificationLink();
    });

    await test.step('Close and verify', async () => {
      await notificationPage.closeNotification();
      const isVisible = await notificationPage.isNotificationVisible();
      expect(isVisible).toBeFalsy();
    });
  });
});
