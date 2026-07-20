import { test, expect } from '@playwright/test';

test("Verify add job title", async ({ page }) => {


    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator("input[name='username']").fill('Admin')
   await page.locator("//input[@type='password']").fill('admin123')
   await page.locator("//span[text()='Admin']").click()
    await page.locator("//span[normalize-space(text())='Job']").click()

 
}) 