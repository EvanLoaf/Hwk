'use strict'

const body = document.body;
const form1 = document.createElement('form');
const form2 = document.createElement('form');
body.appendChild(form1);
body.appendChild(form2);
form1.setAttribute('name', 'First form');
form1.setAttribute('action', 'http://fe.it-academy.by/TestForm.php');
form1.setAttribute('novalidate', '');
form2.setAttribute('name', 'Second form');
form2.setAttribute('action', 'http://fe.it-academy.by/TestForm.php');
form2.setAttribute('novalidate', '');

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

var sitename = form1.elements.sitename;
var siteurl = form1.elements.siteurl;
var visitors = form1.elements.visitors;
var email = form1.elements.email;
var division = form1.elements.division;
var payment = form1.elements.payment;
var votes = form1.elements.votes;
var description = form1.elements.description;

function inCorrect(y) { // Использую там, где поле заполнено неверно
    var error = document.createElement('span');
    error.className = 'error';
    error.style.color = 'red';
    error.style.backgroundColor = '#111111';
    y.parentNode.appendChild(error);
}

function inCorrectRadio(y) { // то же, что и выше, но для type='radio', т.к. там не выходит
    var error = document.createElement('span'); // просто так взять parentNode
    error.className = 'error'; // потому что обращение по имени к radio возвращает массив кнопок
    error.style.color = 'red';
    error.style.backgroundColor = '#111111';
    y[0].parentNode.appendChild(error);
}

function superValidator(e) { // универсальный валидатор для текущей всех полей
    var prevError = e.target.parentNode.querySelector('.error');
    if (!!prevError) {
        prevError.remove();
    }
    // ВЕЗДЕ СНАЧАЛА ПРОВЕРКА - НА КАКОМ ЭЛ-ТЕ ФОКУС, а уже потом - само правило валидации
    if (!!e.target.value == false) { // Чтобы хоть что-то было введено в поля ввода
        let y = e.target;
        inCorrect(y);
        let error = y.parentNode.querySelector('.error');
        error.textContent = 'Введите хоть что-то!';
    }

    if (e.target == sitename && sitename.value.length > 14) { // длина назв сайта не более 14 симв
        let y = e.target;
        inCorrect(sitename);
        let error = y.parentNode.querySelector('.error');
        error.textContent = 'Имя сайта должно содержать меньше 15 символов';
    }

    if (e.target == siteurl && siteurl.value.length < 8) { // длина URL не менее 8 симв
        let y = e.target;
        inCorrect(siteurl);
        let error = y.parentNode.querySelector('.error');
        error.textContent = 'Введите существующий адрес сайта';
    }

    if (e.target == visitors && (isNaN(parseInt(visitors.value)) || parseInt(visitors.value) < 0)) {
        let y = e.target;          // количество посетителей - число, большее -1
        inCorrect(visitors);
        let error = y.parentNode.querySelector('.error');
        error.textContent = 'Введите возможное количество посетителей';
    }

    if (e.target == email && email.value.length < 6) { // длина имейла больше 5
        let y = e.target;
        inCorrect(email);
        let error = y.parentNode.querySelector('.error');
        error.textContent = 'Введите реальный адрес e-mail';
    }

    if (e.target == division && division.value == 3) { // нельзя выбрать 3-й вариант из списка
        let y = e.target;
        inCorrect(division);
        let error = y.parentNode.querySelector('.error');
        error.textContent = 'Ветка про бытовую технику удалена, выберите что-то другое';
    }

    if ((e.target == payment[0] || e.target == payment[1] || e.target == payment[2]) && payment.value == 1) {
        let y = e.target;          // отключена первая кнопка - бесплатный вариант
        inCorrectRadio(payment);
        let error = y.parentNode.querySelector('.error');
        error.textContent = 'Бесплатный вариант временно недоступен';
    }

    if (e.target == votes && !votes.checked) { // обязательно должна быть проставлена галочка
        let y = e.target;
        inCorrect(votes);
        let error = y.parentNode.querySelector('.error');
        error.textContent = 'Ну разрешите вы отзывы';
    }

    if (e.target == description && description.value.length < 30) { // минимум 30 симв
        let y = e.target;
        inCorrect(description);
        let error = y.parentNode.querySelector('.error');
        error.textContent = 'Пожалуйста, напишите более подробно!';
    }
    
}

for (var i = 0, x = form1.elements; i < x.length; i++) { // Вешаю универсальный валидатор на все
    x[i].addEventListener('change', superValidator); // элементы формы
}

function submitValidator(e) { // Валидатор, который будет использован при событии submit
    // Для формы он отдельный, т.к. в предыдущем получал активный элемент через e.target
    var errors = form1.querySelectorAll('.error');
    for (var i = 0; i < errors.length; i++) {
        errors[i].remove()
    }

    let elementsNumber = form1.elements.length;
    for (var i = 0; i < elementsNumber; i++) {
        if (!form1.elements[i].value) {
            inCorrect(form1.elements[i]);
            let error = form1.elements[i].parentNode.querySelector('.error');
            error.textContent = 'Введите хоть что-то!';
        }
    }

    if (sitename.value.length > 14) {
        inCorrect(sitename);
        let error = sitename.parentNode.querySelector('.error');
        error.textContent = 'Имя сайта должно содержать меньше 15 символов';
    }

    if (siteurl.value.length < 8) {
        inCorrect(siteurl);
        let error = siteurl.parentNode.querySelector('.error');
        error.textContent = 'Введите существующий адрес сайта';
    }

    if (isNaN(parseInt(visitors.value)) || parseInt(visitors.value) < 0) {
        inCorrect(visitors);
        let error = visitors.parentNode.querySelector('.error');
        error.textContent = 'Введите возможное количество посетителей';
    }

    if (email.value.length < 6) {
        inCorrect(email);
        let error = email.parentNode.querySelector('.error');
        error.textContent = 'Введите реальный адрес e-mail';
    }

    if (division.value == 3) {
        inCorrect(division);
        let error = division.parentNode.querySelector('.error');
        error.textContent = 'Ветка про бытовую технику удалена, выберите что-то другое';
    }

    if (payment.value == 1) {
        inCorrectRadio(payment);
        let error = payment.parentNode.querySelector('.error');
        error.textContent = 'Бесплатный вариант временно недоступен';
    }

    if (!votes.checked) {
        inCorrect(votes);
        let error = votes.parentNode.querySelector('.error');
        error.textContent = 'Ну разрешите вы отзывы';
    }

    if (e.target == description && description.value.length < 30) {
        let y = e.target;
        inCorrect(description);
        let error = y.parentNode.querySelector('.error');
        error.textContent = 'Пожалуйста, напишите более подробно!';
    }
    
    var totalErrors = form1.querySelectorAll('.error');
    if (!!totalErrors[0]) {
        e.preventDefault();
        totalErrors[0].previousSibling.focus(); // Фокус на первое поле с ошибкой, как по заданию
    }
    
}

form1.addEventListener('submit', submitValidator);















