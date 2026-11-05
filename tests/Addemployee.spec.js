import { test, expect } from '@playwright/test';
import logindata from "../Testdata/logintestdata.json";
import { faker } from '@faker-js/faker';
for (let i = 0; i < 10; i++) {
test(`Verify add employee with mandatory details - ${i}`, async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.getByRole('textbox', { name: 'Username' }).fill(logindata.username);
  await page.getByRole('textbox', { name: 'Password' }).fill(logindata.password);
  await page.getByRole('button', { name: 'Login' }).click();

  await page.waitForLoadState('networkidle');
  await expect(page.getByText('Time at Work')).toBeVisible({ timeout: 15000 });

  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();

  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  await page.getByPlaceholder('First Name').fill(firstName);
  await page.getByPlaceholder('Last Name').fill(lastName);

  await page.getByRole('button', { name: 'Save' }).click();

  await page.waitForSelector('text=Successfully Saved', { timeout: 15000 });
  const successMessage = page.getByText('Successfully Saved', { exact: true });
  await expect(successMessage).toBeVisible({ timeout: 15000 });
 

  console.log(`created employee: ${firstName} ${lastName}`);
});
}
