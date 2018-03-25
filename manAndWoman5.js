function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.setBestFriend = function(person) {
    if (this === person) return;
    if (person && this.bestFriend != person) {    // this.bestFriend = person; person.bestFriend = this;
        this.bestFriend = person;
        this.bestFriend.setBestFriend(this);
    }
}
Person.prototype.whoIsMyBestFriend = function() {
    console.log(this.name + ' > ' + (this.bestFriend && this.bestFriend.name || 'none'));
}

function Man(name, age) {
    this.superConstructor.call(this, name, age);
}
var f = function() {};
f.prototype = Person.prototype;
Man.prototype = new f();
Man.prototype.constructor = Man;
Man.prototype.super = f.prototype;
Man.prototype.superConstructor = Person;

Man.prototype.setBestFriend = function(person) {
    this.super.setBestFriend.call(this, person);
}
Man.prototype.whoIsMyBestFriend = function() {
    this.super.whoIsMyBestFriend.call(this);
    console.log('ES5 ver');
}
Man.prototype.getMarried = function(person) {
    if (this.constructor.prototype === person.constructor.prototype) {
        return 1;
    }
    if ( (person && this.wife != person) && (person && this.husband != person) ) {
        if (this.constructor === Man) {
            this.wife = person;
            this.wife.getMarried(this);
            console.log('ES5 ver marry');
        }
        else if (this.constructor === Woman) {
            this.husband = person;
            this.husband.getMarried(this);
            console.log('ES5 ver marry');
        }
    }
}

function Woman(name, age) {
    this.superConstructor.call(this, name, age);
}
var f = function() {}
f.prototype = Person.prototype;
Woman.prototype = new f();
Woman.prototype.constructor = Woman;
Woman.prototype.super = f.prototype;
Woman.prototype.superConstructor = Person;

Woman.prototype.setBestFriend = function(person) {
    this.super.setBestFriend.call(this, person);
}
Woman.prototype.whoIsMyBestFriend = function() {
    this.super.whoIsMyBestFriend.call(this);
    console.log('ES5 ver');
}
Woman.prototype.getMarried = function(person) {
    if (this.constructor.prototype === person.constructor.prototype) {
        return 1;
    }
    if ( (person && this.wife != person) && (person && this.husband != person) ) {
        if (this.constructor === Man) {
            this.wife = person;
            this.wife.getMarried(this);
            console.log('ES5 ver marry');
        }
        else if (this.constructor === Woman) {
            this.husband = person;
            this.husband.getMarried(this);
            console.log('ES5 ver marry');
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

vasiliy.setBestFriend(katya);
vika.setBestFriend(misha);

vasiliy.whoIsMyBestFriend();
vika.whoIsMyBestFriend();