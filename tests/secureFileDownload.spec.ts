import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Secure File Download Tests', () => {
  test('should navigate to secure file download page', async ({page, secureFileDownloadPage }) => {
    await secureFileDownloadPage.navigateToSecureFileDownload();
    expect(page.url()).toContain('/download_secure');
  });

  test('should display secure download links', async ({ secureFileDownloadPage }) => {
    await secureFileDownloadPage.navigateToSecureFileDownload();
    const count = await secureFileDownloadPage.getDownloadLinkCount();
    expect(count).toBeGreaterThan(0);
  });
});
