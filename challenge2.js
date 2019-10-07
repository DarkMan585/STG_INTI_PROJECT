require('chromedriver');
var webdriver = require('selenium-webdriver');
var assert = require("chai").assert;
var until = webdriver.until;
var By = webdriver.By;
var Key = webdriver.Key;



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
        return driver.quit();
    });

    it("I open the copart website", function() {
        return driver.get("http://www.copart.com");
    });
    it("It searches for exotic", function() {
        var porsche = driver.get("https://www.copart.com/lotSearchResults/?free=true&query=Exotics");
        console.log(porsche);
        return porsche;
        //lotsearchLotmake
    });

    it("Goes through list and finds Porsche", async function(){
        return driver.get("https://www.copart.com/lotSearchResults/?free=true&query=Exotics&searchCriteria=%7B%22query%22:%5B%22Exotics%22%5D,%22filter%22:%7B%22MAKE%22:%5B%22lot_make_desc:%5C%22PORSCHE%5C%22%22%5D%7D,%22watchListOnly%22:false,%22searchName%22:%22%22,%22freeFormSearch%22:true%7D");

    });

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



});
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


