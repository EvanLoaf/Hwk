'use strict'

/*function fibonacchi(n) {
    if (n < 2) {
        return n;
    }
    else return fibonacchi(n-1) + fibonacchi(n-2);
}

console.log(fibonacchi(3));
console.log(fibonacchi(5));
console.log(fibonacchi(7));
console.log(fibonacchi(10));
console.log(fibonacchi(30));
console.log(fibonacchi(40));*/
//console.log(fibonacchi(50)); // Тут уже считает около 30-60сек

var fibCalc = [0, 1];
function betterFib(n) {
    if (n in fibCalc) {
        return fibCalc[n];
    }
    else {
        fibCalc[n] = betterFib(n-1) + betterFib(n-2);
        return fibCalc[n];
    }
}

console.log(betterFib(10));
console.log(betterFib(20));
console.log(betterFib(30));
console.log(betterFib(40));
console.log(betterFib(50));
console.log(betterFib(60));
console.log(betterFib(80));
console.log(betterFib(100));
console.log(betterFib(200)); // считает моментально
console.log(betterFib(400));
console.log(betterFib(1000)); // попрежнему моментально считает
console.log(betterFib(10000)); // Infinity??