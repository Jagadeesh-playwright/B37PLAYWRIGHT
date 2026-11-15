import {expect}  from allure-playwright;
export class loginpage {
    constructor(page) {
        this.page=page;
        this.usernameinput=page.locator('//input[@name="username"]');
        this.passwordinput=page.locator('//input[@name="password"]');
        this.loginbtn=page.locator('//button[@type="submit"]');
        this.loginerrormassage=page.locator('//p[text()="Invalid credentials"]')
    }

    async lunchURL() {
        await this.page.goto('/web/index.php/auth/login');
        async laginwithcredentials(username,password){
            await this.usernameinput.fill(username);
            await this.passwordinput.fill(password);
            await this.loginbtn.click();
        }
        async verifyloginerror(){
            await expect(this.loginerrormassage).ToBeVissible();
        }

        async verifyloginsuccess(){
            await expect(this.page).ToHaveURL('/web/index.php/dashboard/index');

        }
    }
}