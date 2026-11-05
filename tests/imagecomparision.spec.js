import {test, expect } from '@playwright/test';
test('image comparison', async ({page}) => {
const { imgDiff } = require("img-diff-js");

imgDiff({
  actualFilename: "example/actual.png",
  expectedFilename: "example/expected.png",
  diffFilename: "example/diff.png",
}).then(result => console.log(result));
});

// {
//   actualFilename: string;
//   expectedFilename: string;
//   diffFilename?: string;
//   generateOnlyDiffFile?: boolean; // default false
//   options?: {
//     threshold?: number;   // default 0.1
//     includeAA?: boolean;  // default false
//   }
// }