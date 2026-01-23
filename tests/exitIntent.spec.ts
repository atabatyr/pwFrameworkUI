import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Exit Intent Tests @hello1', () => {

  test.beforeEach(async ({ exitIntentPage }) => {
    await exitIntentPage.navigate();
    await exitIntentPage.waitForPageLoaded();
  });

  test('@regression should display exit intent modal', async ({ exitIntentPage }) => {
    await test.step('Trigger exit intent', async () => {
      await exitIntentPage.triggerExitIntent();
    });

    await test.step('Verify modal is visible', async () => {
      await exitIntentPage.waitForModalVisible();
      await expect(exitIntentPage.modal).toBeVisible();
    });
  });

  test('@regression should display correct modal content', async ({ exitIntentPage }) => {
    await exitIntentPage.triggerExitIntent();
    await exitIntentPage.waitForModalVisible();

    await test.step('Verify modal title and body text', async () => {
      await expect(exitIntentPage.modalTitle)
        .toHaveText('This is a modal window');

      await expect(exitIntentPage.modalBody)
        .toContainText('encourage a user to take an action');
    });
  });

  test('@regression should close modal when clicking Close', async ({ exitIntentPage }) => {
    await exitIntentPage.triggerExitIntent();
    await exitIntentPage.waitForModalVisible();

    await test.step('Close modal', async () => {
      await exitIntentPage.closeModal();
    });

    await test.step('Verify modal is hidden', async () => {
      await expect(exitIntentPage.modal).toBeHidden();
    });

    await test.step('Verify footer is visible again', async () => {
      await expect(exitIntentPage.footer).toBeVisible();
    });
  });
});
