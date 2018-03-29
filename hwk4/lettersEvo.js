'use strict'

function counterForEach(stringerino) { // Для проверки !!lib[x] буквы в объекте : 1
    let myArr = stringerino.toLowerCase().split('');
    let lib = {'а': 1,'у': 1,'о': 1,'ы': 1,'и': 1,'э': 1,'я': 1,'ю': 1,'е': 1,'ё': 1};
    var superDuperCounter = {count: 0}
    myArr.forEach( x => !!lib[x] ? superDuperCounter.count += 1 : {} );
    return superDuperCounter.count;
}

console.log('ForEach. В вашей строке ' + counterForEach('ПРИВЕЕЕТ АНДРЕЕЕЙ') + ' гласных');
console.log('ForEach. В вашей строке ' + counterForEach('ОЧЕНЬМНОГОГЛАСНЫХАЖТОШНИТАААА') + ' гласных');

function counterFilter(stringerino) {
    let myArr = stringerino.toLowerCase().split('');
    let lib = {'а': 1,'у': 1,'о': 1,'ы': 1,'и': 1,'э': 1,'я': 1,'ю': 1,'е': 1,'ё': 1};
    //var arrayishCounter = [];
    //myArr.filter( letter => letter in lib ? arrayishCounter.push(letter) : {} );
    let result = myArr.filter( letter => letter in lib );
    return result.length;
}

console.log('Filter. В вашей строке ' + counterFilter('ПРИВЕЕЕТ АНДРЕЕЕЙ') + ' гласных');
console.log('Filter. В вашей строке ' + counterFilter('ОЧЕНЬМНОГОГЛАСНЫХАЖТОШНИТАААА') + ' гласных');

function counterReduce(stringerino) { // Тут ничего супер оригинального не придумал...
    let myArr = stringerino.toLowerCase().split('');
    let lib = {'а': 1,'у': 1,'о': 1,'ы': 1,'и': 1,'э': 1,'я': 1,'ю': 1,'е': 1,'ё': 1};
    var result = myArr.reduce( (x,y) => x + (y in lib).toString(), '');
    return result.split('true').length - 1;
}

console.log('Reduce. В вашей строке ' + counterReduce('ПРИВЕЕЕТ АНДРЕЕЕЙ') + ' гласных');
console.log('Reduce. В вашей строке ' + counterReduce('ОЧЕНЬМНОГОГЛАСНЫХАЖТОШНИТАААА') + ' гласных');




///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

/*//var r, re,s;
s='stange 15 new'
re = /\D+/ig;
r = s.replace(re, '');
document.write(r);
Пример вернет 15 .*/

/*
Сделать объект lib с гласными (он = обхекту counter). Если !!lib[x] то 
либо добавляем x в arr[arr.length] = x, libo string+=x, libo drugoi object
object[count]+=1 EZEZEZs
*/
/*

function counterFilter(stringerino) {
    let strArr = stringerino.toLowerCase().split('');

}


function counterForEach(stringerino) {
    let strArr = stringerino.toLowerCase().split('');
    let counter = {'а': 1,'у': 1,'о': 1,'ы': 1,'и': 1,'э': 1,'я': 1,'ю': 1,'е': 1,'ё': 1};
    strArr.forEach( x => !!counter[x] ? counter[x] += 1 : {} );
    let letsCount = JSON.stringify(counter);
    let proceedCounting = letsCount.slice(2, letsCount.length - 1);
    let aboutToCount = proceedCounting.split('\":');
    let itsAlmostDone = JSON.stringify(aboutToCount);
    let stillNotDone = itsAlmostDone.split('\",\"');
    let stillGoing = JSON.stringify(stillNotDone);
    return stillGoing;
}
console.log(counterForEach('азазазазазаза'));





*/