'use strict'

class hashStorage {
    constructor() {
        this.lib = new Object;
    }
    addValue(key, value) {
        if (key in this.lib) {
            return;
        }
        else this.lib[key] = value;
    }
    getValue(key) {
        return this.lib[key];
    }
    deleteValue(key) {
        if (key in this.lib) {
            delete this.lib[key];
            return true;
        }
        else return false;
    }
    getKeys() {
        let allKeys = [];
        for (var key in this.lib) {
            allKeys.push(key);
        }
        return allKeys.join(', ');
    }

}

var drinkStorage = new hashStorage();

drinkStorage.addValue('Вискарик с колой', {alc: true, 
rec: 'Берем вискарик, берем колу, все в пивную кружку, лед по вкусу', price: '15$'});
    
drinkStorage.addValue('Белый минчанин', {alc: false, 
rec: 'Кефирчик 3,6% наутро', price: 'priceless'});

console.log(drinkStorage.lib);

var info = function() {
    let name = prompt('Drink? What drink!?');
    if (!name) {
        console.log('Ну введите же какое-нибудь название напитка!');
        return;
    }
    let keys = drinkStorage.getKeys().search(name);
    if (keys > -1) {
        console.log('У нас ' + name + ' уже есть, давай что-нибудь новенькое!');
        return;
    }
    let alcohol = confirm('Is ' + name + ' an alcoholic drink?');
    let recipe = prompt('So, how to make ' + name + ' ?');
    let pricePerLiter = prompt('How much does it cost to make 1 Liter of it?');
    drinkStorage.addValue(name, {alc: alcohol, rec: recipe, price: pricePerLiter});
}

var getDrinkInfo = function() {
    let name = prompt('What drink are you curious about?');
    let keys = drinkStorage.getKeys().search(name);
    //console.log(keys);
    if (keys > -1) {
        if (drinkStorage.getValue(name)['alc']) {
            var alcohol = 'да';
        }
        else {
            var alcohol = 'нет';
        }
        let infoLog = `Напиток ${name}
алкогольный: ${alcohol}
рецепт приготовления: ${drinkStorage.getValue(name)['rec']}
цена приготовления 1 литра: ${drinkStorage.getValue(name)['price']}
        `;
        console.log(infoLog);
    }
    else console.log(name + '? Мы тут такой дряни не знаем, да и не пьем');
}

var deleteDrink = function() {
    let name = prompt('What drink do you wanna get rid of?');
    let keys = drinkStorage.getKeys().search(name);
    if (keys > -1) {
        drinkStorage.deleteValue(name);
        console.log('Хорошо, выбрасываем запасы ' + name);
    }
    else console.log(name + '? Не слышал о таком, но нужно будет попробовать');
}

var drinksList = function() {
    if (Object.keys(drinkStorage.lib).length > 0) {
        var allDrinks = drinkStorage.getKeys();
        console.log('Вот все топливо, что есть в запасе: ' + allDrinks);
    }
    else console.log('Мы не пьем!');
}

