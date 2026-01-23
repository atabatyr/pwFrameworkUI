import { test, expect } from '../src/fixtures/pageFixtures';
import * as fs from 'fs';

test.describe('File Downloader Tests @hello-file @hello1', () => {
  test.beforeEach(async ({ fileDownloadPage }) => {
    await fileDownloadPage.navigate();
    await fileDownloadPage.waitForPageLoaded();
  });

  test('should download a file successfully', async ({ fileDownloadPage }) => {
    const fileName = 'hello.txt';

    const download = await fileDownloadPage.downloadFileByName(fileName);

    // ✅ Assert suggested file name
    expect(download.suggestedFilename()).toBe(fileName);

    // ✅ Save file locally (Playwright temp path)
    const filePath = await download.path();
    expect(filePath).not.toBeNull();

    // ✅ Optional: validate file exists
    if (filePath) {
      expect(fs.existsSync(filePath)).toBeTruthy();
    }
  });
});
