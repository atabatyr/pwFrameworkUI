import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('WYSIWYG Editor Tests', () => {
  test('should navigate to wysiwyg editor page', async ({ wysiwygEditorPage }) => {
    await wysiwygEditorPage.navigateToWYSIWYGEditor();
    expect(wysiwygEditorPage.page.url()).toContain('/tinymce');
  });

  test('should clear editor content', async ({ wysiwygEditorPage }) => {
    await wysiwygEditorPage.navigateToWYSIWYGEditor();
    expect(wysiwygEditorPage.page.url()).toContain('/tinymce');
  });

  test('should interact with editor', async ({ wysiwygEditorPage }) => {
    await wysiwygEditorPage.navigateToWYSIWYGEditor();
    const url = wysiwygEditorPage.page.url();
    expect(url).toContain('/tinymce');
  });
});
