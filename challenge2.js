require('chromedriver');
var webdriver = require('selenium-webdriver');
var assert = require("chai").assert;
var until = webdriver.until;
var By = webdriver.By;
var Key = webdriver.Key;
var WebElement = webdriver.WebElement;
var JavascriptExecutor = require('selenium-webdriver');
/*
const expect = require('chai').expect;
const mochaTable = require('.');

const describeTable = mochaTable.describeTable;
const tableIt = mochaTable.tableIt;
const entryIt = mochaTable.entryIt;
const xentryIt = mochaTable.xentryIt;
*/

describe("challenge2 suite", function(){
    this.timeout(100000);
    var driver;
    before(function () {
        // initializing chrome driver
        driver = new webdriver.Builder()
            .withCapabilities(webdriver.Capabilities.chrome())
            .build();
    }

    );



    after(function () {
        //return driver.quit();
    });

    it("I open the copart website", async function() {
        //return driver.get("http://www.google.com");
        return driver.get("http://www.copart.com");
    });
    it("It searches for exotic", async function() {
        var element = await driver.findElement(By.id("input-search"));
        element.sendKeys("Exotic");
        var element2 = await driver.findElement(By.xpath("//*[@id=\"search-form\"]/div/div[2]/button"));

        //console.log(element2);
        return await element2.click();
        //var element = await driver.findElement(By.name("q"));
        // element.sendKeys("Exotic" + Key.ENTER);

        // element.sendKeys("Exotic");
        //return await driver.findElement(By.className("btn btn-lightblue marginleft15")).click();
        //return await driver.findElement(By.id('input-search')).sendKeys('Exotic' + Key.ENTER);


        //lotsearchLotmake
    });
    it("Checks if it user is in search exotic page", async function() {
        var element3 = await driver.getTitle();
        //  console.log(element3);
        return driver.wait(until.titleIs('Exotic For Auction at Copart - Salvage Cars For Sale'), 4000);
        /*return await driver.getTitle().then(function(title) {
            assert.equal(title, "Exotic For Auction at Copart - Salvage Cars For Sale");
        });*/
        //return await driver.findElement(By.id('input-search')).sendKeys('Exotic' + Key.ENTER);


        //lotsearchLotmake
    });
    it("Checks if it user is in search exotic page", async function() {
      //return (WebElement)(JavascriptExecutor).executeScript("return document.evaluate('//span[@data-uname=\"lotsearchLotmake\"][text()=\"PORSCHE\"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue");
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        var element = await driver.findElements(By.xpath("//span[@data-uname='lotsearchLotmake']"));

        var element = await driver.findElements(By.xpath("//[text()='PORSCHE']"));

        console.log(element);
        return element.length > 0;
        // JavascriptExecutor js = (JavascriptExecutor)webdriver;
        //return  (String)js.executeScript("return document.evaluate('//span[@data-uname=\"lotsearchLotmake\"][text()=\"PORSCHE\"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue");
    });
});
    /*it("Goes through list and finds Porsche", async function(){
        var popular_array = await driver.findElements(webdriver.By.xpath("//*[@id=\"serverSideDataTable\"]/tbody//div"));
        for(var i=0; i<popular_array.length; i++){
            var print1 = await popular_array[i].getText();
            if(assert.include(print1,"Porsche")){
                console.log(print1);
               // return print1;
            }


        }
        //String Porsche =  await driver.findElement(By.cssSelector("table.serverSideDataTable")).getText();
    });*/

   // var el_down = document.getElementById("GFG_DOWN");





    //<span data-uname="lotsearchLotmake">PORSCHE</span>

        /*List <WebElement> list = driver.findElements(By.tagName("span"));
        System.out.println("Number of links: "+list.size());
        for(int i = 0; i < list.size(); i++){
            System.out.println(list.get(i).getText());
        }*/

        /*await driver.wait(until.titleContains("Exotics For Auction at Copart - Salvage Cars For Sale"),10000);
        console.log(await driver.getTitle());
        var html = await driver.findElement(By.tagName("body")).getAttribute('innerHTML');
        console.log(html);
        return assert.include(html,"Porsche");
        */
        //var element = await driver.findElement(By.name("PORSCHE"));
        //var element = await driver.findElement(By.xpath("//*[@id=\"serverSideDataTable\"]/tbody/tr[1]/td[5]/span")).text;

        //var element = await driver.findElement(By.xpath("//*[@id=\"serverSideDataTable\"]/tbody/tr[1]/td[5]/span")).getText();
        //console.log(element);

       /*
       for(var i = 1 i < labels.length; i++){
       /html/body/div[1]/div/div[1]/div[1]/div/div[2]/div[3]/div[3]/div/div[2]/table/tbody/tr[i]/td[5]/span
       if(assert.include(element,"PORSCHE")){
            return element;
        }
        }
        */




    /*it("The title is 'Auto Auction - Copart USA - Salvage Cars For Sale'", function() {
        // Since we want the title from the page, we need to manually handle the Promise
        return driver.getTitle().then(function(title) {
            assert.include(title, "Auto Auction - Copart USA");
        });

    });*/

    /*
    it("Finds copart's search bar then enters exotic", async function(){
        var element = await driver.findElement(By.xpath("//*[@id=\"input-search\"]"));
        return element.sendKeys("Exotics"+ Key.ENTER);
    });
    it("Finds copart's search bar then enters exotic", async function(){
        var element2 = await driver.findElement(By.xpath("//*[@id="search-form"]/div/div[2]/button"));
        return element2.click();
    });
    */




    /*it("Searches porsche'", function() {
         // Since we want the title from the page, we need to manually handle the Promise
         return driver.findElement(By.xpath("//input[@placeholder='Search by Make, Model, Description, VIN or Lot number']")).getAttribute("placeholder");
           ////*[@id="input-search"]
         ///html/body/header/div[1]/div[2]/div[1]/div/div[1]/div[2]/div/form/div/div[1]/div/input
         //return driver.findElement.By.placeholder("Search by Make, Model, Description, VIN or Lot number");



     };*/
   /*it("Finds porsche", function(){
       var element;
       element = await driver.findElement(By.name("Search by Make, Model, Description, VIN or Lot number"));
       return element.sendKeys("Porsche" + Key.ENTER)

   }*/
    /*it("Finds porsche", async function(){
        var element = await driver.findElement(By.name("q"));
        return element.sendKeys("Porsche" + Key.ENTER)

    }*/
   /* it("Porsche is found", async_function(){
        await driver.wait(until.titleContains('Porsche'),10000);
        console.log(await driver.getTitle());
        var html = await driver.findElement(By.tagName("body")).getAttribute('innerHTML');

        return assert.include(html,"911");
    }*/


