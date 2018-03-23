'use strict'

var readline = require('readline');

function numberInput() {
    return readline.createInterface({ input: process.stdin, output: process.stdout });
}

var arraySettings = {
    minLength: '',
    maxLength: '',
    minNumber: '',
    maxNumber: ''
};

function arrayMinLength() { // Мин длинна массива
    var rl = numberInput();
    rl.question('Введите нижнюю границу длинны массива ', (answer) => {
        rl.close();
        var minLength = parseInt(answer);
        if (isFinite(minLength) && minLength >= 0  && minLength <= 100) {
            arraySettings.minLength = minLength;
            arrayMaxLength();
        }
        else {
            console.log('Введите число от 0 до 100! ');
            arrayMinLength();
        }
    });    
}

function arrayMaxLength() { // Макс длинна массива
    var rl = numberInput();
    rl.question('Введите верхнюю границу длинны массива ', (answer) => {
        rl.close();
        var maxLength = parseInt(answer);
        if (isFinite(maxLength) && maxLength >= 0  && maxLength <= 100 && maxLength >= arraySettings.minLength) {
            arraySettings.maxLength = maxLength;
            arrayMinNumber();
        }
        else {
            console.log('Введите число от 0 до 100! И не менее '+arraySettings.minLength+'!');
            arrayMaxLength();
        }
    });    
}

function arrayMinNumber() { // мин значение элемента массива
    var rl = numberInput();
    rl.question('Введите минимальное значение элемента массива ', (answer) => {
        rl.close();
        var minNumber = parseInt(answer);
        if (isFinite(minNumber) && minNumber >= -1000  && minNumber <= 1000) {
            arraySettings.minNumber = minNumber;
            arrayMaxNumber();
        }
        else {
            console.log('Введите число от -1000 до 1000! ');
            arrayMinNumber();
        }
    });    
}

function arrayMaxNumber() { // макс значение элемента массива
    var rl = numberInput();
    rl.question('Введите максимальное значение элемента массива ', (answer) => {
        rl.close();
        var maxNumber = parseInt(answer);
        if (isFinite(maxNumber) && maxNumber >= -1000  && maxNumber <= 1000 && maxNumber >= arraySettings.minNumber) {
            arraySettings.maxNumber = maxNumber;
            setTimeout(showSet, 0); // Пришлось так вызывать остальные ф-ции
            setTimeout(arrayFill, 0); // т.к. иначе они все выполнялись
            setTimeout(showArr, 0); // сразу с запуском диалога с консолью
            setTimeout(arraySort, 0); // и ничего не работало
            setTimeout(arrAxis, 0); // а как иначеили лучше сделать - не знаю
            setTimeout(smartSort, 0);
            setTimeout(showSmartArr, 0);
        }
        else {
            console.log('Введите число от -1000 до 1000! И не менее '+arraySettings.minNumber+'!');
            arrayMaxNumber();
        }
    });    
}

var showSet = () => { // просто демонстрация случайных параметров массива
    console.log('\nПараметры формируемого массива');
    console.log(arraySettings)
};

var showArr = () => { // Отображение сформированного массива
    console.log('\nА вот и сам массив');
    console.log(myArray);
    if (myArray.length > 15) { // На случай, если массив большой и в консоли в столбец
        console.log('\nИли в строку: ');
        console.log(myArray.toString());
    }
}

var showSmartArr = () => { // Массив после операции в задании
    console.log('\nНемного магия и вуаля');
    console.log(myArray);
    if (myArray.length > 15) { // На случай, если массив большой и в консоли в столбец
        console.log('\nИли в строку: ');
        console.log(myArray.toString());
    }
}

var myArray = [];

function arrayFill() { // Функция создания случайного массива
    var m = arraySettings.maxLength; // m - макс возможная длинна для массива
    var n = arraySettings.minLength; // n - мин возможная длинна для массива
    var myArrLength = Math.floor(Math.random()*(m-n+1))+n;
    console.log('\nТак сошлись звезды, что длинна массива - '+myArrLength);
    var x = arraySettings.maxNumber; // x - макс возможное знач эл-та массива
    var y = arraySettings.minNumber; // y - мин возможное знач эл-та массива
    for (var i = 0; i < myArrLength; i++) {
        myArray[i] = Math.floor(Math.random()*(x-y+1))+y;
    }
}

function arraySort() { // Функция сортировки массива по возрастанию
    myArray.sort(function(a, b) {
        return a - b;
    });
    console.log('\nОтсортируем его по возрастанию');
    console.log(myArray);
}

function smartSort() { // Сортировка массива согласно заданию
    switch (myArray.length) {
        case 0:
        case 1: 
        case 2:
        case 3: return myArray;
        default:
            for (let i = 0, j = myArray.length; i < Math.floor(j / 4); i++ ) {
                let flip1 = myArray[i];
                let index1 = Math.floor(j / 2) - i - 1;
                myArray[i] = myArray[index1];
                myArray[index1] = flip1;
                let index2 = Math.ceil(j / 2) + i;
                let index3 = j - 1 - i;
                let flip2 = myArray[index2];
                myArray[index2] = myArray[index3];
                myArray[index3] = flip2;
            }
            return myArray;
    }
}

function arrAxis() { // Для удобства покажет серединный (статичный) элемент или
    if (myArray.length % 4 === 1) { // начало второй половины массива
        console.log('\nСередина массива: ');
        console.log(myArray[Math.floor(myArray.length / 2)]);
    }
    else if (myArray.length % 4 === 0) {
        console.log('\nПервый элемент второй половины массива: ');
        console.log(myArray[myArray.length / 2]);
    }
    else if (myArray.length % 4 === 2) {
        console.log('\nПервый элемент второй половины массива: ');
        console.log(myArray[myArray.length / 2]);
        console.log('\nСередина первой половины массива массива: ');
        console.log(myArray[Math.floor(myArray.length / 4)]);
        console.log('\nСередина второй половины массива: ');
        console.log(myArray[Math.floor(myArray.length / 4)+Math.ceil(myArray.length / 2)]);
    }
    else {
        console.log('\nСередина массива: ');
        console.log(myArray[Math.floor(myArray.length / 2)]);
        console.log('\nСередина первой половины массива массива: ');
        console.log(myArray[Math.floor(myArray.length / 4)]);
        console.log('\nСередина второй половины массива: ');
        console.log(myArray[Math.floor(myArray.length / 4)+Math.ceil(myArray.length / 2)]);
    }
}

arrayMinLength();

