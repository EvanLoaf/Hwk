'use strict'

const readline = require('readline');

function stringInput() {
    return readline.createInterface({ input: process.stdin, output: process.stdout });
}

const glasn = ['а','у','о','ы','и','э','я','ю','е','ё'];

/*function input() {  // Более *приятный* вариант, но не чистый
    const rl = stringInput();
    rl.question('U can type in pretty much anything ', (myString) => {
        rl.close();
        let stringContent = myString.split('');
        for (var i = 0, count = 0; i < stringContent.length; i++) {
            for (var j = 0; j < glasn.length; j++) {
                if ( stringContent[i] == glasn[j] ) {
                    count++;
                }
            }
        }
        console.log(count);
    });
}
input();*/

function inputClean(myString) { // Вроде как критерии чистоты соблюдены
    let stringContent = myString.toLowerCase().split(''); // или toLowerCase тут, или 
    for (var i = 0, count = 0; i < stringContent.length; i++) { // расширить массив glasn
        for (var j = 0; j < glasn.length; j++) {
            if ( stringContent[i] == glasn[j] ) {
                count++;
            }
        }
    }
    return count;
}
console.log(inputClean('xaxaxaxaяяяя')); // 4
console.log(inputClean('ышгщварьт ыват ьш ьыоват шщт тшгвы')); // 8
console.log(inputClean('ыЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫ'));

function short(string) { // Вот такой вариант тоже нашелся, хотя не до конца понимаю синтаксис
    var counterino = string.match(/[ауоыиэяюеё]/gi).length;
    return counterino;
}
console.log(short('ывнгп ыавгрн ыв ыаврнвыаргнffffаааа '));
console.log(short('ызщвшаозпзыщшавпыаптырвапырващпгырьващгшпрщвшагпоывашгп'));
console.log(short('FFFFFFFFFFFFФФФФФФФФФФААААААААААААА'));

