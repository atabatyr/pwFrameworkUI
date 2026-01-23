import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Status Codes Tests @status @hello1', () => {
  test.beforeEach(async ({ statusCodesPage }) => {
    await statusCodesPage.navigateToStatusCodes();
  });

  const testCases = [
    { code: 200, expected: 'This page returned a 200 status code' },
    { code: 301, expected: 'This page returned a 301 status code' },
    { code: 404, expected: 'This page returned a 404 status code' },
    { code: 500, expected: 'This page returned a 500 status code' }
  ];

  for (const { code, expected } of testCases) {
    test(`@regression should show correct message for status ${code}`, async ({ statusCodesPage }) => {
      await test.step(`Click status code ${code}`, async () => {
        await statusCodesPage.clickStatusCode(code);
      });

      await test.step(`Verify message contains ${code}`, async () => {
        const message = await statusCodesPage.getStatusMessage();
        expect(message).toContain(expected);
      });
    });
  }
});
