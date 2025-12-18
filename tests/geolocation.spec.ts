import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Geolocation Tests', () => {
  test('should navigate to geolocation page', async ({page, geolocationPage }) => {
    await geolocationPage.navigateToGeolocation();
    expect(page.url()).toContain('/geolocation');
  });

  test('should load geolocation page', async ({page, geolocationPage }) => {
    await geolocationPage.navigateToGeolocation();
    expect(page.url()).toContain('/geolocation');
  });
});
