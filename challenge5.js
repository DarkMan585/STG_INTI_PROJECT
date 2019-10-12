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
        return driver.wait(until.titleIs('Porsche For Auction at Copart - Salvage Cars For Sale'), 4000);
        /*return await driver.getTitle().then(function(title) {
            assert.equal(title, "Exotic For Auction at Copart - Salvage Cars For Sale");
        });*/
        //return await driver.findElement(By.id('input-search')).sendKeys('Exotic' + Key.ENTER);


        //lotsearchLotmake
    });
    it("Checks if Porsche is in list", async function() {
        //return (WebElement)(JavascriptExecutor).executeScript("return document.evaluate('//span[@data-uname=\"lotsearchLotmake\"][text()=\"PORSCHE\"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue");

        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//table[@id="serverSideDataTable"]//tbody'))));
        var html = await driver.findElement(By.id('serverSideDataTable')).getAttribute('innerHTML');
       // console.log(html);
        return assert.include(html, 'PORSCHE');

        /* driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        var element = await driver.findElements(By.xpath("//span[@data-uname='lotsearchLotmake']"));

        var element = await driver.findElements(By.xpath("//[text()='PORSCHE']"));

        console.log(element);
        return element.length > 0; */

        // JavascriptExecutor js = (JavascriptExecutor)webdriver;
        //return  (String)js.executeScript("return document.evaluate('//span[@data-uname=\"lotsearchLotmake\"][text()=\"PORSCHE\"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue");
    });



    it("It picks 100 from the the show entries list", async function(){
       // var element3 = await driver.getTitle();
        //  console.log(element3);
        //driver.wait(until.titleIs('Porsche For Auction at Copart - Salvage Cars For Sale'), 4000);
        //*[@id="serverSideDataTable_length"]/label/select
        //await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//table[@id="serverSideDataTable"]//tbody'))));
        var element = await driver.findElement(By.xpath('//select[@name="serverSideDataTable_length"]'));
        await element.click();
        await element.sendKeys("100");
        element.sendKeys("ENTER");
        element.click();
        return driver.wait(until.elementIsNotVisible(driver.findElement(By.id('serverSideDataTable_processing',10000))));

    });


    /*it("Should check for different models of porsche", async function(){
        var models_array = await driver.findElements(By.xpath('//span[@data-uname="lotsearchLotmodel"]'));
        var models_count = [];

        for(var i = 0; i<models_array.length;i++){
            var model = await models_array[i].getText();


            models_count.push(model);
        }
        models_count.sort();
        var current = null;
        var count = 0;
        for(var x =0;x< models_count.length;i++){
            if(models_count[x] != current){
                if(count > 0){
                    console.log("The model " + current + " has " + count + "  amount");
                }
                current = models_count[x];
                count = 1;

            }else{
                count++;
            }
        }
        if(count > 0){
            console.log("there are " + count)
        }
        return "";
    });*/
    it("Should print out damage types", async function(){
        var damage_array = await driver.findElements(By.xpath('//span[@data-uname="lotsearchLotdamagedescription"]'))
        console.log(damage_array);
        var rearEndcounter = 0;
        var frontEndcounter = 0;
        var minorDentscratchesCounter = 0;
        var underCarriagecounter = 0;
        var miscCounter = 0;
        console.log(damage_array.length);
        for(var i = 0; i < damage_array.length; i++){
            var damage = await damage_array[i].getText();
            console.log(damage);
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




