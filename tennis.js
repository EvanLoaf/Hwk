'use strict'

const body = document.body;

const leftPad = document.createElement('div');
const rightPad = document.createElement('div');

const field = document.querySelector('.field');

var movementControlMemory = {};
var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame;

leftPad.style.cssText = 'position: absolute; left: 0; top: 0; width: 15px; height: 120px; background-color: #01FF70;';
rightPad.style.cssText = 'position: absolute; left: 585px; top: 280px; width: 15px; height: 120px; background-color: #0074D9;';

field.appendChild(leftPad);
field.appendChild(rightPad);

function leftPadMoves(e) {
    if (parseFloat(leftPad.style.top) === 0) {
        if (movementControlMemory[17]) {
            leftPad.style.top = '4px';
            return;
        } else return;
    }

    if (parseFloat(leftPad.style.top) === 280) {
        if (movementControlMemory[16]) {
            leftPad.style.top = '276px';
            return;
        } else return;
    }

    if (movementControlMemory[16]) {
        leftPad.style.top = parseFloat(leftPad.style.top) - 4 + 'px';
        return;
    } else if (movementControlMemory[17]) {
        leftPad.style.top = parseFloat(leftPad.style.top) + 4 + 'px';
        return;
    }
}

function rightPadMoves(e) {
    if (parseFloat(rightPad.style.top) === 0) {
        if (movementControlMemory[40]) {
            rightPad.style.top = '4px';
            return;
        } else return;
    }

    if (parseFloat(rightPad.style.top) === 280) {
        if (movementControlMemory[38]) {
            rightPad.style.top = '276px';
            return;
        } else return;
    }

    if (movementControlMemory[38]) {
        rightPad.style.top = parseFloat(rightPad.style.top) - 4 + 'px';
        return;
    } else if (movementControlMemory[40]) {
        rightPad.style.top = parseFloat(rightPad.style.top) + 4 + 'px';
        return;
    }
}

function padsMovement(e) {
    /*if ((e.keyCode === 16 || e.keyCode === 17) && (e.keyCode === 38 || e.keyCode === 40)) {
        console.log(e.keyCode);
        leftPadMoves(e);
        rightPadMoves(e);
        return;
    }*/

    if (movementControlMemory[16] || movementControlMemory[17]) {
        console.log(e.keyCode);
        leftPadMoves(e);
    }

    if (movementControlMemory[38] || movementControlMemory[40]) {
        console.log(e.keyCode);
        rightPadMoves(e);
    }



    movesId = requestAnimationFrame(padsMovement);
    console.log('lul');
}

var movesId = null;

function keyDown(e) {
    if (e.keyCode === 38 || e.keyCode === 40) {
        if (movementControlMemory[38] === true || movementControlMemory[40] === true) {
            movementControlMemory[38] = null;
            movementControlMemory[40] = null;
        }
    }

    if (e.keyCode === 16 || e.keyCode === 17) {
        if (movementControlMemory[16] === true || movementControlMemory[17] === true) {
            movementControlMemory[16] = null;
            movementControlMemory[17] = null;
        }
    }
    
    movementControlMemory[e.keyCode] = true;

    if (!movesId && (movementControlMemory[16] || movementControlMemory[17] || movementControlMemory[38] || movementControlMemory[40])) {
        padsMovement(e);
    }
    
}

function keyUp(e) {
    movementControlMemory[e.keyCode] = null;
    console.log(e);
    if (!movementControlMemory[16] && !movementControlMemory[17] && !movementControlMemory[38] &&!movementControlMemory[40]) {
        cancelAnimationFrame(movesId);
        movesId = null;
    }
    
}

body.onkeydown = keyDown;
body.onkeyup = keyUp;

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
//var tickV;
//var tickH;
var tick;
var timer1;
var timer2;
var counter1 = 0;
var counter2 = 0;
var posLeft = 280;
var posTop = 180;
var reqId = null;

function ballMoveVertical() {
    if (down) {
        posTop += tick;
    } 
    else {
        posTop -= tick;
    }
    console.log('vvv');

    if (posTop === 0 || posTop === 360) {
        (!!down) ? down = false : down = true;
        //setInterval('ballMoveVertical(tickV)', interval);
    }

    //timer1 = requestAnimationFrame(ballMoveVertical);
}

