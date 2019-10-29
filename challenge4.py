
x = 1
r = 7
#input("What number would you like to put")
#r = int(r)
print(r)
def fibonacci(number):
    a = 0
    b = 1
    total = 0
    if number <= 1:
        total = a
    else: 
        if(number == 2):
            total = b
        else:
            while number > 2:
                total = a + b 
                a = b
                b = total
                number = number - 1
    return total

def num2words(num):
	under_20 = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen']
	tens = ['Twenty','Thirty','Forty','Fifty','Sixty','Seventy','Eighty','Ninety']
	above_100 = {100: 'Hundred',1000:'Thousand', 1000000:'Million', 1000000000:'Billion'}
 
	if num < 20:
		 return under_20[num]
	
	if num < 100:
		return tens[(int)(num/10)-2] + ('' if num%10==0 else ' ' + under_20[num%10])
 
	# find the appropriate pivot - 'Million' in 3,603,550, or 'Thousand' in 603,550
	pivot = max([key for key in above_100.keys() if key <= num])
 
	return num2words((int)(num/pivot)) + ' ' + above_100[pivot] + ('' if num%pivot==0 else ' ' + num2words(num%pivot))

while x <= r:
    print1 = fibonacci(x)
    print2 = num2words(print1)
    print(str(print1) + " - "+ print2)
    x += 1

