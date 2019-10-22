require("chromedriver");
var webdriver = require("selenium-webdriver");
var By = webdriver.By;
var until = webdriver.until;
var assert = require("chai").assert;
var TIMEOUT = 60000;

/**
 * Sets up a chrome driver, maximising the browser and returning the driver after navigating to a provided url (if present)
 * @param {string} url optional url to navigate the browser to
 */
let driverSetup = function (url) {
    driver = new webdriver.Builder()
        .withCapabilities(webdriver.Capabilities.chrome())
        .build()
    driver.manage().window().maximize()
    driver.manage().setTimeouts( { implicit: TIMEOUT, pageLoad: 
            TIMEOUT, script: TIMEOUT } )
    if(url)
        driver.get(url)
    return driver
}
describe("challenge 7 suite", function () {
    this.timeout(1000000)
    var driver
    var popularMakes = [] 
    before(async function () {
        driver = await driverSetup("http://www.copart.com")
    })
    
    after(function () {
        return driver.quit()
    })
    //https://stackoverflow.com/questions/35098156/get-an-array-of-elements-from-findelementby-classname
    it("Pull the popular makes/models link urls and text", async function () {
        driver.wait(until.elementLocated(By.xpath("//div[@ng-if='popularSearches']//a")))
        var popularElements = await driver.findElements(By.xpath("//div[@ng-if='popularSearches']//a"))
        await Promise.all(popularElements.map(async function(element){ //Promise.all doesn't return until ALL promises of each iteration (the map) are resolved (all elements are found and text/urls loaded)
            var make = await element.getText()
            var url = await element.getAttribute("href")
            popularMakes.push([make, url])
        }))
        
        assert.isTrue(popularMakes.length==20, "There are 20 items in the popular makes section.")
        
        console.log("Got all the popular stuff!", popularMakes)
    })
    
    it("Load and check each URL and Text", async function (){
        for(make of popularMakes){ //for some reason Array.forEach(()=>{}) loops don't work with async. For item of array does.
            var makeUrl = make[1]
            driver.get(makeUrl)
            var searchTerm = make[0]
            console.log(`Looking for ${searchTerm}`)
            searchTerm = searchTerm.toLowerCase()
            console.log(`Looking for ${searchTerm} - made lower case, since that's how it shows up in results.`)
            searchTerm = searchTerm.split(' ').join('-')
            console.log(`Looking for ${searchTerm} - replaced spaces with dashes, since that's also how the searches work for some reason`)
            
            driver.wait(until.titleContains(searchTerm)) //test will fail now if the search term never shows in the title
            
            driver.wait(until.elementLocated(By.css("[ng-if='searchText']")))
            var searchResultsElement = await driver.findElement(By.css("[ng-if='searchText']"))
            var searchResultsText = await searchResultsElement.getText()
            if(searchResultsText.length > 0){ // the searchText element always exists, but only has text if the search result exists
                console.log("Found matches!")
                assert.isTrue(searchResultsText.includes(searchTerm), `The correct make was searched. (Search text '${searchResultsText}' & Expected text '${searchTerm}'`)
            }
            else{ //since it's popular searches, not popular results that fill this list of links, not all searches have results
                console.log("No results found.")
                var resultsNotFoundElement = await driver.findElement(By.css("[ng-if='!searchUnavailable']")) //this is the "sorry we couldn't find your search" element
                var resultsNotFoundText = await resultsNotFoundElement.getText()
                assert.isTrue(resultsNotFoundText.includes(searchTerm), "No results search handled.")
            }
        }
    })
	})

