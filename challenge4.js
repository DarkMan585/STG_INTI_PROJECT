require('chromedriver');
var webdriver = require('selenium-webdriver');
var assert = require("chai").assert;
var until = webdriver.until;
var By = webdriver.By;
var Key = webdriver.Key;

require('chromedriver');
const fibonacci = require('./fibonacci');
const convertNumToString = require('./convertNumToString')


describe("challenge4 suite", function(){

    before(function () {
        // initializing chrome driver

    }

    );



    after(function () {

    });

    it("Returns fibonacci numbers", async function(){

        //var power = prompt("What is the fibonacci number order do you want to enter?");
        //need to know how to prompt integer value
        let size = prompt("What is the fibonacci number order do you want to enter?");
        for(var i=1; i<13; i++){
            var print1 = fibonacci.fibonacci(i);
            var print2 = convertNumToString.convertNumToString(print1);
            //var print2 = convertNumToString.convertNumToString2(print1);
            console.log(print1 + " - "+ print2);
        }

    });

});
