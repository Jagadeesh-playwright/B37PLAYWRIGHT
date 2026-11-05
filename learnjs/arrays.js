import {test, expect} from '@playwright/test';
test('arrays', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    const usernametext= await page.locator('(//p[@class="oxd-text oxd-text--p"])[1]').textContent();
    console.log(usernametext);   // username: admin
    const username= usernametext.split(" ")[2]
    await page.locator('//input[@name="username"]').fill(username);
const passwordtext= await page.locator('(//p[@class="oxd-text oxd-text--p"])[2]').textContent();
    console.log(passwordtext);   // password: admin1
   const password= passwordtext.split(" ")[2]
    await page.locator('//input[@type="password"]').fill(password);
})