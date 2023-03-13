function Person(name, age) {
    this.name = name;
    this.age = age;
} 

const hyuk = new Person('혁', 20)

class Person {
    constructor(name, age) {
        console.log('생성 되었습니다.')
        this.name = name;
        this.age = age;
    }
}

const seho = new Person('권혁', 20);
console.log(seho)