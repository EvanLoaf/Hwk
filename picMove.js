'use strict'

const images = document.querySelectorAll('img');

const body = document.body;

for (var i = 0; i < images.length; i++) {
    images[i].style.position = 'absolute';
    images[i].style.left = 100 * i + 'px';
    images[i].style.top = 100 * i + 'px';
    images[i].style.zIndex = 0;
    body.addEventListener('mousedown', handleMouseDown);
    body.addEventListener('mousemove', handleMouseMove);
    body.addEventListener('mouseup', handleMouseUp);
    body.addEventListener('mouseout', handleMouseOut);
    body.addEventListener('mouseover', handleMouseOver);
}

let dragObj = null;
let objectX, objectY, mouseX, mouseY;

function handleMouseDown(e) {
    if (e.currentTarget !== e.target) {
        e.preventDefault();
        console.log('down');
        dragObj = e.target;
        mouseX = e.clientX;
        mouseY = e.clientY;
        const rect = dragObj.getBoundingClientRect();
        objectX = rect.x;
        objectY = rect.y;
        e.target.style.zIndex = 1;
    }
}

function handleMouseMove(e) {
    if (dragObj) {
        console.log('move');
        dragObj.style.left = objectX - (mouseX - e.clientX) + 'px';
        dragObj.style.top = objectY - (mouseY - e.clientY) + 'px';
    }
}

function handleMouseUp(e) {
    if (e.currentTarget !== e.target) {
        console.log('up');
        e.target.style.zIndex = 0;
        let reserve = dragObj;
        dragObj.parentNode.removeChild(dragObj);
        body.appendChild(reserve);
        dragObj = null;
        mouseX = null;
        mouseY = null;
        objectX = null;
        objectY = null;
    }
}

function handleMouseOut(e) {
    if (e.currentTarget !== e.target) {
        e.target.style.cursor = 'default';
        console.log('out');
        console.log('Please come back to ' + e.target.title);
    }
}

function handleMouseOver(e) {
    if (e.currentTarget !== e.target) {
        e.target.style.cursor = 'pointer';
    }
}

