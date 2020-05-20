var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(10 * 1000);

var firstNumber = element(by.model('first'));
var secondNumber = element(by.model('second'));
var doOperation = element(by.css('#gobutton'));
var actualResult = element(by.binding('latest'));


Given('I open calculator application', function () {
    // Write code here that turns the phrase above into concrete actions
    browser.sleep(7000);
    return browser.get('https://juliemr.github.io/protractor-demo/');

});

When('I add two numbers {int} and {int}', function (int, int2) {
    firstNumber.sendKeys(int);
    secondNumber.sendKeys(int2);
    return doOperation.click();
});


Then('result should be correct', async function () {
    browser.sleep(4000);
    return await expect(actualResult.getText()).to.eventually.equal('5');;

});

Then('result should be correct {int}', async function (int) {
    return await expect(actualResult.getText()).to.eventually.equal(int.toString());

});