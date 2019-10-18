require('chromedriver');
var webdriver = require('selenium-webdriver');
var assert = require("chai").assert;
var until = webdriver.until;
var By = webdriver.By;
var Key = webdriver.Key;
//var sleep = require('sleep');
var popular_array;

var MultiArray;
var driverSetup = function (url) {
    driver2 = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
    driver2.manage().window().maximize();
    if (url) {
        driver2.get(url);
        return driver2;
    }
}
var navValidation = async function (url, text) {
    var driver2 = await driverSetup(url);
    var found = false;
    await driver2.wait(until.elementLocated(By.tagName("body")), 5000);
    try {
        await driver2.wait(until.elementLocated(By.xpath(`//*[contains(text(), "${text}")]`)), 5000);
        found = true;
    } catch (err) {
        console.log(err);
    } finally {
        driver2.quit();
        return found;
    }
}
describe("challenge7 suite", function () {
    this.timeout(1000000);
    var driver;
    before(function () {
        // initializing chrome driver
        driver = new webdriver.Builder()
            .withCapabilities(webdriver.Capabilities.chrome())
            .build();
    });
    after(function () {
        //return driver.quit();
    });
    it("I open the copart website", async function () {
        return await driver.get("http://www.copart.com");
    });
    it("should verify these urls using the displayed text for each URL validation", async function () {
        var hrefArray = [];
        var popular_array = await driver.findElements(webdriver.By.xpath('//*[@id="tabTrending"]//a'));

        var MultiArray = new Array(popular_array.length);

        var validationString;
        for (var i = 0; i < popular_array.length; i++) {
            MultiArray[i] = new Array(2)
            MultiArray[i][0] = await popular_array[i].getText();
            MultiArray[i][1] = await popular_array[i].getAttribute("href");
            hrefArray[i] = MultiArray[i][1];
            console.log(MultiArray[i][0] + " - " + MultiArray[i][1]);
        }
        driver.quit;


        try {
            await MultiArray.reduce(async function (chain, task) {
                return await chain.then(async function () {
                    return new Promise(async function (resolve, reject) {
                        console.log(chain, task);
                        await assert.isTrue(await navValidation(task[0], task[1]), `Looking for "${task[0]}" at "${task[1]}"`);
                        resolve();

                    }).catch(error => { console.log("caught", err.message) })
                })
            }, Promise.resolve());
        } catch (err) {
                console.log(err);
        }
    });
    /*            async function navValidation(url, text){
        driver2 = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
        driver2.manage().window().maximize();
            await driver2.get(url);
            
            var found = false;
            await driver2.wait(until.elementLocated(By.tagName("body")), 5000);
            try{
                await driver2.wait(until.elementLocated(By.xpath(`//*[contains(text(), "${text}")]`)), 5000);
                expect(driver2.getCurrentUrl()).toBe(url);    
                console.log(text + " link is working ");
                found = true;
            } catch (err){
                console.log(text + " link is not working ");
        
            } finally {
                driver.quit();
                return found;
            }
        }   
       //not sure what navData and chain is 
       //task array logic is interesting might not be a multidimensional array
        
       //is there an array for navdata 
        await MultiArray.reduce(async function(chain, task){
            return await chain.then(async function(){
                return new Promise(async function(resolve, reject){
                    console.log(chain, task);
                    await assert.isTrue(await navValidation(task[0], task[1]));
                    resolve();//could resolve be inside navade validation
                })
            })
        }, Promise.resolve());
    });            
*/
});




