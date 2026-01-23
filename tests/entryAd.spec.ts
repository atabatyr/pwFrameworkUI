import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Entry Ad Modal Tests @hello1', () => {

  test('should display modal on first load and close it', async ({ entryAdPage }) => {
    await entryAdPage.navigate();
    await entryAdPage.waitForPageLoaded();

    await test.step('Wait for modal to appear', async () => {
      await entryAdPage.waitForModalVisible();
    });

    await test.step('Verify modal content', async () => {
      await entryAdPage.assertModalText();
    });

    await test.step('Close modal', async () => {
      await entryAdPage.closeModal();
      await entryAdPage.waitForModalHidden();
    });
  });

  test('should not show modal again after closing', async ({ entryAdPage }) => {
    await entryAdPage.navigate();
    await entryAdPage.waitForPageLoaded();

    await entryAdPage.waitForModalVisible();
    await entryAdPage.closeModal();
    await entryAdPage.waitForModalHidden();

    await test.step('Reload page and verify modal stays hidden', async () => {
      await entryAdPage.page.reload();
      await expect(entryAdPage.modal).toBeHidden();
    });
  });

  test('should show modal again after reset', async ({ entryAdPage }) => {
    await entryAdPage.navigate();
    await entryAdPage.waitForPageLoaded();

    await entryAdPage.waitForModalVisible();
    await entryAdPage.closeModal();
    await entryAdPage.waitForModalHidden();

    await test.step('Reset ad and reload', async () => {
      await entryAdPage.resetAd();
    });

    await test.step('Verify modal appears again', async () => {
      await entryAdPage.waitForModalVisible();
      await entryAdPage.assertModalText();
    });
  });

});
