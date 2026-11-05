const {test, expect} = require('@playwright/test');
test('iframe test', async ({page}) => {
    await page.goto('https://ui.vision/demo/webtest/frames');
    const allframes = await page.frames()
    console.log("number of frames", allframes.length)
// approach using name or url
// const frame1 = await page.frame({name})
const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
frame1.fill('#mytext', 'Hello World');
await page.waitforTimeout(5000);
});
