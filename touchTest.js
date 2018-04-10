'use strict'

const body = document.body;
const img = document.querySelector('img');

var touchStart = {};
var touchMove = {};

function start(e) {
    if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch && e.target != e.currentTarget) {
        if (e.touches.length > 1) {
            touchStart.x1 = e.touches[0].screenX;
            touchStart.y1 = e.touches[0].screenY;
            touchStart.x2 = e.touches[1].screenX;
            touchStart.y2 = e.touches[1].screenY;
            console.log(e);
        }
    }
}

function move(e) {
    if (('ontouchmove' in window) || window.DocumentTouch && document instanceof DocumentTouch && e.target != e.currentTarget) {
        if (e.touches.length > 1) {
            touchMove.x1 = e.touches[0].screenX;
            touchMove.y1 = e.touches[0].screenY;
            touchMove.x2 = e.touches[1].screenX;
            touchMove.y2 = e.touches[1].screenY;
            console.log(touchMove);
            let touchSt = Math.abs((touchStart.x1 + touchStart.y1) - (touchStart.x2 + touchStart.y2));
            let touchMo = Math.abs((touchMove.x1 + touchMove.y1) - (touchMove.x2 + touchMove.y2));
            //console.log(touchSt);
            //console.log(touchMo);
            if (touchSt < touchMo) {
                console.log(touchMove.x1 + touchMove.y1);
                console.log(touchMove.x2 + touchMove.y2);
                console.log(touchMo - touchSt);
                img.style.transform = 'scale(' + (1 + (touchMo - touchSt) / 100) + ')';
            }
            if (touchSt > touchMo) {
                console.log(touchMo - touchSt);
                img.style.transform = 'scale(' + (1 - (touchMo - touchSt) / 100) + ')';
            }
        }
    }
}

// Почему в какой-то момент перестают изменяится TouchMove? Пределы картинки??



body.addEventListener('touchstart', start);
body.addEventListener('touchmove', move);



