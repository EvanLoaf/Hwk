class Person {
    
    constructor(name, age) {    // Тут они задаются и эти св-ва являются собственными
        this.name = name;
        this.age = age;
    }

    setBestFriend(person) {  // Задается всему прототипу и потом унаследуется
        if (this === person) return;
        if (person && this.bestFriend != person) {    // this.bestFriend = person; person.bestFriend = this;
            this.bestFriend = person;
            this.bestFriend.setBestFriend(this);
        }
    }

    whoIsMyBestFriend() {  // Задается всему прототипу и потом унаследуется
        console.log(this.name + ' > ' + (this.bestFriend && this.bestFriend.name || 'none'));
    }
}


class Man extends Person {
    static get Gender() { return 'Male' };
    constructor(name, age) {
        super(name, age);
    }
    setBestFriend(person) {
        super.setBestFriend(person);
    }
    whoIsMyBestFriend() {
        super.whoIsMyBestFriend();
    }
    getMarried(person) {
        if (this.constructor.prototype === person.constructor.prototype) {
            return 1;
        }
        if ( (person && this.wife != person) && (person && this.husband != person) ) {
            if (this.constructor === Man) {
                this.wife = person;
                this.wife.getMarried(this);
            }
            else if (this.constructor === Woman) {
                this.husband = person;
                this.husband.getMarried(this);
            }
        }
    }
}

class Woman extends Person {
    static get Gender() { return 'Female' };
    constructor(name, age) {
        super(name, age);
    }
    setBestFriend(person) {
        super.setBestFriend(person);
    }
    whoIsMyBestFriend() {
        super.whoIsMyBestFriend();
    }
    getMarried(person) {
        if (this.constructor.prototype === person.constructor.prototype) {
            return 1;
        }
        if ( (person && this.wife != person) && (person && this.husband != person) ) {
            if (this.constructor === Man) {
                this.wife = person;
                this.wife.getMarried(this);
            }
            else if (this.constructor === Woman) {
                this.husband = person;
                this.husband.getMarried(this);
            }
        }
    }
}


var vasiliy = new Man('Vasiliy', 12);
var misha = new Man('Mikhail', 14);
var vika = new Woman('Viktoria', 15);
var katya = new Woman('Ekaterina', 70);

vasiliy.getMarried(misha); // Однополые браки не проходят
katya.getMarried(vika);
console.log(katya.husband); // И выдают undefined
console.log(katya.wife);
console.log(vika.husband);
console.log(vasiliy.wife);
console.log(misha.wife);

vasiliy.getMarried(vika);
katya.getMarried(misha);
console.log(katya.husband);
console.log(vika.husband);
console.log(vasiliy.wife);
console.log(misha.wife);

/*vasiliy.getMarried(vika);
katya.getMarried(misha);
console.log(katya.husband);
console.log(vika.husband);
console.log(vasiliy.wife);
console.log(misha.wife);*/

/*katya.getMarried(vasiliy);
console.log(katya.getMarried(vasiliy));
console.log(katya.husband);
console.log(vasiliy.wife);
console.log(katya.name + ' > ' + (this.husband && this.husband.name || 'none'));

vika.getMarried(misha);
console.log(vika.getMarried(misha));
console.log(vika.husband);
console.log(misha.wife);
console.log(misha.name + ' > ' + (this.wife && this.wife.name || 'none'));

vasiliy.setBestFriend(misha);
vasiliy.whoIsMyBestFriend();*/

//console.log(vasiliy.constructor === Man);

/*console.log(vasiliy.__proto__);
console.log(Man.Gender);
console.log(vasiliy.Gender);
console.log(Object.getPrototypeOf(vasiliy).Gender);
console.log(vasiliy.constructor);
console.log(vasiliy.constructor.prototype);
console.log(vasiliy.__proto__ === misha.__proto__);
console.log(vasiliy.constructor === misha.constructor);
console.log(vasiliy.constructor.prototype === misha.constructor.prototype);*/
/*console.log(vasiliy.__proto__ === vika.__proto__);
console.log(vasiliy.constructor === vika.constructor);
console.log(vasiliy.constructor.prototype === vika.constructor.prototype);*/

/*
getMarried(woman) {
        if (this.constructor.prototype === woman.constructor.prototype) return 2;
        else if (woman & this.Wife != woman) {
            this.Wife = woman;
            this.Wife.getMarried(this);
        }
        else {
            this.Wife = woman;
            
        };
    }

getMarried(man) {
        if (this.constructor.prototype === man.constructor.prototype) return 2;
        else if (man & this.Husband != man) {
            this.Husband = man;
            this.Husband.getMarried(this);
        }
        else {
            this.Husband = man;
            
        };
    }
*/






/*var sergey = new Person('Sergey', 42);
sergey.whoIsMyBestFriend();
var vasya = new Person('Vasya', 32);
sergey.setBestFriend(vasya);
sergey.whoIsMyBestFriend();
vasya.whoIsMyBestFriend();*/