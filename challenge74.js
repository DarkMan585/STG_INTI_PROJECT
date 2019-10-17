require('chromedriver');
var webdriver = require('selenium-webdriver');
var assert = require("chai").assert;
var until = webdriver.until;
var By = webdriver.By;
var Key = webdriver.Key;
//var sleep = require('sleep');
var popular_array;
        
var MultiArray;



describe("challenge7 suite", function(){
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

    it("I open the copart website", async function() {
        return await driver.get("http://www.copart.com");
    });

    it("should verify these urls using the displayed text for each URL validation", async function(){
        var hrefArray = [];
        var popular_array = await driver.findElements(webdriver.By.xpath('//*[@id="tabTrending"]//a'));
        
        var MultiArray = new Array(popular_array.length);
        
        var validationString; 

        for(var i=0; i<popular_array.length; i++){
            MultiArray [i] = new Array(2)
            MultiArray[i][0] = await popular_array[i].getText();
            MultiArray[i][1] = await popular_array[i].getAttribute("href");
            hrefArray[i] = MultiArray[i][1];
            console.log( MultiArray[i][0]  + " - "+ MultiArray[i][1] );
            //console.log(hrefArray[i]);

        }
        for(var b=0; b<popular_array.length; b++){
            await driver.get(MultiArray[b][1]);
            var superValidation =await driver.wait(function(){
            return driver.getCurrentUrl().then(function(getUrl){
                return assert.include(getUrl, MultiArray[b][1]);
            });
            if(superValidation){
                console.log(MultiArray[b][1]+" link is working");
            }else{
                console.log(MultiArray[b][1]+" link is not working");

            }
        });
    }
      //  Promise.all(hrefArray).then(values => { 
      //      console.log(values);   
      //  Promise.allSettled(hrefArray).then((results) => results.forEach((result) => console.log(result +result.status)));
            //driver.get("http://www.copart.com") 

         



        /*
        for(var x = 0; x < popular_array.length; x++){
            //console.log(x);
            var promise = job1(x);
        }
            promise.then(function(data1) {
                function sleep(ms) {
                    return new Promise(resolve => setTimeout(resolve, ms,12));
                  }
                sleep(15);
                driver.get(data1);
                console.log(data1);
                return job2();
                })

                .then(function(data2) {
                    console.log(data2);
                    var superValidation = assert.include(MultiArray[x][1],data2);        
                    if(superValidation){
                        console.log(data2 + " link is working")
                    }else{
                        console.log(data2 + " link is not working")
                    }
                    return superValidation;
                    
                });

                .then(function(data3) {
                    console.log('data3', data3);
                }); 

                function job1(x) {
                    return new Promise(function(resolve, reject) {
                        setTimeout(function() {
                            console.log(x);
                           // console.log(MultiArray[0][1]);
                            
                            resolve(MultiArray[x][1]);
                      
                        }, 1000);
                    });
                }

                function job2() {
                    return new Promise(async function(resolve, reject) {
                        var getUrl = await driver.getCurrentUrl();
                        setTimeout(function() {
                            resolve(getUrl);
                            reject(getUrl);
                        }, 1000);
                    });
                }
                 */           

        
            
            var htmlAssert = "";
          
           
       
           
        
        return MultiArray; 
    });
    

   
   
});
  



  
