import {test, expect} from '@playwright/test';
test('if statement' ,async ({page, browsername}) => {
    if (browsername === 'chromium') {
        await page.goto('https://www.myntra.com/');
}
else if (browsername === 'firefox') {
    await page.goto('https://www.flipkart.com/');
}
else if (browsername === 'webkit') {
    await page.goto('https://www.amazon.com/');
}
})


// test('verify the if condition', async ({page}) => {

// condition
// If () {
// }
// Else if (True) {
// }
// Else {
// }
// Switch (“rajesh”) {
// Case “rajesh”: {
// }
// Break;
// Case “john”:{
// }
// Break:
// Case “dibbana”: {
// }
// Defult:
// Break:
// });

// Example: 
let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}

// Switch(jagadeesh){
// Case1: {
// Console.log(“name of the jagadeesh”)
// }
// Break;
// Case2 {
// Console.log(“name of the rajesh”)
// }
// Break;
// }