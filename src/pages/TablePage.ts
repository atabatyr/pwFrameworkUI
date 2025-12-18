import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class TablePage extends BasePage {
  readonly table: Locator;
  readonly tableRows: Locator;
  readonly tableHeaders: Locator;

  constructor(page: Page) {
    super(page);
    this.table = page.locator('table');
    this.tableRows = page.locator('table tbody tr');
    this.tableHeaders = page.locator('table thead th');
  }

  /**
   * Navigate to tables page
   */
  async navigateToTables() {
    await this.goto('/tables');
  }

  /**
   * Get number of table headers
   */
  async getHeaderCount(): Promise<number> {
    const headers = await this.tableHeaders.all();
    return headers.length;
  }

  /**
   * Get number of rows
   */
  async getRowCount(): Promise<number> {
    const rows = await this.tableRows.all();
    return rows.length;
  }

  /**
   * Get all header texts
   */
  async getHeaderTexts(): Promise<string[]> {
    const headers = await this.tableHeaders.all();
    const texts = [];
    for (const header of headers) {
      const text = await header.textContent();
      if (text) texts.push(text.trim());
    }
    return texts;
  }

  /**
   * Get row data by index
   */
  async getRowData(index: number): Promise<string[]> {
    const rows = await this.tableRows.all();
    if (rows.length > index) {
      const cells = rows[index].locator('td');
      const cellTexts = [];
      const cellElements = await cells.all();
      for (const cell of cellElements) {
        const text = await cell.textContent();
        if (text) cellTexts.push(text.trim());
      }
      return cellTexts;
    }
    return [];
  }

  /**
   * Get all table data
   */
  async getAllTableData(): Promise<string[][]> {
    const rows = await this.tableRows.all();
    const allData = [];
    for (const row of rows) {
      const cells = row.locator('td');
      const cellTexts = [];
      const cellElements = await cells.all();
      for (const cell of cellElements) {
        const text = await cell.textContent();
        if (text) cellTexts.push(text.trim());
      }
      allData.push(cellTexts);
    }
    return allData;
  }
}
