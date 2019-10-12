
require('chromedriver');
var webdriver = require('selenium-webdriver');
var assert = require("chai").assert;
var until = webdriver.until;
var By = webdriver.By;
var Key = webdriver.Key;
var WebElement = webdriver.WebElement;


describe("challenge5 suite", function(){
    this.timeout(100000);
    var driver;
    before(async function () {
            // initializing chrome driver
            driver = new webdriver.Builder()
                .withCapabilities(webdriver.Capabilities.chrome())
                .build();
            driver.manage().window().maximize();


        }

    );



    after(function () {
        //return driver.quit();
    });

    it("I open the copart website", function() {
        return driver.get("http://www.copart.com");
    });

    it("It searches for porsche in search bar", async function() {
        var element = await driver.findElement(By.id("input-search"));
        element.sendKeys("Porsche");
        var element2 = await driver.findElement(By.xpath("//*[@id=\"search-form\"]/div/div[2]/button"));

        //console.log(element2);
        return await element2.click();

    });
    it("Checks if it user is in search exotic page", async function() {
        var element3 = await driver.getTitle();

        return driver.wait(until.titleIs('Porsche For Auction at Copart - Salvage Cars For Sale'), 4000);

    });
    it("Checks if Porsche is in list", async function() {

        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//table[@id="serverSideDataTable"]//tbody'))));
        var html = await driver.findElement(By.id('serverSideDataTable')).getAttribute('innerHTML');
        // console.log(html);
        return assert.include(html, 'PORSCHE');

    });



    it("It picks 100 from the the show entries list", async function(){

        var element = await driver.findElement(By.xpath('//select[@name="serverSideDataTable_length"]'));
        await element.click();
        await element.sendKeys("100");
        element.sendKeys("ENTER");
        element.click();
        return driver.wait(until.elementIsNotVisible(driver.findElement(By.id('serverSideDataTable_processing',10000))));

    });


    it("Should check for different models of porsche", async function(){
        var models_array = [];
        var models_array_nontext = await driver.findElements(By.xpath('//span[@data-uname="lotsearchLotmodel"]'));
        for(var i = 0; i<models_array_nontext.length;i++){
            var model = await models_array_nontext[i].getText();


            models_array.push(model);
        }
        var used_models_array_text = [];
        var models_count = [];

        for(var x = 0; x<models_array.length;x++){
            var counter = 0;
            var model = models_array[x];
            var flag = true;
            if (used_models_array_text === undefined || used_models_array_text.length == 0) {
                // array empty or does not exist
            }else {
                for (var o = 0; o <used_models_array_text.length;o++)
                {
                    if (model == used_models_array_text[o]) {
                        flag = false;

                    }
                }
            }
            if(flag) {
                for (var e = 0; e < models_array.length; e++) {
                    if (model == models_array[e]) {
                        counter = counter + 1;

                    }
                }
                models_count.push(counter);
                used_models_array_text.push(model);

            }

        }
        for (var a = 0; a < used_models_array_text.length; a++) {
            console.log("\nThe model " + used_models_array_text[a] + " has " + models_count[a] + "  amount");

        }
    });


    it("Should print out damage types", async function(){
        var damage_array = await driver.findElements(By.xpath('//span[@data-uname="lotsearchLotdamagedescription"]'))

        var rearEndcounter = 0;
        var frontEndcounter = 0;
        var minorDentscratchesCounter = 0;
        var underCarriagecounter = 0;
        var miscCounter = 0;

        for(var i = 0; i < damage_array.length; i++){
            var damage = await damage_array[i].getText();

            switch(damage){
                case "REAR END":
                    rearEndcounter++;
                    break;
                case "FRONT END":
                    frontEndcounter++;
                    break;
                case "MINOR DENT/SCRATCHES":
                    minorDentscratchesCounter++;
                    break;
                case "UNDERCARRIAGE":
                    underCarriagecounter++;
                    break;
                default:
                    miscCounter++;
                    break;
            }
        }
        console.log("\nREAR END "+ rearEndcounter + "\nFRONT END " + frontEndcounter + "\nMINOR DENT/SCRATCHES "+ minorDentscratchesCounter + "\nUNDERCARRIAGE " + underCarriagecounter + "\nMISC " + miscCounter);

    });




});




