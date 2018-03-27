"use strict";

// Похоже не идеальное решение, похоже на "перебор" цветов, о котором вы говорили на занятии
// когда перебор идет, пока не выдаст цвет, до этого не появлявшийся. только тут
// цифры перебираются

/*var memory = {};

function randomDiap(n,m) {
    var k = Math.floor(Math.random()*(m-n+1))+n;
    if (k in memory) {
        return randomDiap(n,m);
    }
    else {
        memory[k] = k;
        return k;
    }
}

function mood(colorsCount) {
    var colors=['', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый'];
    console.log('цветов: ' + colorsCount);
    for (var i = 0; i < colorsCount; i++) {
        var n = randomDiap(1,7);
        var colorName = colors[n];
        console.log(colorName);
    }
}

mood(7);*/

// Должно быть нормальным решением. По крайней мере надеюсь на это (:

function randomDiap(n,m) { // Вот тут решение больше похоже на что-то правильное
    return Math.floor(Math.random()*(m-n+1))+n;
}

function mood(colorsCount) {
    var colors=['красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый'];
    console.log('цветов: ' + colorsCount);
    for (var i = 0, min = 0, max = colors.length - 1; i < colorsCount; i++) {
        var n = randomDiap(min,max);
        var colorName = colors[n];
        console.log(colorName);
        max--;
        colors.splice(n, 1);
    }
    console.log(colors);
}

mood(7);
mood(10);