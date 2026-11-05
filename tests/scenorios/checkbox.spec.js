import { test, expect } from '@playwright/test';

test('checkbox', async ({ page }) => {
    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details');

    const checkbox = page.locator('input[type="checkbox"]').first();

    await expect(checkbox).toBeVisible();

    const statusOfTheCheckbox = await checkbox.isChecked();
    console.log('Checkbox checked status:', statusOfTheCheckbox);

    if (!statusOfTheCheckbox) {
        await checkbox.click();
        console.log('Checkbox clicked');
    }

    await expect(checkbox).toBeChecked();
});