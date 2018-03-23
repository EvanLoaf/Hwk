'use strict';

var storage = localStorage['RESULTHTML'];

if (storage) {
    var result = JSON.parse(localStorage.getItem('RESULTHTML'));
    console.log(JSON.parse(localStorage.getItem('RESULT')));
    document.querySelector('.result-container').innerHTML = '<div></div>';
    document.querySelector('.result-container > div').innerHTML = result+'<br><br><br> ANSWERS FROM STORAGE';
    throw 'Got your answers from storage';
}

function askName() {
    let q = prompt('What is your name?');
    let a = () => (q.length > 1 && q.length < 30 && isNaN(Number(q))) ? (q+' ') : askName();
    return a();
}

const NAME = askName();

function askSurname() {
    let q = prompt('What is your surname?');
    let a = () => (q.length > 1 && q.length < 30 && isNaN(Number(q))) ? (q+' ') : askSurname();
    return a();
}

const SURNAME = askSurname();

function askMiddleName() {
    let q = prompt('What is your middle name?');
    let a = () => (q.length > 1 && q.length < 30 && isNaN(Number(q))) ? q : askMiddleName();
    return a();
}

const MIDDLENAME = askMiddleName();

function askAge() {
    let q = prompt('How old are you?');
    let a = () => (isFinite(Number(q)) && q < 100 && q > 2) ? q : askAge();
    return a();
}

var age = askAge();
const AGEYEARS = parseInt(age);
const AGEDAYS = parseInt((age)*365.25);
const AGEINFIVE = AGEYEARS+5;

var pension = () => (AGEYEARS > 59) ? 'Yes' : 'No';
const RETIRED = pension();


function askGender() {
    let q = confirm('Are you male?');
    let f = () => q ? 'Male' : 'Female';
    return f();
}

const GENDER = askGender();

const RESULT = `
Your full name: ${NAME} ${MIDDLENAME} ${SURNAME}
Your age in years: ${AGEYEARS}
Your age in days: ${AGEDAYS}
How old you will be in 5 years: ${AGEINFIVE}
Your gender: ${GENDER}
Are you retired: ${RETIRED}`;

const RESULTHTML = `
Your full name: ${NAME} ${MIDDLENAME} ${SURNAME} <br>
Your age in years: ${AGEYEARS} <br>
Your age in days: ${AGEDAYS} <br>
How old you will be in 5 years: ${AGEINFIVE} <br>
Your gender: ${GENDER} <br>
Are you retired: ${RETIRED}`;

console.log(RESULT);

document.querySelector('.result-container').innerHTML = '<div></div>';
document.querySelector('.result-container > div').innerHTML = RESULTHTML;

localStorage.setItem( 'RESULT', JSON.stringify(RESULT));
localStorage.setItem( 'RESULTHTML', JSON.stringify(RESULTHTML));





/*var x = prompt('gender');
switch (x.charAt(0)) {
    case 'M': alert('abc'); break;
    case 'm': alert('abc'); break;
    case 'М': alert('abc'); break;
    case 'м': alert('abc'); break;
    case 'F': alert('fgh'); break;
    case 'f': alert('fgh'); break;
    case 'Ж': alert('fgh'); break;
    case 'ж': alert('fgh'); break;
    default: alert('zzzzzzzzz');
}*/