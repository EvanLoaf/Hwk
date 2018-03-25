'use strict'

class Person {
    
    constructor(name, age) {    // Тут они задаются и эти св-ва являются собственными
        this.name = name;
        this.age = age;
        this.bfs = [];
    }

    setBestFriend(person) {  // Задается всему прототипу и потом унаследуется
        if (this === person) return 123;
        let k = 0;
        for (var i = 0, length = this.bfs.length; i < length; i++) {
            if (this.bfs[i] === person.name) {
                k = 1;
            }
            else return;
        }
        if (k === 0) {
            this.bfs.push(person.name);
            //this.bfs.splice(this.bfs.length, 0, person.name);
            person.bfs.push(this.name);
            //person.bfs.splice(this.bfs.length, 0, this.name);
            // person.setBestFriend(this);
        }
    }

    /*setBestFriend(person) {  // Задается всему прототипу и потом унаследуется
        if (this === person) return 123;
        let k = 0;
        for (var i = 0; i < this.bfs.length; i++) {
            if (this.bfs[i] == person.name) {
                k = 1;
            }
            else return;
        }
        if (k == 0) {
            this.bfs.push(person.name);
            //this.bfs.splice(this.bfs.length, 0, person.name);
            person.bfs.push(this.name);
            //person.bfs.splice(this.bfs.length, 0, this.name);
            // person.setBestFriend(this);
        }
        this.bfs.push(person.name);
            //this.bfs.splice(this.bfs.length, 0, person.name);
            person.bfs.push(this.name);
            //person.bfs.splice(this.bfs.length, 0, this.name);
            // person.setBestFriend(this);
    }*/

    whoIsMyBestFriend() {  // Задается всему прототипу и потом унаследуется
        console.log(this.name + ' > ' + (this.bfs.join(', ')));
    }
}

var sergey = new Person('Sergey', 42);
sergey.whoIsMyBestFriend();
var vasya = new Person('Vasya', 32);
//console.log(sergey.setBestFriend(vasya));
sergey.setBestFriend(vasya);
console.log(sergey.setBestFriend(sergey));
sergey.whoIsMyBestFriend();
sergey.setBestFriend(vasya);
vasya.setBestFriend(sergey);
sergey.whoIsMyBestFriend();
vasya.whoIsMyBestFriend();
//vasya.whoIsMyBestFriend();
console.log(sergey.bfs);
console.log(vasya.bfs);
//console.log(Object.keys(sergey.bfs));
var mishanya = new Person('Mixa', 555);
var dimas = new Person('Dimon', 60);
sergey.setBestFriend(mishanya);
sergey.setBestFriend(dimas);
dimas.setBestFriend(mishanya);
sergey.whoIsMyBestFriend();
vasya.whoIsMyBestFriend();
dimas.whoIsMyBestFriend();
mishanya.whoIsMyBestFriend();
console.log(sergey.bfs);
console.log(vasya.bfs);
sergey.name = 'asd';
console.log(sergey.name);




/*class Person {
    
    constructor(name, age) {    // Тут они задаются и эти св-ва являются собственными
        this.name = name;
        this.age = age;
        this.bfs = {};
    }

    setBestFriend(person) {  // Задается всему прототипу и потом унаследуется
        if (this === person) return 123;
        if (Object.keys(this).toString === false) {
            this.bfs[person] = person.name;
            return 555;
        }
        if (person && (person in this.bfs ? 0 : 1)) {
            this.bfs[person] = person.name;
            //person.setBestFriend(this);
            return 666;
        }
    }

    whoIsMyBestFriend() {  // Задается всему прототипу и потом унаследуется
        console.log(this.name + ' > ' + (this.bfs && Object.keys(this.bfs).join(', ') || 'none'));
    }
}

var sergey = new Person('Sergey', 42);
sergey.whoIsMyBestFriend();
var vasya = new Person('Vasya', 32);
console.log(sergey.setBestFriend(sergey));
console.log(sergey.setBestFriend(vasya));
sergey.setBestFriend(vasya);
sergey.whoIsMyBestFriend();
vasya.whoIsMyBestFriend();
console.log(sergey.bfs);
console.log(Object.keys(sergey.bfs));*/