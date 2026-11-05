import { test, expect } from '@playwright/test';

test('username', async ({ page }) => {
    await page.setContent('<input id="username" value="jagadeesh">');

    const value = await page.locator('#username').inputValue();
    console.log(value);

    await expect(page.locator('#username')).toHaveValue('jagadeesh');
});