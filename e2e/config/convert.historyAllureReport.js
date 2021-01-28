// const util = require('util');
// const fs = require('fs');
// const path = require('path');
// const copyFilePromise = util.promisify(fs.copyFile);

// var files = fs.readdirSync('allure-report/allure-report/history');

// function copyFiles(srcDir, destDir) {
//     return Promise.all(files.map(f => {
//        console.log(path.join(srcDir, f));
//        console.log(path.join(destDir, f));
//        return copyFilePromise(path.join(srcDir, f), path.join(destDir, f));
//     }));
// }

// // usage
// copyFiles('allure-report/allure-report/history', 'allure-report/allure-result').then(() => {
//    console.log("done");
// }).catch(err => {
//    console.log(err);
// });

var fs = require("fs-extra");

fs.copy('e2e/allure-report/allure-report/history', 'e2e/allure-report/allure-result/history', function (err) {
  if (err) return console.error(err)
  console.log('success!')
});