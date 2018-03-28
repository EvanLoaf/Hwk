'use strict'

var items = document.childNodes;
var space = '';
var sp = '  ';
var structure = function(x, y) {
    for (var i = 0, n = x.length; i < n; i++) {
        if (x[i].nodeType === 1) {
            console.log(y + x[i].tagName);
            structure(x[i].childNodes, y+sp);
        }
    }
}
structure(items, space);