from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome("../chromedriver.exe")
driver.implicitly_wait(60) 
driver.get("https://www.copart.com/")
elem = driver.find_element_by_id('input-search')
elem.clear()
elem.send_keys("porsche")
elem2 =driver.find_element_by_xpath('//*[@id="search-form"]/div/div[2]/button')
elem2.click()
elem3 = driver.title
print(elem3)
if elem3 == 'Vehicles For Auction at Copart - Salvage Cars For Sale':
    print("User is in correct website")
else:
    print("User is in correct website")   
elem4 = driver.find_element_by_xpath('//select[@name="serverSideDataTable_length"]')
elem4.click()
elem4.send_keys("100")
elem4.send_keys("ENTER")
elem4.click()

WebDriverWait(driver, 10).until(EC.invisibility_of_element_located((By.XPATH,'serverSideDataTable_processing'))) 
#element = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, '//span[@data-uname="lotsearchLotmodel"]'))

                                                                         
#wait.until.invisibility_of_element_located(driver.find_element_by_id('serverSideDataTable_processing')))

modelsArray = []
modelsArrayNontext = driver.find_elements_by_xpath('//span[@data-uname="lotsearchLotmodel"]')
print(len(modelsArrayNontext))
i = 0
print(modelsArrayNontext)
while i < len(modelsArrayNontext):
    
    model = modelsArrayNontext[i].text
    print(model)
    modelsArray.append(model)
    i = i + 1
used_models_array_text = []
models_count = []

a = 0
while a < len(modelsArray):
    counter = 0
    model = modelsArray[a]
    flag = True
    if used_models_array_text is None or len(used_models_array_text) == 0:
        print()
    else:
        o = 0
        while o < len(used_models_array_text):
            if model == used_models_array_text[o]:
                flag = False

                    
            o = o + 1
            
    if flag: 
        e = 0
        while e < len(modelsArray):
            if model == modelsArray[e]:
                counter = counter + 1
            e = e + 1
                
        models_count.append(counter)
        used_models_array_text.append(model)

            

        
    a = a + 1    
       
f = 0
p = len(used_models_array_text)-1
print(p)
while f < p:
    print("\nThe model " + used_models_array_text[f] + " has " + str(models_count[f]) + "  amount")
    
    f = f + 1

print(a)
damage_array = driver.find_elements_by_xpath('//span[@data-uname="lotsearchLotdamagedescription"]')

rearEndcounter = 0
frontEndcounter = 0
minorDentscratchesCounter = 0
underCarriagecounter = 0
miscCounter = 0
z = 0
while z < len(damage_array):
    damage = damage_array[z].text
    
    if damage == "REAR END":
        rearEndcounter = rearEndcounter + 1
    elif damage == "FRONT END":
        frontEndcounter = frontEndcounter + 1
    elif damage == "MINOR DENT/SCRATCHES":
        minorDentscratchesCounter = minorDentscratchesCounter + 1
    elif damage == "UNDERCARRIAGE":
        underCarriagecounter = underCarriagecounter + 1
    else:
        miscCounter = miscCounter + 1
    z = z + 1
            
        
print("\nREAR END "+ str(rearEndcounter) + "\nFRONT END " + str(frontEndcounter) + "\nMINOR DENT/SCRATCHES "+ str(minorDentscratchesCounter) + "\nUNDERCARRIAGE " + str(underCarriagecounter) + "\nMISC " + str(miscCounter))


