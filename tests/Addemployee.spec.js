import { test, expect } from '@playwright/test';
import logindata from "../Testdata/logintestdata.json";
import { faker } from '@faker-js/faker';

test('Verify add employee with mandatory details', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.getByRole('textbox', { name: 'Username' }).fill(logindata.username);
  await page.getByRole('textbox', { name: 'Password' }).fill(logindata.password);
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('Time at Work')).toBeVisible();

  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();

  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const employeeId = faker.number.int().toString();

  await page.getByPlaceholder('First Name').fill(firstName);
  await page.getByPlaceholder('Last Name').fill(lastName);
 await page.locator('input.oxd-input').nth(2).fill(employeeId);;

  await page.getByRole('button', { name: 'Save' }).click();

await expect(
  page.getByText('Successfully Saved')).toBeVisible();
 
  console.log(`Employee created: ${firstName} ${lastName}`);
} );
