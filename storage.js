'use strict'

class hashStorage {
    constructor() {
        this.lib = {};
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
recipe: 'Берем вискарик, берем колу, все в пивную кружку, лед по вкусу', pricePerLiter: '15$'});

drinkStorage.addValue('Белый минчанин', {alc: false, 
recipe: 'Кефирчик 3,6% наутро', pricePerLiter: 'priceless'});

//drinkStorage.addValue('', {alc: '', recipe: '', pricePerLiter: '$'});

//drinkStorage.addValue('', {alc: '', recipe: '', pricePerLiter: '$'});

//drinkStorage.addValue('', {alc: '', recipe: '', pricePerLiter: '$'});



//drinkStorage.addValue('', {alc: '', recipe: '', pricePerLiter: '$'});


/*
drinkStorage.addValue('qwe', 'rty');
console.log(drinkStorage.getValue('qwe'));
console.log(drinkStorage.getKeys());


console.log(drinkStorage.lib);


console.log(drinkStorage.deleteValue('qwe'));
console.log(drinkStorage.lib);


drinkStorage.addValue('qwe1', 'rty1');
drinkStorage.addValue('qwe2', 'rty2');
console.log(drinkStorage.getValue('qwe2'));
console.log(drinkStorage.getKeys());
console.log(drinkStorage.deleteValue('qwe1'));
console.log(drinkStorage.lib);
*/

/*class drinkStorage extends hashStorage {
    constructor(key, value) {
        super(key, value);
    }
    addValue(key, value) {
        super.addValue(key, value);
    }
    getValue(key) {
        super.getValue(key);
    }
    deletaValue(key) {
        super.deleteValue(key);
    }
    getKeys() {
        super.getKeys();
    }
}*/

