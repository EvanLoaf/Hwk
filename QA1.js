'use strict';

var storage = localStorage['saverino'];
if (storage) {
    var resultInStorage = JSON.parse(storage);
    console.log(resultInStorage);
    var storedResult = JSON.parse(localStorage['saverinohtml']);
    document.querySelector('.result-container').innerHTML = '<div></div>';
    document.querySelector('.result-container > div').innerHTML = storedResult+'<br><br><br> STORED RESULT';
    throw 'What about that localStorage';
}


function askName() {
   var b = function f() { var q = prompt('What is your name?');
    
        if (q.length > 1 && q.length < 30 && isNaN(Number(q))) {
            return (q+' ');
        }
        else b();
    }
    
    return b();
    
}

/*function askName() {
    var b = function f() { var q = prompt('What is your name?');
     
         if (q.length < 2 || q.length > 29 || isFinite(Number(q))) {
             b();
         }
         else return (q+' ');
     }
     
     return b();
     
 }*/

var name = askName();

function askSurname() {
    var q = prompt('What is your surname?');
    var a = (function() {
        if (q.length > 1 && q.length < 30 && isNaN(Number(q))) {
            return (q+' ');
        }
        else askSurname();
    })();
    return a;
}

var surname = askSurname();

function askMiddleName() {
    var q = prompt('What is your middle name?');
    var a = (function() {
        if (q.length > 1 && q.length < 30 && isNaN(Number(q))) {
            return (q+' ');
        }
        else askMiddleName();
    })();
    return a;
}

var middleName = askMiddleName();

function askAge() {
    var q = prompt('How old are you?');
    var a = (function() {
        if (isFinite(Number(q)) && q < 100 && q > 2) {
            return q;
        }  
        else askAge();
    })();
    return a;
}

var age = askAge();
var ageYears = parseInt(age);
var ageDays = parseInt(age*365.25);
var ageInFive = ageYears+5;

var pension = function() {
    if (ageYears > 59) return 'Yes';
    else return 'No';
} 
var retired = pension();


function askGender() {
    var q = confirm('Are you male?');
    var f = (function() {
        if (!!q) {
            return 'Male';
        }
        else return 'Female';
    })();
    return f;
}

var gender = askGender();

var result = 'Your full name: '+name+middleName+surname+
'\nYour age in years: '+ageYears+'\nYour age in days: '+ageDays+
'\nHow old you will be in 5 years: '+ageInFive
+'\nYour gender: '+gender+'\nAre you retired: '+retired;

var resulthtml = 'Your full name: '+name+middleName+surname+
'<br>Your age in years: '+ageYears+'<br>Your age in days: '+ageDays+
'<br>How old you will be in 5 years: '+ageInFive
+'<br>Your gender: '+gender+'<br>Are you retired: '+retired;

console.log(result);

document.querySelector('.result-container').innerHTML = '<div></div>';
document.querySelector('.result-container > div').innerHTML = resulthtml;

$(window).on('unload', function() {
    localStorage['saverino'] = JSON.stringify(result);
    localStorage['saverinohtml'] = JSON.stringify(resulthtml);
  });
  






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