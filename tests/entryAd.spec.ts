import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Entry Ad Tests', () => {
  test('should display entry ad modal', async ({ entryAdPage }) => {
    await entryAdPage.navigateToEntryAd();
    expect(await entryAdPage.isModalDisplayed()).toBeTruthy();
  });

  test('should close entry ad modal', async ({ entryAdPage }) => {
    await entryAdPage.navigateToEntryAd();
    await entryAdPage.closeModal();
    expect(await entryAdPage.isModalDisplayed()).toBeFalsy();
  });
});
