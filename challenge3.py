from selenium import webdriver
from selenium.webdriver.common.keys import Keys

driver = webdriver.Chrome("../chromedriver.exe")
driver.implicitly_wait(60) 
driver.get("https://www.copart.com/")
elements = driver.find_elements_by_xpath("//*[@id=\"tabTrending\"]/div[1]/div[2]//a")
x = 0
print(len(elements))
while x < len(elements):
    print1 = elements[x].text
    print2 = elements[x].get_attribute("href")
    print(print1 + " - "+ print2)
    x += 1
