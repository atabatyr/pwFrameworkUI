import { test, expect, Page } from '../src/fixtures/pageFixtures';
import * as path from 'path';
import * as fs from 'fs';

test.describe('File Upload Tests', () => {
  test.beforeEach(async ({ fileUploadPage }) => {
    await fileUploadPage.navigateToFileUpload();
  });

  test('should upload a file successfully', async ({ page, fileUploadPage }) => {
    await test.step('Create test file', async () => {
      const testDir = path.join(__dirname, '..', 'temp');
      if (!fs.existsSync(testDir)) {
        fs.mkdirSync(testDir, { recursive: true });
      }
      const testFile = path.join(testDir, 'test.txt');
      fs.writeFileSync(testFile, 'Test file content');
    });

    await test.step('Upload test file', async () => {
      const testFile = path.join(__dirname, '..', 'temp', 'test.txt');
      await fileUploadPage.uploadFile(testFile);
    });

    await test.step('Verify file upload success', async () => {
      const success = await fileUploadPage.verifyFileUploadSuccess();
      expect(success).toBeTruthy();
    });

    await test.step('Verify uploaded file name', async () => {
      const fileName = await fileUploadPage.getUploadedFileName();
      expect(fileName).toContain('test.txt');
    });
  });
});
