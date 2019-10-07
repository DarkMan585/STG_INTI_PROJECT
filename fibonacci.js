module.exports = {
    fibonacci: fibonacci

}
function fibonacci(number){
    var a = 0;
    var b = 1;
    var total = 0;
    if (number <=1){
        total = a;

    }else{
        if(number === 2) {
            total = b;
        }
        else{
            while(number > 2){
                total = a + b;
                a= b;
                b = total;
                number--;
            }
        }
    }
    return total;
}
