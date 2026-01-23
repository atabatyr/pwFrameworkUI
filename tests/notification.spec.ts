import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Notification Message Tests @notification @hello1', () => {

  test.beforeEach(async ({ notificationPage }) => {
    await notificationPage.navigate();
  });

  test('@regression should display notification message on click', async ({ notificationPage }) => {
    await test.step('Click the message link and verify flash appears', async () => {
      await notificationPage.clickMessageLink();
      await notificationPage.waitForFlashVisible();

      const message = await notificationPage.getFlashMessage();

      // Handle misspelling + close button text
      expect(message).toMatch(/Action\s+(success|unsucces)/i);
    });
  });

  test('@regression should display different messages across multiple attempts', async ({ notificationPage }) => {
    const messages = new Set<string>();

    for (let i = 0; i < 5; i++) {
      await notificationPage.clickMessageLink();
      await notificationPage.waitForFlashVisible();
      messages.add(await notificationPage.getFlashMessage());
    }

    expect(messages.size).toBeGreaterThan(1);
  });

  test('@regression should close notification message text', async ({ notificationPage }) => {
    await notificationPage.clickMessageLink();
    await notificationPage.waitForFlashVisible();

    const messageBeforeClose = await notificationPage.getFlashMessage();
    expect(messageBeforeClose.length).toBeGreaterThan(0);

    await notificationPage.closeFlashMessage();

    const messageAfterClose = await notificationPage.getFlashMessage();

    // Flash container stays visible — only text changes
    expect(messageAfterClose.length).toBeLessThan(messageBeforeClose.length);
  });
});
