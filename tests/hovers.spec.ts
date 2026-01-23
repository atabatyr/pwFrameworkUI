import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Hovers Page Tests @hovers @hello1', () => {

  test.beforeEach(async ({ hoversPage }) => {
    await hoversPage.navigate();
    await hoversPage.waitForPageLoaded();
  });

  for (const [index, username] of ['user1', 'user2', 'user3'].entries()) {
    test(`@regression hover on avatar ${index + 1} shows correct caption`, async ({ hoversPage }) => {
      await test.step(`Hover over avatar ${index + 1}`, async () => {
        await hoversPage.hoverOverAvatar(index);
      });

      await test.step(`Verify caption for ${username}`, async () => {
        const text = await hoversPage.getCaptionText(index);
        expect(text).toContain(`name: ${username}`);

        const href = await hoversPage.getProfileLink(index);
        expect(href).toBe(`/users/${index + 1}`);
      });
    });
  }
});
