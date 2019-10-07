module.exports = {
    convertNumToString: convertNumToString

}


function convertNumToString(s) {
    var th = ['','thousand','million', 'billion','trillion'];
    var dg = ['zero','one','two','three','four', 'five','six','seven','eight','nine'];
    var tn = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
    var tw = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    s = s.toString();
    s = s.replace(/[\, ]/g,'');
    if (s != parseFloat(s)) return 'not a number';
    var x = s.indexOf('.');
    if (x == -1)
        x = s.length;
    if (x > 15)
        return 'too big';
    var n = s.split('');
    var str = '';
    var sk = 0;
    for (var i=0;   i < x;  i++) {
        if ((x-i)%3==2) {
            if (n[i] == '1') {
                str += tn[Number(n[i+1])] + ' ';
                i++;
                sk=1;
            } else if (n[i]!=0) {
                str += tw[n[i]-2] + ' ';
                sk=1;
            }
        } else if (n[i]!=0) { // 0235
            str += dg[n[i]] +' ';
            if ((x-i)%3==0) str += 'hundred ';
            sk=1;
        }
        if ((x-i)%3==1) {
            if (sk)
                str += th[(x-i-1)/3] + ' ';
            sk=0;
        }
    }

    if (x != s.length) {
        var y = s.length;
        str += 'point ';
        for (var i=x+1; i<y; i++)
            str += dg[n[i]] +' ';
    }
    return str.replace(/\s+/g,' ');
}
/*
function convertNumToString2(number){
    var s="";
    var numlength = (number + "").length;

    var num = number + "";
    var single_digits = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    var two_digits = ["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];

    var tens_multiple = ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];

    var tens_power = ["hundred","thousand","million","billion","trillion"];
    var x = 0;
    if(numlength>0) {
        if(numlength == 1) {
            s = single_digits[num[x]];
            x = numlength;
        }
        if(numlength == 2){
            s = two_digits[num[x]];
            x = numlength;
        }
        while (x < numlength) {
            if (numlength >= 3) {
                if(){

                }
            }
        }
    }
}

*/
/*
function convertNumToString(number){
    var s="";
    var numlength = (number + "").length;

    var num = number + "";
    var single_digits = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    var two_digits = ["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];

    var tens_multiple = ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];

    var tens_power = ["hundred","thousand"];
    var x = 0;
    if(numlength==1)
    {
        s = single_digits[num[x]];
        x = numlength;
    }
    while(x < numlength){
        if(numlength >= 3){

        }
    }
}
function convertNumToString2(number){
    var s = "";
    var ten = "";
    var hundred = "";
    var thousand = "";
    var million = "";
    var billion = "";
    var snumber = number+"";

    var hundredNum = snumber.substring(snumber.length-3, (snumber.length-3)+3);

    if(hundredNum > 0){
        hundred = getNum(hundredNum) + ""

    }

    var thousandNum = snumber.substring((snumber.length-6), (snumber.length-6)+3);
    if(thousandNum > 0){
        thousand = getNum(thousandNum) + " thousand "
    }

}

function getNum(pnumber){
    var singlesandteens = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen',
    'fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];

    var tens = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    var snum = pnumber;

    var hundred = snum.substring((pnumber.length-3),(pnumber.length-3)+1);
    var shundred = "";

    if(hundred > 0){
        shundred = singlesandteens[hundred]+ " hundred "
    }else{
        shundred = "";
    }

    var sten = parseInt(p.number.substring((pnumber.length-2), (pnumber.length-2)+1),10);
}

 */