import {test, expect} from '@playwright/test';

import {loginpage}  from '../pages/logindata.po';
import {data} from '../Testdata/login.json';
import { faker } from '@faker-js/faker';

test('verifythelogin with valid credentoials', async ({page})=>{
    
    const login = new loginpage(page);
   await login.lunchURL()
    await login.loginwithvalidcredentials(data.username, data.password)
    await login.verifyloginsuccess();

})