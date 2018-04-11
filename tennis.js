'use strict'

const body = document.body;

const leftPad = document.createElement('div');
const rightPad = document.createElement('div');

const field = document.querySelector('.field');

leftPad.style.cssText = 'position: absolute; left: 0; top: 0; width: 15px; height: 120px; background-color: #01FF70;';
rightPad.style.cssText = 'position: absolute; left: 585px; top: 280px; width: 15px; height: 120px; background-color: #0074D9;';

field.appendChild(leftPad);
field.appendChild(rightPad);

function leftPadMoves(e) {
    if (parseFloat(leftPad.style.top) === 0) {
        if (e.keyCode === 17) {
            leftPad.style.top = '8px';
            return;
        } else return;
    }

    if (parseFloat(leftPad.style.top) === 280) {
        if (e.keyCode === 16) {
            leftPad.style.top = '272px';
            return;
        } else return;
    }

    if (e.keyCode === 16) {
        leftPad.style.top = parseFloat(leftPad.style.top) - 8 + 'px';
        return;
    } else if (e.keyCode === 17) {
        leftPad.style.top = parseFloat(leftPad.style.top) + 8 + 'px';
        return;
    }
}

function rightPadMoves(e) {
    if (parseFloat(rightPad.style.top) === 0) {
        if (e.keyCode === 40) {
            rightPad.style.top = '8px';
            return;
        } else return;
    }

    if (parseFloat(rightPad.style.top) === 280) {
        if (e.keyCode === 38) {
            rightPad.style.top = '272px';
            return;
        } else return;
    }

    if (e.keyCode === 38) {
        rightPad.style.top = parseFloat(rightPad.style.top) - 8 + 'px';
        return;
    } else if (e.keyCode === 40) {
        rightPad.style.top = parseFloat(rightPad.style.top) + 8 + 'px';
        return;
    }
}

function padsMovement(e) {
    if (e.keyCode === 16 || e.keyCode === 17) {
        //console.log(e.keyCode);
        leftPadMoves(e);
        return;
    }

    if (e.keyCode === 38 || e.keyCode === 40) {
        //console.log(e.keyCode);
        rightPadMoves(e);
        return;
    }

    return;
}

body.onkeydown = padsMovement;

const button = document.createElement('input');
button.setAttribute('type', 'button');
button.setAttribute('value', 'Start!');
button.style.cssText = 'position: absolute; left: 50%; top: 50%; margin: -230px 0 0 -300px; background-color: #85144b; border: none;' + 
' font-size: 18px; font-weight: bold; color: white;';
body.appendChild(button);

const ball = document.createElement('div');
ball.style.cssText = 'position: absolute; width: 40px; height: 40px; background-color: crimson; border-radius: 50%; left: 280px; top: 180px;';

var down;
var right;
var tickV;
var tickH;
var tick;
var timer1;
var timer2;
var counter1 = 0;
var counter2 = 0;

function ballMoveVertical(tick) {
    if (down) {
        ball.style.top = parseFloat(ball.style.top) + tick + 'px';
    } 
    else {
        ball.style.top = parseFloat(ball.style.top) - tick + 'px';
    }

    if (parseFloat(ball.style.top) === 0 || parseFloat(ball.style.top) === 360) {
        (!!down) ? down = false : down = true;
        //setInterval('ballMoveVertical(tickV)', interval);
    }
}

function ballMoveHorizontal(tick) {
    if (right) {
        ball.style.left = parseFloat(ball.style.left) + tick + 'px';
    } 
    else {
        ball.style.left = parseFloat(ball.style.left) - tick + 'px';
    }

    //console.log('top: ' + ball.style.top);
    //console.log('left: ' + ball.style.left);

    if ((parseFloat(ball.style.left) === 15) && (((parseFloat(ball.style.top) + 20)) >= parseFloat(leftPad.style.top)) && (((parseFloat(ball.style.top) + 20)) <= (parseFloat(leftPad.style.top) + 120))) {
        (!!right) ? right = false : right = true;
        
    }
    if ((parseFloat(ball.style.left) === 545) && (((parseFloat(ball.style.top) + 20)) >= parseFloat(rightPad.style.top)) && (((parseFloat(ball.style.top) + 20)) <= (parseFloat(rightPad.style.top) + 120))) {
        (!!right) ? right = false : right = true;
        
    }

    if (parseFloat(ball.style.left) === 0) {
        clear();
        counter2++;
        score.textContent = `${counter1} : ${counter2}`;
    }
    if (parseFloat(ball.style.left) === 560) {
        clear();
        counter1++;
        score.textContent = `${counter1} : ${counter2}`;
    }
}

function clear() {
    clearInterval(timer1);
    clearInterval(timer2);
}

function start(e) {
    if (timer1 || timer2) {
        clearInterval(timer1);
        clearInterval(timer2);
        timer1 = timer2 = 0;
    }
    ball.style.left = '280px';
    ball.style.top = '180px';
    field.appendChild(ball);
    down = !!(Math.floor(Math.random()*2));
    right = !!(Math.floor(Math.random()*2));
    //const interval = 5;
    //tickV = Math.floor(Math.random()*4) + 1;
    //tickH = Math.floor(Math.random()*4) + 1;
    tick = 1;
    const interval1 = Math.floor(Math.random()*9) + 4;
    const interval2 = Math.floor(Math.random()*9) + 4;
    timer1 = setInterval('ballMoveVertical(tick)', interval1);
    timer2 = setInterval('ballMoveHorizontal(tick)', interval2);
    




}

button.onclick = start;

const score = document.createElement('div');
score.style.cssText = 'position: absolute; left: 50%; top: 50%; width: 150px; height: 40px; background-color: #B10DC9; color: #001f3f;' + 
'text-align: center; font-size: 36px; line-height: 40px; font-weight: bold; margin: -250px 0 0 -75px;';
score.textContent = `${counter1} : ${counter2}`;
body.appendChild(score);







/*function asd(e) {
    console.log(e.keyCode);
    console.log(e.target)
    console.log(e.currentTarget)
}

document.body.onkeydown = asd;*/