function ballMoveHorizontal() {
    if (right) {
        posLeft += tick;
    } 
    else {
        posLeft -= tick;
    }
    console.log('hhh');
    //console.log('top: ' + ball.style.top);
    //console.log('left: ' + ball.style.left);

    // def all posTop + 20
    if ((posLeft === 15) && ((((posTop + 15) >= parseFloat(leftPad.style.top)) && (down) && (posTop <= parseFloat(leftPad.style.top) + 60)) || (((posTop + 30) <= (parseFloat(leftPad.style.top) + 120)) && (!down) && (posTop > parseFloat(leftPad.style.top) + 60)))) {
        (!!right) ? right = false : right = true;
        console.log('right-left-edge');
        
    }
    if ((posLeft === 545) && (((((posTop + 15)) >= parseFloat(rightPad.style.top)) && (down) && (posTop <= parseFloat(rightPad.style.top) + 60)) || (((posTop + 30) <= (parseFloat(rightPad.style.top) + 120)) && (!down) && (posTop > parseFloat(rightPad.style.top) + 60)))) {
        (!!right) ? right = false : right = true;
        console.log('right-right-edge');
        
    }

    //Conflict string 186 vs 202 double right-change, as a res - ball goes on to score, instead of changing dir
    //other than that it should be OK
    //i mean there might be other conflicts betw str 184-193 n str 200-209 and thats it
    
    //add esli down !down
    if ((posLeft === 15) && (((((posTop + 20)) >= parseFloat(leftPad.style.top)) && (!down) && (posTop <= parseFloat(leftPad.style.top) + 60)) || (((posTop + 20) <= (parseFloat(leftPad.style.top) + 120)) && (down) && (posTop > parseFloat(leftPad.style.top) + 60)))) {
        (!!right) ? right = false : right = true;
        console.log('right-left-norm');
        
    }
    if ((posLeft === 545) && (((((posTop + 20)) >= parseFloat(rightPad.style.top)) && (!down) && (posTop <= parseFloat(rightPad.style.top) + 60)) || (((posTop + 20) <= (parseFloat(rightPad.style.top) + 120)) && (down) && (posTop > parseFloat(rightPad.style.top) + 60)))) {
        (!!right) ? right = false : right = true;
        console.log('right-right-norm');
        
    }

    //Изменение __верт__ and horiz ориентации при ударе о край пада
    if ((posLeft === 15) && ((((posTop + 40) >= parseFloat(leftPad.style.top)) && (((posTop + 15)) < parseFloat(leftPad.style.top)) && (down) && (posTop <= parseFloat(leftPad.style.top) + 60)) || (((posTop + 0) <= (parseFloat(leftPad.style.top) + 120)) && (((posTop + 30) > (parseFloat(leftPad.style.top) + 120)) && (!down) && (posTop > parseFloat(leftPad.style.top) + 60))))) {
        (!!right) ? right = false : right = true;
        (!!down) ? down = false : down = true;
        console.log('down-15');
    }
    if ((posLeft === 545) && ((((posTop + 40) >= parseFloat(rightPad.style.top)) && (((posTop + 15)) < parseFloat(rightPad.style.top)) && (down) && (posTop <= parseFloat(rightPad.style.top) + 60)) || (((posTop + 0) <= (parseFloat(rightPad.style.top) + 120)) && (((posTop + 30) > (parseFloat(rightPad.style.top) + 120)) && (!down) && (posTop > parseFloat(rightPad.style.top) + 60))))) {
        (!!right) ? right = false : right = true;
        (!!down) ? down = false : down = true;
        console.log('down-545');
    }


    if (posLeft === 0) {
        ball.style.left = '0px';
        ball.style.top = posTop + 'px'; 
        clear();
        counter2++;
        score.textContent = `${counter1} : ${counter2}`;
    }
    if (posLeft === 560) {
        ball.style.left = '560px';
        ball.style.top = posTop + 'px';
        clear();
        counter1++;
        score.textContent = `${counter1} : ${counter2}`;
    }

    //timer2 = requestAnimationFrame(ballMoveHorizontal);
}

function updateCoord() {
    ball.style.left = posLeft + 'px';
    ball.style.top = posTop + 'px';
    console.log('update');
    console.log(ball.style.left);
    console.log(posLeft);
    reqId = requestAnimationFrame(updateCoord);
}

function clear() {
    clearInterval(timer1);
    clearInterval(timer2);
    cancelAnimationFrame(reqId);
    posLeft = 280;
    posTop = 180;
    console.log('cancel');
    /*body.onkeydown = null;
    cancelAnimationFrame(movesId);
    movesId = null;*/
}

function start(e) {
    if (timer1 || timer2) {
        //clearInterval(timer1);
        //clearInterval(timer2);
        //timer1 = timer2 = 0;
        clear();
    }
    ball.style.left = 280;
    ball.style.top = 180;
    field.appendChild(ball);
    down = !!(Math.floor(Math.random()*2));
    right = !!(Math.floor(Math.random()*2));
    //const interval = 5;
    //tickV = Math.floor(Math.random()*4) + 1;
    //tickH = Math.floor(Math.random()*4) + 1;
    tick = 1;
    const interval1 = Math.floor(Math.random()*4) + 2;
    const interval2 = Math.floor(Math.random()*4) + 2;
    timer1 = setInterval('ballMoveVertical(tick)', interval1);
    timer2 = setInterval('ballMoveHorizontal(tick)', interval2);
    //ballMoveVertical(tickV);
    //ballMoveHorizontal(tickH);
    updateCoord();




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

