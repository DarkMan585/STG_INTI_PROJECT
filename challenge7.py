from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


driver = webdriver.Chrome("../chromedriver.exe")
driver.implicitly_wait(60) 
driver.get("https://www.copart.com/")
driver.maximize_window()
popularMakes = []
WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.XPATH,"//div[@ng-if='popularSearches']//a"))) 

popularElements = driver.find_elements_by_xpath("//div[@ng-if='popularSearches']//a")
print(popularElements)
i = 0
while i < len(popularElements):
    twoArray = []
    twoArray.append(popularElements[i].text)
    twoArray.append(popularElements[i].get_attribute("href"))
    popularMakes.append(twoArray)
    i = i + 1
searchResultsText = ""
print(popularMakes)
x = 0
while x < len(popularElements):
   
    makeUrl = popularMakes[x][1]
    driver.get(makeUrl)
    searchTerm = popularMakes[x][0]
    print("Looking for "+ searchTerm)
    #searchTerm = searchTerm.lower()
 
   
    wait = WebDriverWait(driver, 10)
    print(searchTerm)
    print(driver.current_url)
    copyUrl = driver.current_url
    if copyUrl == makeUrl:
        print("User is in the " + searchTerm + " website")
    else:
        print("User is not in the " + searchTerm + " website")
    
    WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.XPATH,'/html/body/div[1]/div/div[1]/div[1]/div/div[2]/div[3]/div[3]/div/div[2]/table/tbody'))) 
    elem4 = driver.find_element_by_xpath('/html/body/div[1]/div/div[1]/div[1]/div/div[2]/div[3]/div[3]/div/div[2]/table/tbody')
    print(elem4)
    elem5 = elem4.get_attribute('innerHTML')
    print(elem5)
    if searchTerm in elem5:
        print(searchTerm + ' is in list' )
    else:
        print(searchTerm + ' is not in list' )
   
    #need to check wait until issues
if len(searchResultsText) > 0:
    if searchTerm in searchResultsText:
        print("The correct make was searched " + searchTerm)
    else:
        print("Expected text " + searchTerm)
else:
    print("No Results found.")  
    resultsNotFoundElement = driver.find_elements_by_css("[ng-if='!searchUnavailable']")
    resultsNotFoundText = resultsNotFoundElement.text
    if searchTerm not in searchResultsText:
        print("No results search handled.")
    
