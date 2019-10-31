from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


driver = webdriver.Chrome("../chromedriver.exe")
driver.implicitly_wait(60) 
driver.get("https://www.copart.com/")
driver.maximize_window()
elem = driver.find_element_by_id('input-search')
elem.clear()
elem.send_keys("Nissan")
elem2 =driver.find_element_by_xpath("//*[@id=\"search-form\"]/div/div[2]/button")
elem2.click()
elem3 = driver.title
print(elem3)
if elem3 == 'Nissan For Auction at Copart - Salvage Cars For Sale':
    print("User is in correct website")
else:
    print("User is in correct website")   


elem4 = WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.XPATH,'//*[@id="filters-collapse-1"]/div[1]/ul/li[4]/h4/a[1]/i'))) 
#elem4 = driver.find_element_by_xpath('//*[@id="filters-collapse-1"]/div[1]/ul/li[4]/h4/a[1]/i')
elem4.click()
elem5 = WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.XPATH,'//*[@id="collapseinside4"]/form/div/input'))) 
#elem5 = driver.find_element_by_class('//*[@id="collapseinside4"]/form/div/input')
elem5.send_keys("Skyline")

try:
    WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.ID,'collapseinside4'))) 
    html = driver.find_element_by_id('collapseinside4').get_attribute('innerHTML')
    print(html)
    if "SKYLINE" in html:
        print("Skyline is present")
    else:
        print("Skyline is not present") 
    
except ValueError:
    driver.save_screenshot("screenshot.png")
    print("Skyline was not found")



