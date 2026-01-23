import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Dynamic Controls Tests @hello1', () => {

    test.beforeEach(async ({ dynamicControlsPage }) => {
        await dynamicControlsPage.navigate();
        await dynamicControlsPage.waitForPageLoaded();
    });

    test('should remove and add checkbox', async ({ dynamicControlsPage }) => {
        await test.step('Remove checkbox', async () => {
            await dynamicControlsPage.removeCheckbox();
            expect(await dynamicControlsPage.isCheckboxVisible()).toBeFalsy();
        });

        await test.step('Add checkbox back', async () => {
            await dynamicControlsPage.addCheckbox();
            expect(await dynamicControlsPage.isCheckboxVisible()).toBeTruthy();
        });
    });

    test('should enable and disable input field', async ({ dynamicControlsPage }) => {
        await test.step('Enable input', async () => {
            await dynamicControlsPage.enableInput();
            expect(await dynamicControlsPage.isInputEnabled()).toBeTruthy();
        });

        await test.step('Disable input', async () => {
            await dynamicControlsPage.disableInput();
            expect(await dynamicControlsPage.isInputEnabled()).toBeFalsy();
        });
    });

});
