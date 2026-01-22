import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('File Download Tests', () => {
  test('should navigate to file download page', async ({page, fileDownloadPage }) => {
    await fileDownloadPage.navigateToFileDownload();
    expect(page.url()).toContain('/download');
  });

  test('should display download links', async ({ fileDownloadPage }) => {
    await fileDownloadPage.navigateToFileDownload();
    const count = await fileDownloadPage.getDownloadLinkCount();
    expect(count).toBeGreaterThan(0);
  });
});
