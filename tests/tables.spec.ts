import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Tables Tests', () => {
  test.beforeEach(async ({ tablePage }) => {
    await tablePage.navigateToTables();
  });

  test('should display table with headers', async ({ tablePage }) => {
    await test.step('Verify table headers are present', async () => {
      const headerCount = await tablePage.getHeaderCount();
      expect(headerCount).toBeGreaterThan(0);
    });
  });

  test('should get correct header count', async ({ tablePage }) => {
    await test.step('Verify header count is 12', async () => {
      const headerCount = await tablePage.getHeaderCount();
      expect(headerCount).toBe(12);
    });
  });

  test('should display table rows', async ({ tablePage }) => {
    await test.step('Verify table rows are present', async () => {
      const rowCount = await tablePage.getRowCount();
      expect(rowCount).toBeGreaterThan(0);
    });
  });

  test('should get all header texts', async ({ tablePage }) => {
    await test.step('Verify header texts', async () => {
      const headers = await tablePage.getHeaderTexts();
      expect(headers.length).toBeGreaterThan(0);
      expect(headers[0]).toBeTruthy();
    });
  });

  test('should get row data by index', async ({ tablePage }) => {
    await test.step('Get first row data', async () => {
      const rowData = await tablePage.getRowData(0);
      expect(rowData.length).toBeGreaterThan(0);
    });
  });

  test('should get all table data', async ({ tablePage }) => {
    await test.step('Get and verify all table data', async () => {
      const allData = await tablePage.getAllTableData();
      expect(allData.length).toBeGreaterThan(0);
      expect(allData[0].length).toBeGreaterThan(0);
    });
  });
});
