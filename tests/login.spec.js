import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page.getByRole('img', { name: 'company-branding' })).toBeVisible();
});
