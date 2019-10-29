from selenium import webdriver
from selenium.webdriver.common.keys import Keys

driver = webdriver.Chrome("../chromedriver.exe")
driver.implicitly_wait(60) 
driver.get("https://www.copart.com/")
elem = driver.find_element_by_id('input-search')
elem.clear()
elem.send_keys("exotics")
elem2 =driver.find_element_by_xpath('//*[@id="search-form"]/div/div[2]/button')
elem2.click()
elem3 = driver.title
print(elem3)
if elem3 == 'Vehicles For Auction at Copart - Salvage Cars For Sale':
    print("User is in correct website")
else:
    print("User is in correct website")   
elem4 = driver.find_element_by_xpath('/html/body/div[1]/div/div[1]/div[1]/div/div[2]/div[3]/div[3]/div/div[2]/table/tbody')
print(elem4)
elem5 = elem4.get_attribute('innerHTML')
print(elem5)
if 'PORSCHE' in elem5:
    print('Porsche is in list' )
else:
    print('Porsche is not in list' )