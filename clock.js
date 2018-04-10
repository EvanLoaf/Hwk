'use strict'

const body = document.body;
body.style.margin = 0;
body.style.height = '100vh';

const clockOuter = document.createElement('div');
clockOuter.style.cssText = 'background-color: coral; border-radius: 50%; width: 250px; height: 250px; position: absolute;';
clockOuter.style.cssText += ' left: 50%; top: 50%; margin: -125px 0 0 -125px;';

body.appendChild(clockOuter);

for (var i = 12; i > 0; i--) {
    window['hour' + (i + 1)] = document.createElement('div');
    let div = window['hour' + (i + 1)];
    div.style.cssText = 
    'background-color: #3D9970; border-radius: 50%; width: 32px; height: 32px; position: absolute; left: 50%; top: 50%;' +
    'margin: -16px 0 0 -16px;';
    let span = document.createElement('span');
    span.style.cssText = 'text-align: center; font-family: Arial, sans-serif; color: #DDDDDD; line-height: 32px; display: block; margin: 0 auto;';
    span.textContent = i;
    clockOuter.appendChild(div);
    div.appendChild(span);
    let deg = 30 * (i - 12);
    div.style.cssText += 'transform-origin: 16px 116px; transform: translateY(-100px) rotate(' + deg + 'deg)';
    span.style.cssText += 'transform: rotate(' + (-deg) + 'deg);';
}

const timeSpan = document.createElement('span');
timeSpan.style.cssText = 'background-color: #DDDDDD; color: crimson;'
+ ' position: absolute; text-align: center; width: 58px; left: 96px; top: 60px';
clockOuter.appendChild(timeSpan);

const secondHand = document.createElement('div');
const minuteHand = document.createElement('div');
const hourHand = document.createElement('div');
secondHand.classList.add('clockHands');
minuteHand.classList.add('clockHands');
hourHand.classList.add('clockHands');
clockOuter.appendChild(secondHand);
clockOuter.appendChild(minuteHand);
clockOuter.appendChild(hourHand);
const clockHands = document.querySelectorAll('.clockHands');
for (var i = 0; i < clockHands.length; i++) {
    clockHands[i].style.cssText = 'background-color: #111111; position: absolute; left: 50%;';
}
clockHands[0].style.cssText += ' width: 2px; margin-left: -1px; height: 125px; top: 15px; opacity: 0.8;';
clockHands[1].style.cssText += ' width: 4px; margin-left: -2px; height: 105px; top: 35px; border-radius: 5px; opacity: 0.8;';
clockHands[2].style.cssText += ' width: 6px; margin-left: -3px; height: 75px; top: 65px; border-radius: 10px; opacity: 0.8;';


// TIME
const timeFunc = function() {
    let currTime = new Date();
    let theTime = currTime.toTimeString().slice(0,8);
    timeSpan.textContent = theTime;
    // clock hands spin
    const fullHrSpin = 60 * 60 * 12;
    const fullMinSpin = fullHrSpin / 12;
    const fullSecSpin = fullMinSpin / 60;
    let secSpin = currTime.getSeconds() * 360 / fullSecSpin;
    clockHands[0].style.cssText += (' transform-origin: 1px 110px; transform: rotate(' + secSpin +'deg)');
    let minSpin = ((currTime.getMinutes() * 60) + currTime.getSeconds()) * 360 / fullMinSpin;
    clockHands[1].style.cssText += (' transform-origin: 2px 90px; transform: rotate(' + minSpin +'deg)');
    let hrSpin = (((currTime.getHours() * 60) + currTime.getMinutes()) * 360 / (fullHrSpin / 60)) % 360;
    clockHands[2].style.cssText += (' transform-origin: 3px 60px; transform: rotate(' + hrSpin +'deg)');


    // function execution every second
    setInterval(timeFunc, 1000);
};

window.onDOMContentLoaded = timeFunc();