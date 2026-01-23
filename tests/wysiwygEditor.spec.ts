import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('WYSIWYG Editor Tests @wysiwyg @editor @hello1', () => {

  test('should navigate to WYSIWYG editor page', async ({ wysiwygEditorPage }) => {
    await wysiwygEditorPage.navigateToWYSIWYGEditor();
    await wysiwygEditorPage.expectToBeOnEditorPage();
  });

  test('should clear editor content', async ({ wysiwygEditorPage }) => {
    await wysiwygEditorPage.navigateToWYSIWYGEditor();

    // Clear editor content
    await wysiwygEditorPage.clearEditor();
    const content = await wysiwygEditorPage.getEditorContent();
    expect(content.trim()).toBe('');
  });

  test('should type and verify text in editor', async ({ wysiwygEditorPage }) => {
    await wysiwygEditorPage.navigateToWYSIWYGEditor();

    const testText = 'Hello, Playwright WYSIWYG!';

    // Clear and type into editor
    await wysiwygEditorPage.clearEditor();
    await wysiwygEditorPage.typeInEditor(testText);

    // Verify content
    const content = await wysiwygEditorPage.getEditorContent();
    expect(content).toContain(testText);
  });

});
