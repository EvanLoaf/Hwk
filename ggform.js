'use strict'

const body = document.body;
const form1 = document.createElement('form');
const form2 = document.createElement('form');
body.appendChild(form1);
body.appendChild(form2);
form1.setAttribute('name', 'First form');
form1.setAttribute('action', 'http://fe.it-academy.by/TestForm.php');
form2.setAttribute('name', 'Second form');
form2.setAttribute('action', 'http://fe.it-academy.by/TestForm.php');

function formBuilder(form, json) {
    for (var i = 0; i < json.length; i++) {
        var div = document.createElement('div');
        form.appendChild(div);
        if (json[i]['kind'] !== 'submit') {
            var fieldLabel = document.createElement('label');
            fieldLabel.textContent = json[i]['label'];
            div.appendChild(fieldLabel);
        }
        if (json[i]['kind'] === 'longtext') {
            var element = document.createElement('input');
            element.setAttribute('type', 'text');
            div.appendChild(element);
        }
        if (json[i]['kind'] === 'number') {
            var element = document.createElement('input');
            element.setAttribute('type', 'number');
            div.appendChild(element);
        }
        if (json[i]['kind'] === 'shorttext') {
            var element = document.createElement('input');
            element.setAttribute('type', 'email');
            div.appendChild(element);
        }
        if (json[i]['kind'] === 'combo') {
            var element = document.createElement('select');
            element.setAttribute('size', 1);
            div.appendChild(element);
            for (var j = 0, x = Object.keys(json[i]['variants']).length; j < x; j++) {
                let option = document.createElement('option');
                option.textContent = json[i]['variants'][j]['text'];
                option.value = j + 1;
                element.appendChild(option);
            }
        }
        if (json[i]['kind'] === 'radio') {
            for (var j = 0, x = Object.keys(json[i]['variants']).length; j < x; j++) {
                var element = document.createElement('input');
                element.setAttribute('type', 'radio');
                element.setAttribute('name', json[i]['name']);
                //element.textContent = json[i]['variants'][j]['text'];
                element.value = j + 1;
                div.appendChild(element);
                div.innerHTML += json[i]['variants'][j]['text']; // Пришлось таким воспользоваться
            }
        }
        if (json[i]['kind'] === 'check') {
            var element = document.createElement('input');
            element.setAttribute('type', 'checkbox');
            element.value = json[i]['name'];
            div.appendChild(element);
        }
        if (json[i]['kind'] === 'memo') {
            var element = document.createElement('textarea');
            element.setAttribute('placeholder', 'A random piece of text');
            div.appendChild(element);
        }
        if (json[i]['kind'] === 'submit') {
            var element = document.createElement('input');
            element.setAttribute('type', 'submit');
            element.value = json[i]['label'];
            div.appendChild(element);
        }


        if (json[i]['kind'] !== 'radio') {
            element.setAttribute('name', json[i]['name']);
        }
    }
}

var firstForm =
[
  {label:'Название сайта:',kind:'longtext',name:'sitename'},
  {label:'URL сайта:',kind:'longtext',name:'siteurl'},
  {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
  {label:'E-mail для связи:',kind:'shorttext',name:'email'},
  {label:'Рубрика каталога:',kind:'combo',name:'division',
    variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
  {label:'Размещение:',kind:'radio',name:'payment',
    variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
  {label:'Разрешить отзывы:',kind:'check',name:'votes'},
  {label:'Описание сайта:',kind:'memo',name:'description'},
  {label:'Опубликовать:',kind:'submit'},
];

var secondForm =
[
  {label:'Фамилия:',kind:'longtext',name:'lastname'},
  {label:'Имя:',kind:'longtext',name:'firstname'},
  {label:'Отчество:',kind:'longtext',name:'secondname'},
  {label:'Возраст:',kind:'number',name:'age'},
  {label:'Зарегистрироваться:',kind:'submit'},
];




formBuilder(form1, firstForm);
var space = document.createElement('div');
space.setAttribute('style', 'height: 100px');
body.insertBefore(space, form2);
formBuilder(form2, secondForm);

