require('chromedriver');
var webdriver = require('selenium-webdriver');
var assert = require("chai").assert;
var until = webdriver.until;
var By = webdriver.By;
var Key = webdriver.Key;
var WebElement = webdriver.WebElement;
var fs = require('fs');
//const driverManager = require('../common/driver');
//var screenshot = required('../common/screenshot');
//var filter = require("../common/filters");
//var header = require("../common/headerSearch");
//var results = require("../common/searchResults");

describe("challenge6 suite", function(){
    this.timeout(100000);
    var driver;
    before(async function () {
        // initializing chrome driver
            driver = new webdriver.Builder()
                .withCapabilities(webdriver.Capabilities.chrome())
                .build();
            driver.manage().window().maximize();

            //return driver = await d.getdriver1();
    }

);



    after(function () {
        //return driver.quit();
    });

    it("I open the copart website", function() {
        return driver.get("http://www.copart.com");
    });
    it("It searches for Nissan", async function() {

        var element = await driver.findElement(By.id('input-search'));
        element.sendKeys("Nissan");
        var element2 = await driver.findElement(By.xpath("//*[@id=\"search-form\"]/div/div[2]/button"));
        return await element2.click();

        //lotsearchLotmake
    });
    it("Checks if it user is in search exotic page", async function() {
        var element3 = await driver.getTitle();

        return driver.wait(until.titleIs('Nissan For Auction at Copart - Salvage Cars For Sale'), 4000);

    });
    it("Finds porsche in the list", async function(){

        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//table[@id="serverSideDataTable"]//tbody'))));
        var html = await driver.findElement(By.id('serverSideDataTable')).getAttribute('innerHTML');

        return assert.include(html, 'NISSAN');
    });
    it("Picks model button and enters Skyline in the search bar", async function(){
        //*[@id="serverSideDataTable_length"]/label/select
        //
         var element = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="filters-collapse-1"]/div[1]/ul/li[4]/h4/a[1]/i'))));
         await element.click();
        var element2 = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="collapseinside4"]/form/div/input'))));
        return await element2.sendKeys('Skyline');



    });

    it("should search the Model filter and enter Skyline", async function(){
        var finalResult; 
        try{
            await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="collapseinside4"]/ul/li'))));
            var html = await driver.findElement(By.id('collapseinside4')).getAttribute('innerHTML');
            console.log(html);
            finalResult = assert.include(html, 'SKYLINE');
            

        }catch(e){
            driver.takeScreenshot().then(function(data){
                fs.writeFileSync('img.png',data, 'base64');
            });
            console.log(e);
            console.log("Did not find SKYLINE");
        }finally{
            return finalResult;
        }


    });



});




