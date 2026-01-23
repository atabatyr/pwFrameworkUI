import { test } from '../src/fixtures/pageFixtures';
import path from 'path';

test.describe('File Upload (/upload_file) Tests @hello1', () => {
  const filePath = path.join(__dirname, '../temp/test.txt');
  const fileName = 'test.txt';

  test('should upload file and show uploaded file name', async ({
    fileUploadPage,
    fileUploadResultPage,
  }) => {
    await fileUploadPage.navigate();
    await fileUploadPage.waitForPageLoaded();

    await fileUploadPage.uploadFile(filePath);

    await fileUploadResultPage.waitForPageLoaded();
    await fileUploadResultPage.assertUploadedFileName(fileName);
  });
  test('upload file via drag and drop', async ({ fileUploadPage }) => {
    await fileUploadPage.navigate();
    await fileUploadPage.waitForPageLoaded();
    await fileUploadPage.uploadFileViaDragDrop(filePath);
    await fileUploadPage.verifyUploadViaDragAndDropSuccess(fileName);
  });
});
